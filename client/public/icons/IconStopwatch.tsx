import React from "react";

function IconStopwatch({ strokeColor = "black" }: { strokeColor?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.3999 3.68696L20.9999 22.287M18.2608 6.85217L20.3477 4.76522M20.3477 4.76522L19.0956 3.51304M20.3477 4.76522L21.5999 6.01739M9.4999 2H14.4999M5.4216 8C4.22059 9.47819 3.4999 11.3685 3.4999 13.4286C3.4999 18.1624 7.30548 22 11.9999 22C14.0974 22 16.0175 21.2339 17.4999 19.964M19.9999 16.3319C20.3235 15.4252 20.4999 14.4477 20.4999 13.4286C20.4999 8.6947 16.6943 4.85714 11.9999 4.85714C10.9439 4.85714 9.93278 5.05135 8.9999 5.40627"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default IconStopwatch;
