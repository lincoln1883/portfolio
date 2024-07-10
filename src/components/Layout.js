import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Outlet />
    </main>
  )
}

export default Layout