"use client";

import { useEffect, useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {}, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <h1>AI Marketing Platform</h1>
      </div>
    </div>
  );
}
