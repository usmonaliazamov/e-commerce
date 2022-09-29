import React from 'react'
import Dcard from './Dcard';

const Discount = () => {
  return (
    <div>
      <section className="disocunt background newarrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img src="https: //img.icons8/glyph-neue/64/26e07f/new.png" />
              <h2>Big Discounts</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </div>
  );
}

export default Discount
