import React from "react"

import CoffeeBeansLogo from "../CoffeBenasLogo/CoffeBeansLogo"

import CoffeBeans from "../coffeBeans/CoffeBeans"
import CoffeeNavList from "../CoffeNavList/CoffeNavList"

import "./Footer.scss"
const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer__container">
				<div className="test">
					<nav className=" footer__nav">
						<CoffeBeans color="black" />
						<CoffeeNavList footer />
					</nav>
					<CoffeeBeansLogo color="black" />
				</div>
			</div>
		</footer>
	)
}

export default Footer
