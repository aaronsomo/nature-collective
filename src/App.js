import React, { Component } from 'react';
import RenderImageCards from './components/RenderImageCards';
import Input from './components/Input';
import queryAPI from './utilities/queryAPI';
import Loader from './components/Loader';
import Error from './components/Error';
import NoResults from './components/NoResults';
import SelectedTitles from './components/SelectedTitles';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.starterText = 'Nothing Here Yet - Try Searching For An Image!';
    this.nothingFoundText = 'Nothing Found! Try Another Query.';
    this.state = {
      loading: false,
      error: false,
      results: [],
      noResultsText: this.starterText,
      selectedTitles: [],
    };
  }

  handleSubmitQuery = (input) => {
    this.setState({ results: [] });
    if (input !== '') {
      this.setState({ loading: true, error: false });
      return queryAPI(input, this.handleSuccess, this.handleError);
    } else {
      this.setState({ error: 'Please provide a search query first' });
    }
  };

  handleError = (err) => {
    this.setState({ error: err, loading: false });
  };

  handleSuccess = (result) => {
    this.setState({
      loading: false,
      results: result,
      noResultsText: this.nothingFoundText,
    });
  };

  handleSelect = (selected) => {
    console.log(selected);
    if (this.state.selectedTitles.includes(selected) === false) {
      this.setState({
        selectedTitles: [...this.state.selectedTitles, selected],
      });
    } else {
      let tempList = this.state.selectedTitles;

      tempList = tempList.filter(function(array) {
        return array !== selected;
      });
      this.setState({
        selectedTitles: tempList,
      });
    }
  };

  clearApp = () => {
    this.setState({ error: false, results: [] });
  };

  render() {
    let { results, loading, error, noResultsText, selectedTitles } = this.state;
    return (
      <div className="App">
        <h1 className="app-title">Nature Collective</h1>
        <Input onSubmit={this.handleSubmitQuery} clearApp={this.clearApp} />
        {selectedTitles.length > 0 ? (
          <SelectedTitles selectedTitles={selectedTitles} />
        ) : null}
        {error && <Error error={error} />}
        {loading && <Loader />}
        <section className="image-results">
          {results.length > 0 && (
            <RenderImageCards
              array={results}
              handleSelect={this.handleSelect}
            />
          )}
          {results.length === 0 && !loading && (
            <NoResults text={noResultsText} />
          )}
        </section>
      </div>
    );
  }
}

export default App;
