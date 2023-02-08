import Header from './Header/Header'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'

// import Cart from './Cart'
// import ShoppingList from './ShoppingList'
import Home from './Home'
import {Routes, Route} from 'react-router-dom'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={
				<div>
					<Home>
						<Header />
						<Gallery />
						<Footer />
					</Home>
				</div>}/>
				{/* <Route path='/logement/:id' element={<Housing />}/>
				<Route path='/a-propos' element={<About />}/>
				<Route path='/*' element={<Error />}/> */}
			</Routes>
		</div>
	)
}

export default App
