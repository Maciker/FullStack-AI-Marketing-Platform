"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getDesktopClasses } from "../../utils/sidebarUtils";
import { getMobileClasses } from "../../utils/sidebarUtils";

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
          <h1 className="text-4xl font-bold mb-10">AI Marketing Platform</h1>
        </div>
      )}
      <div></div>
    </div>
  );
}
