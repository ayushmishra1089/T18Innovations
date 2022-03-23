import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <div class="rectangle1">
      <h1 class="as">Login as</h1>
      <p class="john">
        <img
          src="https://render.fineartamerica.com/images/rendered/default/flat/round-beach-towel/images/artworkimages/medium/3/1-peter-falk-actor-john-springfield.jpg?&targetx=-2&targety=-21&imagewidth=788&imageheight=1031&modelwidth=788&modelheight=788&backgroundcolor=CAC7A9&orientation=0"
          alt="john"
          class="peter"
          width="50"
          height="50"
        />
        John peter
      </p>
      <p class="active">Active 1 day ago</p>

      <div class="rectangle2">
        <p class="alina">
          <img
            src="https://st2.depositphotos.com/3584475/7537/i/950/depositphotos_75374257-stock-photo-beautiful-woman-in-round-sunglasses.jpg"
            alt="alina"
            class="shmen"
            width="50"
            height="50"
          />
          Alina shmen
        </p>

        <p class="active1">Active 4 days ago</p>
      </div>
    </div>
  );
};

export default Footer;
