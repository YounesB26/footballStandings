export interface I_StandingsResponse {
  get: string;
  parameters: { season: number; league: number };
  errors: [];
  results: number;
  paging: { current: number; total: number };
  response: [{ league: I_League }];
}

export interface I_League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: [I_Standings[]];
}

export interface I_Standings {
  rank: number;
  team: I_Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: I_Results;
  home: I_Results;
  away: I_Results;
  update: string;
}

export interface I_Results {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: {
    for: number;
    against: number;
  };
}

export interface I_Team {
  id: number;
  name: string;
  logo: string;
}
