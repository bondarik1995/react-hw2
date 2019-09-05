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

		const getUniqueLanguages = countries => {
			const set = new Set();
			countries.forEach(country => country.languages.forEach(language => set.add(language.name)));
			const languages = [...set];
			languages.sort((a, b) => a > b ? 1 : -1);
			return languages;
		};

		const languages = getUniqueLanguages(countries);

		const getCountriesByLanguage = (countries, languageName) => {
			return (
				countries.filter(country => {
					return (
						country.languages.find(language => language.name === languageName) != null
					);
				})
			);
		}

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
									{language}
									<br />
									<ul>
										{getCountriesByLanguage(countries, language).map((country, index) => <li key={index}>{country.name}</li>)}
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
