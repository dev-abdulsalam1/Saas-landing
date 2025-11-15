"use client"
import {  Home,FolderOpenDot, Inbox, Settings, ChartArea } from "lucide-react"
import Image from "next/image"
import Logo from "@/assets/logo.png"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { UserButton, useUser } from "@clerk/nextjs"
import { usePathname } from "next/navigation"

// Menu items.
const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Today’s Tasks", url: "/dashboard/tasks", icon: Inbox },
  { title: "Progress Overview", url: "/dashboard/overview", icon: ChartArea },
  { title: "Projects", url: "/dashboard/projects", icon: FolderOpenDot }
]

export function AppSidebar() {
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <Sidebar className="w-64 bg-[#0c2cb9] border-r border-gray-200 text-[#07165c] font-bold">
      <SidebarContent>
        <SidebarGroup>
          {/* Logo + App Name */} 
          
          <SidebarGroupLabel className="font-bold text-2xl flex items-center gap-2 my-6 text-[#0b1e6e]">
            
            <Link href="/" className="flex items-center gap-2">
             <Image src={Logo} alt="FocusWave Logo" width={40} height={40} />
              <span>FocusWave</span>
            </Link>

            </SidebarGroupLabel>
           
          {/* Menu */}
          <SidebarGroupContent className="mt-4">
            <SidebarMenu className="space-y-4 ">
              {items.map((item) => {
                const isActive = pathname === item.url; // check if this tab is active
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`flex items-center gap-2 px-3 py-2 rounded ${
                          isActive
                            ? "bg-[#0b1e6e] text-blue-50 font-bold hover:bg-[#0b1e6e]"
                            : "hover:bg-[#0b1e6e]"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-2 mb-2 font-medium">
          
          <UserButton />
          {user && <span className="font-bold tracking-tighter">{user.firstName}</span>}
        </div>
        <p className="text-xs text-gray-800 font-bold">© 2025 FocusWave</p>
      </SidebarFooter>
    </Sidebar>
  )
}
