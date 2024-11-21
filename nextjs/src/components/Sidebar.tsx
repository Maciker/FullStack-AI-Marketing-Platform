"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getDesktopClasses } from "../../utils/sidebarUtils";
import { getMobileClasses } from "../../utils/sidebarUtils";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {}, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    } else {
      setIsCollapsed((prev) => !prev);
    }
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const renderMenuIcon = (isOpen: boolean) => {
    return isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />;
  };

  return (
    <div>
      {isMobile && (
        <Button
          variant="ghost"
          onClick={toggleSidebar}
          className={cn(
            "fixed top-4 left-4 z-50 bg-transparent hover:bg-gray-100/50 backdrop-blur-sm",
            isOpen && "top-4 left-4"
          )}
        >
          {renderMenuIcon(isOpen)}
        </Button>
      )}
      {(!isMobile || isOpen) && (
        <div
          className={cn(
            "bg-gray-100 flex flex-col h-screen transition-all duration-300 overflow-y-auto",
            getMobileClasses(isMobile, isOpen),
            getDesktopClasses(isMobile, isCollapsed)
          )}
        >
          <div
            className={cn(
              "flex flex-col flex-grow p-6",
              isMobile ? "pt-16" : "pt-10"
            )}
          >
            <h1 className="text-4xl font-bold mb-10">AI Marketing Platform</h1>
            <SidebarNav isMobile={isMobile} isCollapsed={isCollapsed} />
          </div>
          {!isMobile &&
            true
            //<SidebarToggle isCollapsed={isCollapsed} toggle={toggleSidebar} />
          }
        </div>
      )}
      <div></div>
    </div>
  );
}
