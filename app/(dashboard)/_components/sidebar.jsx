import Logo from '@/components/ui/logo'
import React from 'react'
import SidebarRoutes from './sidebar-routes'

export default function Sidebar() {
  return (
    <div>
      <div className="">
        <Logo/>
      </div>
      <div className="">
        <SidebarRoutes/>
      </div>
    </div>
  )
}
