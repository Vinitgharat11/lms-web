"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";
import SidebarItems from "./sidebar-items";

const guestRoutes = [
  {
    icon: Layout,
    label: "dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "browse",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

export default function SidebarRoutes() {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/techer");

  const routes = isTeacherPage ? guestRoutes : teacherRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItems
          key={route.href}
          Icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}
