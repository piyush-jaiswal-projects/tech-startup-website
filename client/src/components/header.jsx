import React from 'react';
import '../styles/header.css';

function Header(){

  function responsiveBar(){
    var x = document.getElementById("navBar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function searchBar(){
    var y = document.getElementsByClassName("search-box");
    if (y.style.visibility === 'hidden') {
      y.style.visibility = 'visible';
    } else {
      y.style.visibility = 'hidden';
    }

  }
    
        return (
          <div class="header">
            <img class="site-logo" alt="logo" src="media/icon1.png"></img>
            <h1 class="site-title">swiftConnect</h1>
            <div class="nav-bar" id="navBar">
            <a class="nav-link not div-link" onclick={searchBar} href="">&#128269;</a>
            <a class="nav-link not div-link" href='/signin'>Sign in</a>
            <a class="nav-link not div-link" href='/about'>About</a>
            <a class="nav-link not div-link" href='/services'>Services</a>
            <a class="nav-link not div-link" href='/articles'>Blog</a>
            <a class="nav-link active not div-link" href='/'>Home</a>
            <a href=" " class="nav-link icon" onclick={responsiveBar}>
            <i class="fa fa-bars"></i>
            </a>
            </div>
            <div class="search-box" id="SearchBox">
            <form class="search-form" method='post' action='/search' placeholder='type here to search' autofocus>
            <input class="search-query" type="text" name='searchItem'></input>
            <button class="search-btn">&#128269;</button>
            </form>
            
            </div>
            {/* <div class="nav-div">
            <a class="nav-link active not" href='/'>Home</a>
            <a class="nav-link not" href='/articles'>Blog</a>
            <a class="nav-link not" href='/services'>Services</a>
            <a class="nav-link not" href='/about'>About</a>
            <a class="nav-link not" href='/signin'>Sign in</a>
            <a class="nav-link not" href='/search'>&#128269;</a>
            </div> */}

          </div>
        );
      
}

export default Header;