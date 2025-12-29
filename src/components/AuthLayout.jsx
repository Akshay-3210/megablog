import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  // read auth status from the auth reducer
  const authStatus = useSelector((state) => state.authreducer.status)

  useEffect(() => {
    // If route requires auth and user is not authenticated, redirect to login
    if (authentication && !authStatus) {
      navigate('/login', { replace: true })
      return
    }

    // If route is for guests only and user is authenticated, redirect home
    if (!authentication && authStatus) {
      navigate('/', { replace: true })
      return
    }

    setLoading(false)
  }, [authentication, authStatus, navigate])

  return loading ? <h1>Loading...</h1> : children
}
