import React from "react";

function IconGrid({
  className,
  strokeColor = "black",
}: {
  className?: string;
  strokeColor?: string;
}) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 1C18.1046 1 19 1.88316 19 2.9726L19 6.33992C19 7.42936 18.1046 8.31252 17 8.31252H14C12.8954 8.31252 12 7.42936 12 6.33992L12 2.9726C12 1.88316 12.8954 1 14 1L17 1Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 1C1.89543 1 0.999999 1.88316 0.999999 2.9726L1.00001 6.33992C1.00001 7.42936 1.89544 8.31252 3.00001 8.31252H6.00001C7.10458 8.31252 8.00001 7.42936 8.00001 6.33992L8 2.9726C8 1.88316 7.10457 1 6 1L3 1Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 11.6875C18.1046 11.6875 19 12.5707 19 13.6601V17.0274C19 18.1168 18.1046 19 17 19H14C12.8954 19 12 18.1168 12 17.0274L12 13.6601C12 12.5707 12.8954 11.6875 14 11.6875H17Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.00001 11.6875C1.89544 11.6875 1.00001 12.5707 1.00001 13.6601L1.00001 17.0274C1.00001 18.1168 1.89544 19 3.00001 19H6.00001C7.10458 19 8.00001 18.1168 8.00001 17.0274L8.00001 13.6601C8.00001 12.5707 7.10458 11.6875 6.00001 11.6875H3.00001Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconGrid;
