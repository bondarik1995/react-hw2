import React from 'react';

const countOfVisiblePages = 5;

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
		
    this.state = {
      pages: (props.pages !== undefined ? props.pages : 0),
			activePage: (props.activePage !== undefined ? props.activePage : 0)
		}
	}

	makeActive = e => {
		e.preventDefault();
		
		this.setState({activePage: parseInt(e.target.textContent, 10)});
	}

	nextPage = e => {
		e.preventDefault();
		
		this.setState({activePage: this.state.activePage + 1});
	}

	prevPage = e => {
		e.preventDefault();
		
		this.setState({activePage: this.state.activePage - 1});
	}

  render() {
		const {pages, activePage} = this.state;
		const middlePosition = Math.round(countOfVisiblePages/2);
		let startItem = activePage - middlePosition;
		if (activePage < middlePosition) {
			startItem = 0;
		} else if (activePage > pages - middlePosition) {
			startItem = pages - countOfVisiblePages;
		}
		const pagination = Array.from({length: pages}, (v, k) => k + 1).slice(startItem, startItem + countOfVisiblePages);
		
    return (
			<div className="pagination clearfix">
				{(activePage > middlePosition ? <a href="#" onClick={this.prevPage}>&laquo;</a> : '')}
				{pagination.map((page, index) => {
					return (
						<a 
							key={index}
							href='#'
							className={page === activePage ? 'active' : ''}
							onClick={this.makeActive}
						>{page}</a>
					);
				})}
				{(activePage <= (pages - middlePosition) ? <a href="#" onClick={this.nextPage}>&raquo;</a> : '')}
			</div>
    );
  }
}
