import React from 'react'
import './wrapper.scss'

interface WrapperProps {
  close(): void
}
export const Wrapper = ({ close }: WrapperProps) => {
  return <div className='wrapper' onClick={close}></div>
}
