import React, {useState} from 'react';
import '../styles/header.css';
import $ from 'jquery';

function Header(){

  const [style, setStyle] = useState("hide");
  const [searchStyle, setSearchStyle] = useState("hide");

  function responsiveBarOpen(){
    setStyle("display");
  }

  function responsiveBarClose(){
    setStyle("hide");
  }

  function openSearch(){
    if(searchStyle === "hide"){
      setSearchStyle("display");
    }
    if(searchStyle === "display"){
      setSearchStyle("hide");
    }
    if(style === "display"){
      setStyle("hide");
    }
  }

  function closeSearch(){
    if(searchStyle === "hide"){
      setSearchStyle("hide");
    }
    if(searchStyle === "display"){
      setSearchStyle("hide");
    }
  }
    
        return (
          <div class="header" id="header">

            <div className={style} id="navDiv">
            <button className='close-btn' onClick={responsiveBarClose}>X</button>
            <a className='nav-div-link' href='/'><button className='nav-div-btn'>Home</button></a>
            <a className='nav-div-link' href='/'><button className='nav-div-btn'>Blog</button></a>
            <a className='nav-div-link' href='/'><button className='nav-div-btn'>Services</button></a>
            <a className='nav-div-link' href='/'><button className='nav-div-btn'>About</button></a>
            <a className='nav-div-link' href='/'><button className='nav-div-btn'>Sign in</button></a>
            <a className='nav-div-link' href='#' onClick={openSearch}><button className='nav-div-btn'>&#128269;</button></a>
            </div>


            <img class="site-logo" alt="logo" src="media/icon1.png"></img>
            <h1 class="site-title">swiftConnect</h1>
            <div class="nav-bar" id="navBar">
            <a class="nav-link not div-link" href='#' onClick={openSearch}>&#128269;</a>
            <a class="nav-link not div-link" href='/signin'>Sign in</a>
            <a class="nav-link not div-link" href='/about'>About</a>
            <a class="nav-link not div-link" href='/services'>Services</a>
            <a class="nav-link not div-link" href='/articles'>Blog</a>
            <a class="nav-link active not div-link" href='/'>Home</a>
            <a href="#" class="nav-link icon" onClick={responsiveBarOpen}>
            <i class="fa fa-bars"></i>
            </a>
            </div>


            <div className={searchStyle} id="SearchBox">
            <form className="search-form" method='post' action='/search' autofocus>
            <input className="search-query" type="text" name='searchItem' placeholder='type here to search' ></input>
            <button className="search-btn">&#128269;</button>
            <a className="search-btn" onClick={closeSearch}>X</a>
            </form>
            </div>

          </div>

          
        );
      
}
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('#header').addClass('header-bar-scroll');
  } else {
     $('#header').removeClass('header-bar-scroll');
  }
});

export default Header;