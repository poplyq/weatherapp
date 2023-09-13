export interface SuggestData {
  data: FullSuggestData
  value: string
}
interface FullSuggestData {
  geo_lat?: string
  geo_lon?: string
}
