import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Navbar from './Navbar';
import Pagination from './Pagination';
import Countries from './Countries';
import Languages from './Languages';
import NavApp from './NavApp';
import * as serviceWorker from './serviceWorker';

// Валидация номера
// ReactDOM.render(<App />, document.getElementById('root'));

// Меню
// ReactDOM.render(<Navbar 
// 		items={['Home', 'Search', 'Contact', 'About', 'Login']}
// 		activeItem='Home' 
// />, document.getElementById('root'));

// Пагинация
// ReactDOM.render(<div>
// 	<Pagination pages={100} activePage={1} />
// 	<br />
// 	<Pagination pages={100} activePage={22} />
// 	<br />
// 	<Pagination pages={100} activePage={99} />
// </div>, document.getElementById('root'));

// Таблица стран
// ReactDOM.render(<Countries />, document.getElementById('root'));

// Таблица языков
// ReactDOM.render(<Languages />, document.getElementById('root'));

// Переключение таблиц
ReactDOM.render(<NavApp />, document.getElementById('root'));

serviceWorker.unregister();
