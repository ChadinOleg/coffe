import React from "react"

import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"

import HomeCoffeeList from "../../components/homeCoffeeList/HomeCoffeeList"

import CoffeeBeansLogo from "../../components/CoffeBenasLogo/CoffeBeansLogo"

import "./Home.scss"
const Home = () => {
	return (
		<>
			<header className="header">
				<Nav />
				<section className="about-coffee">
					<div className="container about-coffee__container">
						<h1 className="about-coffee__name">
							Everything You Love About Coffee
						</h1>
						<CoffeeBeansLogo color="white" />
						<p className="about-coffee__description">
							We makes every day full of energy and taste Want to try our beans?
						</p>
						<a href="google.com" className="about-coffee__link">
							More
						</a>
					</div>
				</section>
			</header>
			<main className="main">
				<section className="about-us">
					<div className="container about-us__container">
						<h2 className="about-us__name">About Us</h2>
						<CoffeeBeansLogo color="black" />
						<p className="about-us__description">
							Extremity sweetness difficult behaviour he of. On disposal of as
							landlord horrible. Afraid at highly months do things on at.
							Situation recommend objection do intention so questions. As
							greatly removed calling pleased improve an. Last ask him cold feel
							met spot shy want. Children me laughing we prospect answered
							followed. At it went is song that held help face.
						</p>

						<p className="about-us__description">
							Now residence dashwoods she excellent you. Shade being under his
							bed her, Much read on as draw. Blessing for ignorant exercise any
							yourself unpacked. Pleasant horrible but confined day end
							marriage. Eagerness furniture set preserved far recommend. Did
							even but nor are most gave hope. Secure active living depend son
							repair day ladies now.
						</p>
					</div>
				</section>
				<section className="our-best">
					<div className="container">
						<h2 className="our-best__name">Our best</h2>
						<HomeCoffeeList />
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Home
