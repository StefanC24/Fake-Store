import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to={'/'}>
        <h1 className='logo'>Fake Store</h1>
    </Link>
  )
}
