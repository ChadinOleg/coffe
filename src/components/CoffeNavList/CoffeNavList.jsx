import React from "react"

import { Link } from "react-router-dom"

import "./CoffeNavList.scss"

const CoffeeNavList = ({ footer }) => {
	const navStyles = footer ? "footer__item" : "header__item "
	const footerMenu = footer ? "footer__menu" : "header__menu"
	return (
		<ul className={footerMenu}>
			<li className={navStyles}>
				<Link className="nav__link" to="/">
					Coffee house
				</Link>
			</li>
			<li className={navStyles}>
				<Link className="nav__link" to="/our-coffee">
					Our Coffee
				</Link>
			</li>
			<li className={navStyles}>
				<Link className="nav__link" to="/pleasure">
					For Your Pleasure
				</Link>
			</li>
		</ul>
	)
}

export default CoffeeNavList
