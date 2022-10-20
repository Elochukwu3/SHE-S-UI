import React, {useState} from "react";

export default function () {
  const [toggle, setToggle] = useState(false);
  const toggleIcon =()=>setToggle(!toggle)
 
  return (
   
      <header>
        <p className="headerName" data-end ='tudio'>
            SHE'S
        </p>
        <ul className={toggle?'menuList active' :" menuList"}>
            <li>Men</li>
            <li>Women</li>
            <li className="menuHover">Accessories <span>New</span></li>
            <li>Sales</li>
            <li>Winber</li>
        </ul>

        <ul className="carts">
            <li><img src="/search.png" alt="" className="search"/></li>
            <li>Cart</li>
            <li><img src="/shopping-cart.png" alt="" className="cart"/></li>
        </ul>
        <div className="mobile" onClick={toggleIcon}>
          <i className={toggle ? 'fas fa-times' : 'fas fa-bars'}></i>
          {/* <i className="fas fa-times"></i> */}
        </div>
      
      </header>
 
  );
}
