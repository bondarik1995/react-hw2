import React from 'react';

const countOfVisiblePages = 5;

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
		
    this.state = {
      pages: (props.pages !== undefined ? props.pages : 0),
			activePage: (props.activePage !== undefined ? props.activePage : 0)
		}

		this.makeActive = this.makeActive.bind(this);
	}

	makeActive(e) {
		e.preventDefault();
		
		this.setState({activePage: e.target.textContent});
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
				{(activePage > middlePosition ? <a href="#">&laquo;</a> : '')}
				{pagination.map((page, index) => {
					return (
						<a 
							key={index}
							href='#'
							className={String(page) === String(activePage) ? 'active' : ''}
							onClick={this.makeActive}
						>{page}</a>
					);
				})}
				{(activePage < ((pages - 1) - middlePosition) ? <a href="#">&raquo;</a> : '')}
			</div>
    );
  }
}
