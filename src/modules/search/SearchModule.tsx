import React, { useEffect, useState } from 'react'
import { useGetSuggestMutation } from '../../store/api/suggestApi'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { Wrapper } from '../../components/common/Wrapper'
import { SuggestModule } from '../suggest/SuggestModule'
import './searchModule.scss'

export const SearchModule = () => {
  const [getSuggest, { data, isSuccess }] = useGetSuggestMutation()
  const [isActive, setIsActive] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const newValue = useDebounce(search, 1000)
  const toogle = () => setIsActive(!isActive)
  const close = () => {
    setSearch('')
    toogle()
  }
  useEffect(() => {
    if (newValue) {
      getSuggest({
        query: `${newValue}`,
        locations: [
          {
            country: '*',
          },
        ],
      })
    }
  }, [getSuggest, newValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  return (
    <div className='searchModule'>
      {isActive && <Wrapper close={toogle} />}
      <input
        className='input'
        onChange={handleChange}
        value={search}
        onFocus={toogle}
        placeholder='Введите название города'
      />
      {isActive && isSuccess && search && search === newValue && (
        <SuggestModule data={data} close={close} />
      )}
    </div>
  )
}
