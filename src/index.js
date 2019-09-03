import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Navbar from './Navbar';
import Pagination from './Pagination';
import Countries from './Countries';
import Languages from './Languages';
import * as serviceWorker from './serviceWorker';

// Валидация номера
// ReactDOM.render(<App />, document.getElementById('root'));

// Меню
// ReactDOM.render(<Navbar 
// 		items={[{name: 'Home'}, {name: 'Search'}, {name: 'Contact'}, {name: 'About'}, {name: 'Login'}]}
// 		initialActiveItemId='Home' 
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
ReactDOM.render(<Navbar 
    items={[
			{name: 'Страны', loadingContent: <Countries />},
			{name: 'Языки', loadingContent: <Languages />}
		]} initialActiveItemId='Страны' 
/>, document.getElementById('root'));

serviceWorker.unregister();
