import React from "react";

import Navbar from './Navbar';
import Countries from './Countries';
import Languages from './Languages';

export default class NavApp extends React.Component {
  state = {
    activeItem: "Countries"
  };

  render() {
    return (
      <>
        <Navbar 
            items={['Countries', 'Languages']}
            activeItem={this.state.activeItem}
            onItemChanged={activeItem =>
              this.setState({
                activeItem
              })
            }
        />

        {this.state.activeItem === "Countries" ? (
          <Countries />
        ) : (
          <Languages />
        )}
      </>
    );
  }
}
