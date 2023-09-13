import React, { useEffect, useState } from 'react'
import './header.scss'
import { useGetSuggestMutation } from '../../store/api/suggestApi'
import { useDebounce } from '../../helpers/hooks/useDebounce'

export const Header = () => {
  const [getSuggest] = useGetSuggestMutation()
  const [search, setSearch] = useState<string>('')
  const newValue = useDebounce(search, 1000)

  useEffect(() => {
    getSuggest({
      query: `${newValue}`,
      locations: [
        {
          country: '*',
        },
      ],
    })
  }, [getSuggest, newValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  return (
    <div className='header'>
      <input className='input' onChange={handleChange} value={search} />
    </div>
  )
}
