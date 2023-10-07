import './App.css';
import Header from './Header.js'
import Footer from './Footer'
import {useState, useEffect, createRef} from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from 'react-redux';

window.onload = function(){
	document.body.classList.add("loaded");
}

var prevScrollPos = window.scrollY;

window.addEventListener('scroll', throttle(navbarVis, 100));

window.setInterval(navbarTop, 100);

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function navbarVis(){
	var currScrollPos = window.pageYOffset;
	var nb = document.getElementById("navbar");
	if (prevScrollPos > currScrollPos) {
		nb.classList.add("notNavTop");
    	nb.style.top = "0";
	} else {
    	nb.style.top = "-120px";
	}
	prevScrollPos = currScrollPos;
}

function navbarTop(){
	var currScrollPos = window.scrollY;
	var nb = document.getElementById("navbar");
	if(currScrollPos === 0){
		nb.classList.remove("notNavTop");
	}else{
		nb.classList.add("notNavTop");
	}
	prevScrollPos = currScrollPos;
}

const App = () => {

	useEffect(() => {
		window.history.scrollRestoration = 'manual'
	}, []);

	const sections = ['Welcome', 'About', 'Projects'];
	const sectionIds = [...Array(sections.length).keys()];

	const darkMode = useSelector((state) => state.darkMode.value)

	if(darkMode){
		document.body.classList.add('dark-mode')
	}else{
		document.body.classList.remove('dark-mode')
	}

	const refs = sectionIds.reduce((acc, value) => {
		acc[value] = createRef();
		return acc;
	}, {});

	return (
		<div className="app">
			<Header refs={refs}/>
			<Outlet context={[refs]}/>
			<Footer />
		</div>
	);
}

export default App;
