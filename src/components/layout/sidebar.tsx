"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  CheckIcon,
  FolderIcon,
  Cog6ToothIcon,
  UsersIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Tasks", href: "/todos", icon: CheckIcon },
  { name: "Projects", href: "/projects", icon: FolderIcon },
  { name: "Team", href: "/team", icon: UsersIcon },
  { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "relative bg-white dark:bg-[#2D2D2D] border-r border-gray-200 dark:border-[rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out flex flex-col h-screen",
        isCollapsed ? "w-16" : "w-64"
      )}>
      {/* Toggle Button */}
      <div className="absolute -right-3 top-6 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={onToggle}
          className="h-6 w-6 rounded-full bg-white dark:bg-[#2D2D2D] border shadow-md hover:shadow-lg">
          {isCollapsed ? (
            <ChevronRightIcon className="h-3 w-3" />
          ) : (
            <ChevronLeftIcon className="h-3 w-3" />
          )}
        </Button>
      </div>

      {/* Header */}
      <div className="p-4 shrink-0">
        {isCollapsed ? (
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-white text-sm font-bold">A</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Advanced Todo
            </h1>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  "hover:bg-gray-100 dark:hover:bg-[#1F1F1F]",
                  isActive
                    ? "bg-blue-50 dark:bg-[#2EAADB]/20 text-blue-700 dark:text-[#2EAADB]"
                    : "text-gray-700 dark:text-[#9B9B9B]",
                  isCollapsed && "justify-center px-2"
                )}>
                <item.icon
                  className={cn(
                    "h-5 w-5 flex-shrink-0",
                    !isCollapsed && "mr-3"
                  )}
                />
                {!isCollapsed && <span className="truncate">{item.name}</span>}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 shrink-0">
        {isCollapsed ? (
          <div className="flex justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        ) : (
          <div className="text-xs text-gray-500 dark:text-[#9B9B9B] space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Online</span>
            </div>
            <p>Advanced Todo v1.0</p>
          </div>
        )}
      </div>
    </div>
  );
}
