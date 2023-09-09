import React, { Suspense } from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Beans from "../../pages/BeansPage/Beans"
import BeansHeader from "../../pages/BeansPage/BeansHeader"

import { useDispatch } from "react-redux"
import useHttp from "../../hooks/http.hook"

import { fetchCoffee, fetchedBest, fetchedCoffee } from "../../actiions/actions"

import "../../styles/index.scss"

const ErrorPage = React.lazy(() => import("../../pages/ErrorPage/ErrorPage"))
const OurCoffee = React.lazy(() => import("../../pages/OurCoffePage/OurCoffee"))
const Home = React.lazy(() => import("../../pages/HomePage/Home"))

const Pleasure = React.lazy(() =>
	import("../../pages/ForYouPleasurePage/Pleasure")
)
const App = () => {
	const dispatch = useDispatch()
	const request = useHttp()

	React.useEffect(() => {
		dispatch(fetchCoffee())
		request("http://localhost:3001/bestCoffee")
			.then(data => dispatch(fetchedBest(data)))

			.catch(e => alert(e))
		// eslint-disable-next-line
	}, [])

	React.useEffect(() => {
		dispatch(fetchCoffee())
		request("http://localhost:3001/coffeeItems").then(data =>
			dispatch(fetchedCoffee(data))
		)
		// eslint-disable-next-line
	}, [])
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={ErrorPage}>
							<Home />
						</Suspense>
					}
				></Route>
				<Route
					path="/our-coffee"
					element={
						<Suspense fallback={<ErrorPage />}>
							<OurCoffee />
						</Suspense>
					}
				></Route>
				<Route
					path="/pleasure"
					element={
						<Suspense fallback={<ErrorPage />}>
							<Pleasure />
						</Suspense>
					}
				></Route>
				<Route path="*" element={<ErrorPage />}></Route>
				<Route path="/our-coffee/:id" element={<Beans />}></Route>
				<Route path="/best-coffee/:id" element={<BeansHeader />}></Route>
			</Routes>
		</Router>
	)
}

export default App
