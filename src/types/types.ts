export type PostCode = {
  status: string;
  match_type: string;
  input: string;
  data: PostCodeData;
  copyright: string[];
};

type PostCodeData = {
  postcode: string;
  status: string;
  usertype: string;
  easting: number;
  northing: number;
  positional_quality_indicator: number;
  country: string;
  latitude: string;
  longitude: string;
  postcode_no_space: string;
  postcode_fixed_width_seven: string;
  postcode_fixed_width_eight: string;
  postcode_area: string;
  postcode_district: string;
  postcode_sector: string;
  outcode: string;
  incode: string;
};

export type Crime = {
  category: CrimeDatumCategory;
  location_type: LocationType;
  location: Location;
  context: string;
  outcome_status: OutcomeStatus | null;
  persistent_id: string;
  id: number;
  location_subtype: string;
  month: string;
};

export type CrimeData = {
  category: CrimeDatumCategory;
  location_type: LocationType;
  location: Location;
  context: string;
  outcome_status: OutcomeStatus | null;
  persistent_id: string;
  id: number;
  location_subtype: string;
  month: string;
}[];

export enum CrimeDatumCategory {
  AntiSocialBehaviour = "anti-social-behaviour",
  Burglary = "burglary",
  CriminalDamageArson = "criminal-damage-arson",
  Drugs = "drugs",
  OtherCrime = "other-crime",
  OtherTheft = "other-theft",
  PossessionOfWeapons = "possession-of-weapons",
  PublicOrder = "public-order",
  Robbery = "robbery",
  Shoplifting = "shoplifting",
  VehicleCrime = "vehicle-crime",
  ViolentCrime = "violent-crime",
}

type Location = {
  latitude: string;
  street: Street;
  longitude: string;
};

type Street = {
  id: number;
  name: string;
};

enum LocationType {
  Force = "Force",
}

type OutcomeStatus = {
  category: OutcomeStatusCategory;
  date: string;
};

enum OutcomeStatusCategory {
  AwaitingCourtOutcome = "Awaiting court outcome",
  FormalActionIsNotInThePublicInterest = "Formal action is not in the public interest",
  FurtherActionIsNotInThePublicInterest = "Further action is not in the public interest",
  FurtherInvestigationIsNotInThePublicInterest = "Further investigation is not in the public interest",
  InvestigationCompleteNoSuspectIdentified = "Investigation complete; no suspect identified",
  LocalResolution = "Local resolution",
  UnableToProsecuteSuspect = "Unable to prosecute suspect",
  UnderInvestigation = "Under investigation",
}
