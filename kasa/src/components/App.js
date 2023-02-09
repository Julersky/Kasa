import Header from './Header/Header'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'
import Banner from './Banner/Banner'

// import Cart from './Cart'
// import ShoppingList from './ShoppingList'
import Home from './Home'
// import Housing from './Housing'
import About from './About/About'
import {Routes, Route} from 'react-router-dom'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={
				<div>
					<Home>
						<Header />
						<Banner />
						<Gallery />
						<Footer />
					</Home>
				</div>}/>
				<Route />
				{/* <Route path='/logement/:id' element={
				<div>
					<Housing />
						<Header />


				</div>
					
				}/> */}
				<Route path='/a-propos' element={
				<div>
					<About />


				</div>
				}/>
				{/* <Route path='/*' element={<Error />}/> */}
			</Routes>
		</div>
	)
}

export default App
