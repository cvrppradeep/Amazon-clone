import React from 'react'
import logo from "../../images/logo/amazon.png";
import {Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
// import Sidebar from "../Sidebar/sidebar";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "../Header/Header-style.css";

function Header() {
    return (
    <nav className="header"> 
    {/* < Sidebar /> */}
        <Link to="/">
<img className="header_logo" src={logo} alt=""
/>
</Link>
<div className="header_search">
<input type="text" className="search" />
<SearchIcon className="searchicon"/>
</div>

<div className="header_nav">
<Link to="/login" className="link">
    <div className="option">
<span className="option-one">Hello chiku</span>
<span className="option-two">Sign in</span>
</div>
</Link>


<Link to="/" className="link">
    <div className="option">
<span className="option-one">Returns</span>
<span className="option-two">& orders</span>
</div>
</Link>


<Link to="/" className="link">
    <div className="option">
<span className="option-one">Your</span>
<span className="option-two">Prime</span>
</div>
</Link>

<Link to="/checkout" className="link">
<div className="option-basket">
    <ShoppingBasketIcon/>
<span className="option-two count">0</span>
</div>


</Link>

</div>
</nav>
    )
}

export default Header
