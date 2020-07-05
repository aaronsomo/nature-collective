import React, { Component } from 'react';
import RenderImageCards from './components/RenderImageCards';
import Input from './components/Input';
import queryAPI from './utilities/queryAPI';
import Loader from './components/Loader';
import Error from './components/Error';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      results: [],
      noResultsText: 'No results, try again!',
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

  clearApp = () => {
    this.setState({ error: false, results: [] });
  };

  render() {
    let { results, loading, error } = this.state;
    return (
      <div className="App">
        <h1 className="app-title">Nature Collective</h1>
        <Input onSubmit={this.handleSubmitQuery} clearApp={this.clearApp} />
        {error && <Error error={error} />}
        {loading && <Loader />}
        <section className="image-results">
          {results.length > 0 && <RenderImageCards array={results} />}
        </section>
      </div>
    );
  }
}

export default App;
