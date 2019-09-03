import React from 'react';

export default class Languages extends React.Component {
  state = {
    isLoading: true,
    isError: false,
		countries: []
  };

  onError = error => {
    this.setState({ isError: true });
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(countries => {this.setState({ isLoading: false, countries })})
		.catch(this.onError);
  }

  render() {
		const { countries } = this.state;
		const languages = [];
		
		for (let i = 0; i < countries.length; i++) {
			for (let j = 0; j < countries[i].languages.length; j++) {
				var arr = languages.filter(language => {
					return language.name === countries[i].languages[j].name;
				});
				if (arr.length === 0)
					languages.push(countries[i].languages[j]);
			}
		}
		
		languages.sort((a, b) => a.name > b.name ? 1 : -1);

    if (this.state.isError) {
      return "Unexpected error. Please, contact support.";
    }

    return this.state.isLoading ? (
      "....Loading...."
      ) : (
      <div>
        <table>
					<tbody>
						<tr>
							<th>Languages</th>
						</tr>
						{languages.map((language, index) => (
							<tr key={index}>
								<td>
									{language.name}
									<br />
									<ul>
										{countries.filter(country => {
											var arr2 = country.languages.filter(item => {
												return item.name === language.name;
											});
											return arr2.length !== 0;
										}).map((country, index) => <li key={index}>{country.name}</li>)}
									</ul>
								</td>
							</tr>
						))}
					</tbody>
        </table>
      </div>
    );
  }
}
