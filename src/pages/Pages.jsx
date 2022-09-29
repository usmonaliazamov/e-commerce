import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import TopCate from '../components/top/TopCate';
import NewArrivals from '../components/newarrivals/NewArrivals';
import Discount from '../components/discount/Discount';
import Shop from '../components/shop/Shop';
import Annocument from '../components/annocuments/Annu';

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Annocument />
      <Shop shopItems={shopItems} addToCart={addToCart} />
    </>
  );
};

export default Pages
