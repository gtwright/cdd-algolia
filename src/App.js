import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  Pagination,
  CurrentRefinements,
  ClearRefinements,
  Stats,
  PoweredBy
} from 'react-instantsearch/dom';

import Grid from '@material-ui/core/Grid';

const Search = () => {
  return (
    <div className="container">
      <Hits hitComponent={Product} />
    </div>
  );
}

const Product = ({ hit })=> {
  return <div style={{ marginTop: '10px' }}>
      <span className="hit-name">
        <a href={hit.URL} target="_blank"><Highlight attribute="name" hit={hit} /></a>
      </span><br/>

      <p>{hit.location}</p>
    </div>;
}

class App extends Component {

  render() {
    return (
        <InstantSearch
          appId="MDHJPGSBTR"
          apiKey="4738ce6fcd24376337bb0f0268f2b0f4"
          indexName="CDD"
        >
          <CurrentRefinements />
          <ClearRefinements />
          <Stats />
          <SearchBox translations={{placeholder:"Search for a composer"}}/><PoweredBy />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={3}>
              <h3>Genres</h3>
              <RefinementList attribute="genres" />
              <h3>Gender</h3>
              <RefinementList attribute="gender" />
              <h3>Country</h3>
              <RefinementList attribute="country" />
              <h3>Demographics</h3>
              <RefinementList attribute="demographics" />
            </Grid>
            <Grid item xs={12} sm={9}>
              <h3>Results</h3>
              <Search />
              <Pagination />
            </Grid>
          </Grid>

        </InstantSearch>

    );
  }
}

export default App;
