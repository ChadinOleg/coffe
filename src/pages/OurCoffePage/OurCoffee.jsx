import React from "react"

import CoffeeBeansLogo from "../../components/CoffeBenasLogo/CoffeBeansLogo"
import CoffeeHeader from "../../components/CoffeeHeader/CoffeeHeader"
import CoffeeList from "../../components/CoffeeList/CoffeeList"
import Footer from "../../components/Footer/Footer"

import { useDispatch, useSelector } from "react-redux"
import { filterCountry, filterInput } from "../../actiions/actions.js"

import Spinner from "../../components/spinner/Spinner"

import "./OurCoffee.scss"

const OurCoffee = () => {
	const dispatch = useDispatch()

	const coffeeStatus = useSelector(state => state.coffeeStatus)

	if (coffeeStatus === "loading") {
		return <Spinner />
	}

	return (
		<>
			<CoffeeHeader />
			<main className="our-coffee__main">
				<section className="about-beans">
					<div className=" about-beans__container">
						<img
							src="/img/ourCoffeeImg/main.png"
							alt="about-beans__img"
							className="about-beans__img"
						/>
						<div className="about-beans__info">
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
							<div className="about-beans__filter">
								<h4 className="about-beans__filter_name">Or filter</h4>
								<div className="about-beans__buttons">
									<button
										onClick={() => dispatch(filterCountry("all"))}
										className="All"
									>
										All
									</button>
									<button
										onClick={() => dispatch(filterCountry("Brazil"))}
										className="Brazil"
									>
										Brazil
									</button>
									<button
										onClick={() => dispatch(filterCountry("Kenya"))}
										className="Kenya"
									>
										Kenya
									</button>
									<button
										onClick={() => dispatch(filterCountry("Columbia"))}
										className="Columbia"
									>
										Columbia
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="coffee-filters">
					<div className="container">
						<label className="coffee-filters__label">
							Looking for
							<input
								type="text"
								name="country"
								placeholder="start typing here..."
								className="coffee-filters__input"
								onChange={e => {
									dispatch(filterInput(e.target.value))
								}}
							/>
						</label>

						<CoffeeList />
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default OurCoffee
