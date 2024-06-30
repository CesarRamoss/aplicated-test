export interface UrlChecks {
  searchResult: string;
  filtersApplied: string;
}

export interface SearchData {
  urlChecks: UrlChecks;
  propertyType: string;
  filters: string[];
}
