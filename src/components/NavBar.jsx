import React from "react";

export default function () {
  return (
   
      <header>
        <p className="headerName" data-end ='tudio'>
            SHE'S
        </p>
        <ul className="menuList menu">
            <li>Men</li>
            <li>Women</li>
            <li className="menuHover">Accessories <span>New</span></li>
            <li>Sales</li>
            <li>Winber</li>
        </ul>
        <ul className="menuList carts">
            <li><img src="/search.png" alt="" className="search"/></li>
            <li>Cart</li>
            <li><img src="/shopping-cart.png" alt="" className="cart"/></li>
        </ul>
      </header>
 
  );
}
