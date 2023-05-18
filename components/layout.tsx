import React, { ReactNode } from 'react'
import NavBar from '../components/navBar'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between font-content antialiased">
      <NavBar />
      <main className="flex min-h-screen flex-col item-center items-center sm:p-12 md:p-48 md:py-48 md:pt-24">{children}</main>
    </div>
  )
}

export default Layout
