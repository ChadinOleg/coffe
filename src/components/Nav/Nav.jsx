import React from "react"

import CoffeBeans from "../coffeBeans/CoffeBeans"

import CoffeeNavList from "../CoffeNavList/CoffeNavList"

import "./Nav.scss"
const Nav = () => {
	return (
		<nav className="nav">
			<CoffeBeans color="white" />
			<CoffeeNavList />
		</nav>
	)
}

export default Nav
