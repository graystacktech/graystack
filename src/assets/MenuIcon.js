import * as React from "react";

function MenuIcon(props) {
  return (
    <svg
      width={30}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 1h30M0 10h30M0 19h30" stroke="#21243D" strokeWidth={1.6} />
    </svg>
  );
}

export default MenuIcon;
