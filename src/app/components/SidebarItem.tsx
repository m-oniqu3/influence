import React from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

function SidebarItem(props: Props) {
  const { icon, label, active = false, onClick } = props;

  return (
    <button
      className={`sidebar-link ${
        active ? "bg-slate-50 dark:bg-gray-800 rounded-lg" : ""
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default SidebarItem;
