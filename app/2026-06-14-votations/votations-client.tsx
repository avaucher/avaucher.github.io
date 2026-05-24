"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BallotGroup } from "./types";

interface VotationsClientProps {
  initialData: BallotGroup[];
}

interface TooltipState {
  reason: string;
  url?: string;
  x: number;
  y: number;
}

const DEFAULT_PARTY_ORDER = ["SVP", "FDP", "Die Mitte", "EVP", "GLP", "GRÜNE", "SP", "AL"];

export default function VotationsClient({ initialData }: VotationsClientProps) {
  const [activeTooltip, setActiveTooltip] = useState<TooltipState | null>(null);
  const [tooltipCellKey, setTooltipCellKey] = useState<string | null>(null);
  const [viewportWidth, setViewportWidth] = useState(1000);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Read initial theme from document class on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Update viewport width on resize for tooltip clamping
  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically find all unique parties in data
  const uniqueParties = Array.from(
    new Set(
      initialData.flatMap((group) =>
        group.items.flatMap((item) =>
          item.voteRecommendations.map((rec) => rec.party)
        )
      )
    )
  );

  // Sort parties: preferred order first, then alphabetical
  const parties = uniqueParties.sort((a, b) => {
    const indexA = DEFAULT_PARTY_ORDER.indexOf(a);
    const indexB = DEFAULT_PARTY_ORDER.indexOf(b);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.localeCompare(b);
  });

  // Group items by voting level
  const federalGroups = initialData.filter((group) => group.level === "federal");
  const cantonalGroups = initialData.filter((group) => group.level === "cantonal");
  const communalGroups = initialData.filter((group) => group.level === "communal");

  // Get localized recommendation label
  const renderCellLabel = (rec?: string | null) => {
    if (!rec) return "-";
    const norm = rec.toLowerCase();
    if (norm === "ja") return "Ja";
    if (norm === "nein") return "Nein";
    if (norm === "stimmfreigabe" || norm === "freigabe") {
      return (
        <>
          <span className="hidden sm:inline">Freigabe</span>
          <span className="inline sm:hidden">Frei.</span>
        </>
      );
    }
    if (norm === "initiative") {
      return (
        <>
          <span className="hidden sm:inline">Initiative</span>
          <span className="inline sm:hidden">Init.</span>
        </>
      );
    }
    if (norm === "gegenvorschlag") {
      return (
        <>
          <span className="hidden sm:inline">Gegenvorschlag</span>
          <span className="inline sm:hidden">Gegenv.</span>
        </>
      );
    }
    return rec;
  };

  // Get CSS class names for styling recommendations
  const getCellStyles = (rec?: string | null, hasUrl?: boolean) => {
    if (!rec) {
      return "bg-slate-50/50 dark:bg-slate-900/30 text-slate-400 dark:text-slate-600 border border-slate-100/50 dark:border-slate-800/30 cursor-default";
    }
    const norm = rec.toLowerCase();
    const interactivity = hasUrl
      ? "cursor-pointer transition-all duration-150 hover:scale-[1.02] active:scale-95 hover:shadow-md"
      : "cursor-default";

    if (norm === "ja") {
      return `bg-emerald-100 text-emerald-800 border border-emerald-300/80 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700/50 hover:bg-emerald-200/90 dark:hover:bg-emerald-900/50 ${interactivity}`;
    }
    if (norm === "nein") {
      return `bg-rose-100 text-rose-800 border border-rose-300/80 dark:bg-rose-900/30 dark:text-rose-200 dark:border-rose-700/50 hover:bg-rose-200/90 dark:hover:bg-rose-900/50 ${interactivity}`;
    }
    if (norm === "stimmfreigabe" || norm === "freigabe") {
      return `bg-blue-100 text-blue-800 border border-blue-300/80 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700/50 hover:bg-blue-200/90 dark:hover:bg-blue-900/50 ${interactivity}`;
    }
    if (norm === "initiative") {
      return `bg-indigo-100 text-indigo-800 border border-indigo-300/80 dark:bg-indigo-900/30 dark:text-indigo-200 dark:border-indigo-700/50 hover:bg-indigo-200/90 dark:hover:bg-indigo-900/50 ${interactivity}`;
    }
    if (norm === "gegenvorschlag") {
      return `bg-amber-100 text-amber-800 border border-amber-300/80 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-700/50 hover:bg-amber-200/90 dark:hover:bg-amber-900/50 ${interactivity}`;
    }
    return `bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 ${interactivity}`;
  };

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLElement>,
    reason: string | null,
    url?: string,
    cellKey?: string
  ) => {
    if (!reason && !url) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setActiveTooltip({
      reason: reason || "Keine Begründung angegeben.",
      url,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
    if (cellKey) setTooltipCellKey(cellKey);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
    setTooltipCellKey(null);
  };

  // Close tooltip on click outside
  useEffect(() => {
    if (!activeTooltip) return;

    const handleGlobalClick = () => {
      setActiveTooltip(null);
      setTooltipCellKey(null);
    };

    const timer = setTimeout(() => {
      window.addEventListener("click", handleGlobalClick);
      window.addEventListener("touchstart", handleGlobalClick);
    }, 10);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("touchstart", handleGlobalClick);
    };
  }, [activeTooltip]);

  const handleCellClick = (
    e: React.MouseEvent,
    rec: { reason: string | null; url?: string },
    cellKey: string
  ) => {
    const isTooltipCurrentlyOpen = tooltipCellKey === cellKey;

    if (!isTooltipCurrentlyOpen && (rec.reason || rec.url)) {
      e.preventDefault();
      e.stopPropagation();

      const rect = e.currentTarget.getBoundingClientRect();
      setActiveTooltip({
        reason: rec.reason || "Keine Begründung angegeben.",
        url: rec.url,
        x: rect.left + rect.width / 2,
        y: rect.top - 8,
      });
      setTooltipCellKey(cellKey);
    } else {
      setActiveTooltip(null);
      setTooltipCellKey(null);
    }
  };

  // Tooltip clamping logic
  const tooltipWidth = 288; // w-72
  let tooltipLeft = 0;
  let arrowOffset = 0;

  if (activeTooltip) {
    tooltipLeft = activeTooltip.x;
    // Clamp to viewport borders with 16px padding
    if (tooltipLeft - tooltipWidth / 2 < 16) {
      tooltipLeft = 16 + tooltipWidth / 2;
    } else if (tooltipLeft + tooltipWidth / 2 > viewportWidth - 16) {
      tooltipLeft = viewportWidth - 16 - tooltipWidth / 2;
    }
    arrowOffset = activeTooltip.x - tooltipLeft;
  }

  // Render a section's table
  const renderTable = (groups: BallotGroup[], title: string) => {
    if (groups.length === 0) return null;

    return (
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-l-4 border-blue-500 pl-3">
          {title}
        </h2>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-visible">
          <div className="overflow-visible">
            <table className="w-full border-separate border-spacing-0 table-fixed">
              <thead>
                <tr className="bg-slate-50/70 dark:bg-slate-900/50">
                  <th className="sticky top-0 left-0 bg-slate-50 dark:bg-slate-900 border-b border-r border-slate-200 dark:border-slate-800 z-30 p-2 sm:p-4 text-left font-semibold text-slate-700 dark:text-slate-300 text-xs sm:text-sm min-w-[125px] w-[125px] sm:min-w-[280px] sm:w-[320px] shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                    Vorlage
                  </th>
                  {parties.map((party) => (
                    <th
                      key={party}
                      className="sticky top-0 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm z-20 w-[70px] sm:w-[85px] p-2 sm:p-4 text-center font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm"
                    >
                      {party}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groups.flatMap((group, groupIdx) => {
                  const isBundle = group.type === "bundle";
                  const isLastGroupInTable = groupIdx === groups.length - 1;
                  
                  // Alternating background shades for vote groups
                  const isEvenGroup = groupIdx % 2 === 0;

                  // Background classes for the row and sticky cell (needs to be solid)
                  const rowBgClass = isEvenGroup
                    ? "bg-white dark:bg-slate-900"
                    : "bg-slate-100 dark:bg-slate-950";

                  return group.items.map((item, itemIdx) => {
                    const isLastRowInGroup = itemIdx === group.items.length - 1;

                    // Uniform bottom borders across the entire table
                    const bottomBorderClass = isLastGroupInTable && isLastRowInGroup
                      ? "border-b-0"
                      : "border-b border-slate-200 dark:border-slate-800";

                    const badgeText = isBundle
                      ? `Vorlage ${group.ballotNumber}${item.subId}`
                      : `Vorlage ${group.ballotNumber}`;

                    return (
                      <tr
                        key={`${group.id}-${item.subId || "single"}`}
                        className={`
                          group transition-colors ${rowBgClass}
                        `}
                      >
                        <td
                          className={`
                            sticky left-0 bg-clip-padding z-20 p-2 sm:p-4
                            border-r border-slate-200 dark:border-slate-800
                            shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] transition-colors
                            ${rowBgClass}
                            ${isBundle ? "border-l-4 border-indigo-500/80 dark:border-indigo-500/50" : ""}
                            ${bottomBorderClass}
                          `}
                        >
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span className={`
                              inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase
                              ${isBundle
                                ? "bg-indigo-50 text-indigo-700 border border-indigo-200/50 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900/30"
                                : "bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"}
                            `}>
                              {badgeText}
                            </span>
                            {item.subLabel && (
                              <span className={`
                                inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium
                                ${item.subId === "a" ? "bg-emerald-50 text-emerald-700 border border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-900/30" : ""}
                                ${item.subId === "b" ? "bg-amber-50 text-amber-700 border border-amber-100 dark:bg-amber-950/20 dark:text-amber-300 dark:border-amber-900/30" : ""}
                                ${item.subId === "c" ? "bg-indigo-50 text-indigo-700 border border-indigo-100 dark:bg-indigo-950/20 dark:text-indigo-300 dark:border-indigo-900/30" : ""}
                              `}>
                                {item.subLabel}
                              </span>
                            )}
                          </div>
                          <div 
                            lang="de"
                            className="font-semibold text-slate-900 dark:text-slate-100 text-xs sm:text-sm leading-tight mb-1 break-words hyphens-auto"
                          >
                            {item.itemName}
                          </div>
                          <div className="hidden sm:block text-xs text-slate-500 dark:text-slate-400 font-normal leading-normal break-words hyphens-auto">
                            {item.shortDescription}
                          </div>
                        </td>
                        {parties.map((party) => {
                          const rec = item.voteRecommendations.find((r) => r.party === party);
                          const isClickable = !!rec?.url;
                          const rawRec = rec?.recommendation || "";
                          const isLongLabel = rawRec.length > 5;
                          const textClass = isLongLabel
                            ? "text-[9.5px] leading-tight px-0.5 py-1 text-center"
                            : "text-xs";

                          const baseCellClass = `flex items-center justify-center h-full min-h-[48px] w-full rounded-lg font-bold ${textClass}`;

                          if (isClickable && rec) {
                            return (
                              <td
                                key={party}
                                className={`p-0.5 sm:p-1 text-center align-middle h-full ${bottomBorderClass}`}
                              >
                                <a
                                  href={rec.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`${baseCellClass} ${getCellStyles(
                                    rec.recommendation,
                                    true
                                  )}`}
                                  onMouseEnter={(e) => handleMouseEnter(e, rec.reason, rec.url, `${group.id}-${item.subId || "single"}-${party}`)}
                                  onMouseLeave={handleMouseLeave}
                                  onClick={(e) => handleCellClick(e, rec, `${group.id}-${item.subId || "single"}-${party}`)}
                                >
                                  {renderCellLabel(rec.recommendation)}
                                </a>
                              </td>
                            );
                          }

                          return (
                            <td
                              key={party}
                              className={`p-0.5 sm:p-1 text-center align-middle h-full ${bottomBorderClass}`}
                            >
                              <div
                                className={`${baseCellClass} ${getCellStyles(
                                  rec?.recommendation,
                                  false
                                )}`}
                                onMouseEnter={(e) =>
                                  rec?.reason ? handleMouseEnter(e, rec.reason, undefined, `${group.id}-${item.subId || "single"}-${party}`) : null
                                }
                                onMouseLeave={handleMouseLeave}
                                onClick={(e) =>
                                  rec ? handleCellClick(e, rec, `${group.id}-${item.subId || "single"}-${party}`) : undefined
                                }
                              >
                                {renderCellLabel(rec?.recommendation)}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  });
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between border-b border-slate-200 dark:border-slate-800 pb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 mb-3 select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Abstimmungen vom 14. Juni 2026
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent sm:text-4xl">
              Parolenspiegel
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Übersicht der Parolen und Abstimmungs-Empfehlungen der wichtigsten Parteien.
              Bewegen Sie den Mauszeiger über eine Parole, um die Begründung zu sehen.
            </p>
          </div>

          {/* Theme Toggle */}
          <div className="mt-6 sm:mt-0 sm:ml-4 flex items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all shadow-sm shrink-0"
              aria-label="Farbschema umschalten"
              title={theme === "dark" ? "In den Hellmodus wechseln" : "In den Dunkelmodus wechseln"}
            >
              {theme === "dark" ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>



        {/* Content Tables */}
        {renderTable(federalGroups, "Eidgenössische Abstimmungen")}
        {renderTable(cantonalGroups, "Kantonale Abstimmungen")}
        {renderTable(communalGroups, "Kommunale Abstimmungen")}

        {/* Disclaimer / Footer */}
        <div className="mt-12 text-center border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>
            Alle Angaben ohne Gewähr. Klicken Sie auf eine Parole, um die offizielle
            Kampagnenseite der jeweiligen Partei zu öffnen.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-semibold transition-colors self-center sm:self-auto"
          >
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>

      {/* Portal Tooltip */}
      {activeTooltip && (
        <div
          style={{
            position: "fixed",
            left: `${tooltipLeft}px`,
            top: `${activeTooltip.y}px`,
            transform: "translate(-50%, -100%)",
          }}
          className="z-50 w-72 bg-slate-900/95 dark:bg-slate-900/95 text-slate-100 dark:text-slate-200 text-xs rounded-xl p-3 shadow-xl border border-slate-800/80 dark:border-slate-800/80 pointer-events-none transition-all duration-150 backdrop-blur-sm"
        >
          <div className="font-medium leading-relaxed mb-1.5">
            {activeTooltip.reason}
          </div>
          {activeTooltip.url && (
            <div className="text-[10px] text-blue-400 dark:text-blue-300 font-semibold flex items-center gap-1 mt-1 border-t border-slate-800/50 dark:border-slate-800/50 pt-1.5">
              <span>➔ Klicken / Erneut tippen für Details</span>
            </div>
          )}
          <div
            style={{ left: `calc(50% + ${arrowOffset}px)` }}
            className="absolute top-full -translate-x-1/2 border-4 border-transparent border-t-slate-900/95 dark:border-t-slate-900/95"
          />
        </div>
      )}
    </div>
  );
}
