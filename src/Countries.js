import React from 'react';

export default class Countries extends React.Component {
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
    .then(countries => this.setState({ isLoading: false, countries }))
    .catch(this.onError);
  }

  render() {
    const { countries } = this.state;

    if (this.state.isError) {
      return "Unexpected error. Please, contact support.";
    }

    return this.state.isLoading ? (
      "....Loading...."
      ) : (
      <div>
        <table>
					<colgroup>
						<col width='50%' />
						<col width='25%' />
						<col width='25%' />
					</colgroup>
					<tbody>
						<tr>
							<th>Country</th>
							<th>Currencies</th>
							<th>Languages</th>
						</tr>
						{countries.map((country, index) => (
							<tr key={index}>
								<td>{country.name}</td>
								<td>
									<ul>
										{country.currencies.map((currency, index) => (
											<li key={index}>{currency.name} ({currency.code})</li>
										))}
									</ul>
								</td>
								<td>
									<ul>
										{country.languages.map((language, index) => (
											<li key={index}>{language.name} ({language.iso639_2})</li>
										))}
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
