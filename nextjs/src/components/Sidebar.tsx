"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

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
      {isMobile && <Button variant="ghost">{renderMenuIcon(isOpen)}</Button>}
      <div>
        <h1>AI Marketing Platform</h1>
      </div>
    </div>
  );
}
