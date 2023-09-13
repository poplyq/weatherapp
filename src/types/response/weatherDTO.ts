export interface weatherDTO {
  current_weather: currentWeather
  elevation: number
  hourly: Hourly
  hourly_units: { temperature_2m: string; time: string }
  latitude: number
  longitude: number
  timezone: string
  utc_offset_seconds: number
}

interface currentWeather {
  is_day: number
  weathercode: number
  winddirection: number
  windspeed: number
}

interface Hourly {
  temperature_2m: number[]
  time: string[]
}
