export interface weatherDTO {
  current_weather: currentWeather
  elevation: number
  daily: Daily
  daily_units: { temperature_2m_max: string; time: string }
  latitude: number
  longitude: number
  timezone: string
  utc_offset_seconds: number
}

export interface currentWeather {
  is_day: number
  weathercode: number
  winddirection: number
  windspeed: number
  temperature: number
}

interface Daily {
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  time: string[]
}
