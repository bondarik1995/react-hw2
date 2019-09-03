import React from 'react';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
		
    this.state = {
      items: (props.items !== undefined ? props.items : []),
			initialActiveItemId: (props.initialActiveItemId !== undefined ? props.initialActiveItemId : ''),
			activeItemId: ''
		}
		
		this.makeActive = this.makeActive.bind(this);
	}

	makeActive(e) {
		e.preventDefault();
		
		this.setState({activeItemId: e.target.textContent});
	}

  render() {
    const {items, initialActiveItemId, activeItemId} = this.state;
		const activeItem = activeItemId !== '' ? activeItemId : initialActiveItemId;

    return (
			<div>
				<div className='navbar'>
					{items.map((item, index) => {
						return (
							<a 
								key={index}
								href='#'
								className={item.name === activeItem ? 'active' : ''}
								onClick={this.makeActive}
							>{item.name}</a>
						);
					})}
				</div>
				{items.filter((item, index) => (item.name === activeItem)).map(item => item.loadingContent)}
			</div>
    );
  }
}
