import React from "react"
import CoffeeBeans from "../../components/CoffeBenasLogo/CoffeBeansLogo"
import CoffeeHeader from "../../components/CoffeeHeader/CoffeeHeader"
import Footer from "../../components/Footer/Footer"

import { useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import "./Beans.scss"
const BeansHeader = () => {
	const { id } = useParams()

	const best = useSelector(state => state.best)

	const element = best.find(item => item.id === Number(id))

	if (!element) {
		return <Navigate to="/" />
	}
	const { description, price, src } = element
	return (
		<>
			<CoffeeHeader />
			<main className="main">
				<section className="coffee-description">
					<div className="container">
						<div className="coffee-description__info">
							<img
								src={src}
								alt="coffee-description__img"
								className="coffee-description__img"
							/>
							<div className="coffee-description__sorts">
								<h2 className="coffee-description__name">About it</h2>
								<CoffeeBeans color={"black"} />

								<p className="coffee-description__text">
									<span className="coffee-description__text_span">
										Description:
									</span>
									{description}
								</p>
								<p className="coffee-description__price">
									<span className="coffee-description__price_span">Price:</span>
									{price}
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default BeansHeader
