import React from "react";

function IconDeleteAll({ strokeColor = "black" }: { strokeColor?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
    >
      <path
        d="M7.79971 20.5998H3.5997C2.27421 20.5998 1.1997 19.5253 1.19971 18.1998L1.1998 3.79989C1.19981 2.47441 2.27432 1.3999 3.5998 1.3999H14.4001C15.7256 1.3999 16.8001 2.47442 16.8001 3.7999V11.5999M16.8001 20.5999L14.4001 18.1999M14.4001 18.1999L12.0001 15.7999M14.4001 18.1999L12.0001 20.5999M14.4001 18.1999L16.8001 15.7999M5.40008 6.1999H12.6001M5.40008 9.7999H12.6001M5.40008 13.3999H9.00008"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default IconDeleteAll;
