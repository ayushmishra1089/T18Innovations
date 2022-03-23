import React from "react";

import "./Header.css";

const Header = (props) => {
  return (
    <header class="header">

      <h1 class="logo">Your Logo</h1>

      <h1>Sign in to</h1>

      <h2>Lorem Ipsum is simply</h2>

      <img src="https://imockups.com/storage/product/4701/AsEC4XyTjXgBlXtBppBx.png"
           alt="saly"
           class="saly"
          
      />
      

     

      <p class="lorem">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
    </header>
  );
};

export default Header;
