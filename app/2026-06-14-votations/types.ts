export interface VoteRecommendation {
  party: string;
  recommendation: string | null;
  reason: string | null;
  url?: string;
}

export interface BallotItem {
  subId: null | "a" | "b" | "c";
  subLabel: null | "Initiative" | "Gegenvorschlag" | "Stichfrage";
  itemName: string;
  shortDescription: string;
  voteRecommendations: VoteRecommendation[];
}

export interface BallotGroup {
  id: string;
  ballotNumber: number;
  level: "federal" | "cantonal" | "communal";
  type: "single" | "bundle";
  items: BallotItem[];
}

