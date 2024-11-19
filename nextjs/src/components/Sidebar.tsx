"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {}, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
          className={cn(
            "fixed top-4 left-4 z-50 bg-transparent hover:bg-gray-100/50 backdrop-blur-sm",
            isOpen && "top-4 left-4"
          )}
        >
          {renderMenuIcon(isOpen)}
        </Button>
      )}
      <div>
        <h1>AI Marketing Platform</h1>
      </div>
    </div>
  );
}
