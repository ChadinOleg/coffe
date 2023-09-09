import React from "react"
import CoffeeBeansLogo from "../../components/CoffeBenasLogo/CoffeBeansLogo"
import CoffeeList from "../../components/CoffeeList/CoffeeList"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"

import "./Pleasure.scss"
const Pleasure = () => {
	return (
		<>
			<header className=" pleasure__header">
				<Nav />
				<div className="container">
					<h1 className="our-coffee__header_h1">Our Coffee</h1>
				</div>
			</header>
			<main className="our-coffee__main">
				<section className="about-beans">
					<div className=" about-beans__container">
						<img
							src="/img/PleasureImg/coffee.png"
							alt="about-beans__img"
							className="about-beans__img pleasure__img"
						/>
						<div className="about-beans__info pleasure__info">
							<h2 className="about-beans__name">About our beans</h2>
							<CoffeeBeansLogo color="black" />
							<p className="about-beans__description">
								Extremity sweetness difficult behaviour he of. On disposal of as
								landlord horrible.
							</p>
							<p className="about-beans__description">
								Afraid at highly months do things on at. Situation recommend
								objection do intention so questions.
							</p>
							<p className="about-beans__description">
								As greatly removed calling pleased improve an. Last ask him cold
								feel
							</p>
							<p className="about-beans__description">
								met spot shy want. Children me laughing we prospect answered
								followed. At it went is song that held help face.
							</p>
						</div>
					</div>
				</section>
				<section className="coffee-filters">
					<div className="container">
						<CoffeeList />
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Pleasure
