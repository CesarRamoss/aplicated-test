export interface UrlChecks {
  homePage: string;
  searchResult: string;
  filtersApplied: string;
}

export interface SearchData {
  urlChecks: UrlChecks;
  propertyType: string;
  filters: string[];
  notFound: string;
}
