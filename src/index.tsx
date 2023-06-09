import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/style.css';
import '../src/css/iconStyle.css';
import '../src/css/iconStyleFontAwesome.css';
import '../src/css/iconStylePeIcon7Stroke.css';
import '../src/css/icon.css';
import '../src/css/styleFredokaOneRegular.css';
import '../src/css/ionicons.min.css';
import '../src/css/styleRubik.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import 'swiper/css/bundle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
