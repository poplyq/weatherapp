import React, { useEffect, useState } from 'react'
import clear from './icons/clear.svg'
import cloud from './icons/cloud.svg'
import cloudheavy from './icons/cloudheavy.svg'
import snow from './icons/snow.svg'
import cloudmoderate from './icons/cloudmoderate.svg'
import fog from './icons/fog.svg'
import grad from './icons/grad.svg'
import rainheavy from './icons/rainheavy.svg'
import rainshower from './icons/rainshower.svg'
import thunder from './icons/thunder.svg'
import unkn from './icons/unkn.svg'
import './weatherBlock.scss'

interface WeatherBlockProps {
  weathercode: number
}
export const WeatherBlock = ({ weathercode }: WeatherBlockProps) => {
  const [weatherTitle, setWeatherTitle] = useState<string>('')
  const [icon, setIcon] = useState<string>('')
  useEffect(() => {
    switch (weathercode) {
      case 0:
        setWeatherTitle('Ясное небо')
        setIcon(clear)
        break
      case 1:
        setWeatherTitle('В основном ясно')
        setIcon(cloud)
        break
      case 2:
        setWeatherTitle('Переменная облачность')
        setIcon(cloudmoderate)
        break
      case 3:
        setWeatherTitle('Пасмурно')
        setIcon(cloudheavy)
        break
      case 45:
        setWeatherTitle('Туман')
        setIcon(fog)
        break
      case 48:
        setWeatherTitle('Туман, возможно иней')
        setIcon(fog)
        break
      case 51:
        setWeatherTitle('Легкая морось')
        setIcon(rainheavy)
        break
      case 53:
        setWeatherTitle('Умеренная морось')
        setIcon(rainheavy)
        break
      case 58:
        setWeatherTitle('Морось сильной интенсивности')
        setIcon(rainheavy)
        break
      case 56:
        setWeatherTitle('Легкая изморозь')
        setIcon(grad)
        break
      case 57:
        setWeatherTitle('Изморозь сильной интенсивности')
        setIcon(grad)
        break
      case 61:
        setWeatherTitle('Слабый дождь')
        setIcon(rainheavy)
        break
      case 63:
        setWeatherTitle('Умеренный дождь')
        setIcon(rainshower)
        break
      case 65:
        setWeatherTitle('Ливень')
        setIcon(rainshower)
        break
      case 66:
        setWeatherTitle('Дождь со снегом')
        setIcon(rainshower)
        break
      case 66:
        setWeatherTitle('Ледянной ливень')
        setIcon(rainshower)
        break
      case 71:
        setWeatherTitle('Легкий снегопад')
        setIcon(grad)
        break
      case 73:
        setWeatherTitle('Умеренный снегопад')
        setIcon(snow)
        break
      case 75:
        setWeatherTitle('Снежная буря')
        setIcon(snow)
        break
      case 77:
        setWeatherTitle('Град')
        setIcon(grad)
        break
      case 80:
        setWeatherTitle('Непродолжительне проливные дожди')
        setIcon(rainheavy)
        break
      case 81:
        setWeatherTitle('Умеренные проливные дожди')
        setIcon(rainheavy)
        break
      case 82:
        setWeatherTitle('Проливные дожди весь день')
        setIcon(rainheavy)
        break
      case 85:
        setWeatherTitle('Непродолжительный снегопад')
        setIcon(snow)
        break
      case 86:
        setWeatherTitle('Сильный снегопад')
        setIcon(snow)
        break
      case 95:
        setWeatherTitle('Гроза')
        setIcon(thunder)
        break
      case 96:
        setWeatherTitle('Гроза и град')
        setIcon(thunder)
        break
      case 99:
        setWeatherTitle('Гроза и сильный град')
        setIcon(thunder)
        break
      default:
        setWeatherTitle('Нет данных о погоде')
        setIcon(unkn)
        break
    }
  }, [weathercode])
  return (
    <div>
      <img src={icon} className='weatherIcon' />
      <p> {weatherTitle}</p>
    </div>
  )
}
