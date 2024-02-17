import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import NotFound from '../containers/NotFound';

const App = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/checkout" element={<Checkout />} />
				<Route exact path="/checkout/informacion" element={<Information/>} />
				<Route exact path="/checkout/payment" element={<Payment/>} />
				<Route element={<NotFound/>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;