import Layout from './pages/Home/Home'
import Home from './pages/Home/Home'
import About from './pages/Home/Home'
import Error from './pages/Home/Home'
import Housing from './pages/Home/Home'


import {Routes, Route} from 'react-router-dom'

function App() {
	return (
		<div>
			<Routes>

				<Route path='/' element={<Layout />}/>
					<Route path='/' element={<Home />}/>
					<Route path='/logements/:id' element={<Housing />}/>
					<Route path='/a-propos' element={<About />}/>
					<Route path='*' element={<Error />}/>


			</Routes>
		</div>
	)
}

export default App