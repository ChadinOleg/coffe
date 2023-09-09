import React from "react"

import Nav from "../Nav/Nav"
import "./CoffeeHeader.scss"
const CoffeeHeader = () => {
	return (
		<header className=" our-coffee__header">
			<Nav />
			<div className="container">
				<h1 className="our-coffee__header_h1">Our Coffee</h1>
			</div>
		</header>
	)
}

export default CoffeeHeader
