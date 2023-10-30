import './App.css';
import Header from './Header.js'
import Footer from './Footer'
import {useEffect, createRef} from "react"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { resetScrollTo } from './scrollToSlice';

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
	var currScrollPos = window.scrollY;
	var nb = document.getElementById("navbar");
	if (prevScrollPos > currScrollPos) {
		nb.classList.add("notNavTop");
    	nb.style.top = "0";
	} else {
    	nb.style.top = "-200px";
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
	const darkMode = useSelector((state) => state.darkMode.value)
	const scrollTo = useSelector((state) => state.scrollTo.value)
	const dispatch = useDispatch()
	if(darkMode){
		document.body.classList.add('dark-mode')
	}else{
		document.body.classList.remove('dark-mode')
	}

	const sections = ['Welcome'];
	const sectionIds = [...Array(sections.length).keys()];
	const refs = sectionIds.reduce((acc, value) => {
		acc[value] = createRef();
		return acc;
	}, {});
	let refsMap = {}
	sections.forEach((name, index) => {
		refsMap[name] = refs[index]
	})

	const scrollToTarget = (ref) => {
		ref.current?.scrollIntoView({
			behavior: "smooth",
		})
	}

	useEffect(() => {
		if(scrollTo !== "") {
			scrollToTarget(refsMap[scrollTo])
			dispatch(resetScrollTo())
		}
	})

	useEffect(() => {
		window.history.scrollRestoration = 'manual'
	}, [])

	return (
		<div className="app">
			<Header refs={refs}/>
			<Outlet context={{refs}}/>
			<Footer />
		</div>
	);
}

export default App;
