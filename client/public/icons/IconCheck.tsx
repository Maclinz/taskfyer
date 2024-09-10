import React from "react";

function IconCheck({ strokeColor = "black" }: { strokeColor?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
    >
      <path
        d="M13.375 12.25L10 11.125V6.42087M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C10.5768 19 11.1409 18.9457 11.6875 18.8421M13.9375 16.1875L15.625 17.875L20.125 13.375"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default IconCheck;
