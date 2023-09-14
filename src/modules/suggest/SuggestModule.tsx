import React from 'react'
import { SuggestData } from '../../types/suggest/suggest'
import './suggestModule.scss'
import { SuggestComponent } from '../../components/suggest/SuggestComponent'

interface SuggestModuleProps {
  data: SuggestData[] | undefined
  close(): void
}
export const SuggestModule = ({ data, close }: SuggestModuleProps) => {
  return (
    <div className='suggestModule'>
      {data && data.length > 0 ? (
        data.map((element) => (
          <SuggestComponent
            title={element.value}
            key={element.value}
            latitude={element.data.geo_lat}
            longitude={element.data.geo_lon}
            close={close}
          />
        ))
      ) : (
        <p>Поиск не дал результатов</p>
      )}
    </div>
  )
}
