import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import VotationsClient from "./votations-client";

export const metadata: Metadata = {
  title: "Abstimmungs-Empfehlungen vom 14. Juni 2026",
  description: "Übersicht der Parolen und Abstimmungsempfehlungen der Parteien für die Eidgenössischen, Kantonalen und Kommunalen Abstimmungen vom 14. Juni 2026.",
};

import { BallotGroup } from "./types";

export default function VotationsPage() {
  const filePath = path.join(process.cwd(), "public", "votations.json");
  let data: BallotGroup[] = [];

  try {
    const rawData = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(rawData);
  } catch (error) {
    console.error("Failed to read votations.json:", error);
  }

  return <VotationsClient initialData={data} />;
}
