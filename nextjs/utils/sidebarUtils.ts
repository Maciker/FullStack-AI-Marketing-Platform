export const getMobileClasses = (
  isMobile: boolean,
  isOpen: boolean
): string => {
  if (!isMobile) return "";
  const baseClasses = "fixed inset-y-0 left-0 z-40 w-64 transform";
  return isOpen
    ? `${baseClasses} translate-x-0`
    : `${baseClasses} -translate-x-full`;
};

export const getDesktopClasses = (
  isMobile: boolean,
  isCollapsed: boolean
): string => {
  if (isMobile) return "";
  const baseClasses = "h-screen sticky top-0";
  return isCollapsed ? `${baseClasses} w-20` : `${baseClasses} w-64`;
};
