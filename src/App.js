import React, { useState } from 'react';
import RenderImageCards from './components/RenderImageCards';
import Input from './components/Input';
import queryAPI from './utilities/queryAPI';
import Loader from './components/Loader';
import Error from './components/Error';
import NoResults from './components/NoResults';
import SelectedTitles from './components/SelectedTitles';
import './App.scss';

const App = () => {
  const starterText = 'Nothing Here Yet - Try Searching For An Image!';
  const nothingFoundText = 'Nothing Here Yet - Try Another Query.';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [noResultsText, setNoResultsText] = useState(starterText);
  const [selectedTitles, setSelectedTitles] = useState([]);

  const handleSubmitQuery = (input) => {
    setResults([]);
    if (input !== '') {
      setLoading(true);
      setError(false);
      return queryAPI(input, handleSuccess, handleError);
    } else {
      setError('Please provide a search query first');
    }
  };

  const handleError = (err) => {
    setError(err);
    setLoading(false);
  };

  const handleSuccess = (result) => {
    setLoading(false);
    setResults(result);
    setNoResultsText(nothingFoundText);
  };

  const handleSelect = (selected) => {
    if (selectedTitles.includes(selected) === false) {
      setSelectedTitles([...selectedTitles, selected]);
    } else {
      let tempList = selectedTitles;

      tempList = tempList.filter((array) => {
        return array !== selected;
      });
      setSelectedTitles(tempList);
    }
  };

  const clearApp = () => {
    setError(false);
    setResults([]);
  };

  return (
    <div className="App">
      <h1 className="app-title">The Nature Collective</h1>
      <Input onSubmit={handleSubmitQuery} clearApp={clearApp} />
      {results.length > 0 && (
        <SelectedTitles selectedTitles={selectedTitles} results={results} />
      )}
      {error && <Error error={error} />}
      {loading && <Loader />}
      <section className="image-results">
        {results.length > 0 && (
          <RenderImageCards array={results} handleSelect={handleSelect} />
        )}
        {results.length === 0 && !loading && <NoResults text={noResultsText} />}
      </section>
    </div>
  );
};

export default App;
