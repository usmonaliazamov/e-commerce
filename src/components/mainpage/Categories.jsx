import React from 'react'

const Categories = () => {
  const data = [
    {
      cateImg: "./img/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./img/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./img/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./img/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./img/category/cat5.png",
      cateName: "Gits",
    },
    {
      cateImg: "./img/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./img/category/cat7.png",
      cateName: "Health & Beaoty",
    },
    {
      cateImg: "./img/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./img/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./img/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./img/category/cat11.png",
      cateName: "Books",
    },
  ];
  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return(
            <div className='box f_flex' key={index}>
              <img src={value.cateImg}/>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
