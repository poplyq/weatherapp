import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const NotFoundPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  })
  return <div></div>
}

export default NotFoundPage
