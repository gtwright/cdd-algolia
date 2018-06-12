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
      <Hits hitComponent={Composer} />
    </div>
  );
}

const Composer = ({ hit })=> {
  console.log(hit);
  return <div style={{ marginTop: '10px' }}>
      <span className="hit-post-name">
        <a href={hit.website} target="_blank"><Highlight attribute="post_title" hit={hit} /></a>
      </span><br/>

      <p>
        {hit.locations && <span>
          {hit.locations.forEach((e)=>e.short_name)}
        </span>}
      </p>
    </div>;
}

class App extends Component {

  render() {
    return (
        <InstantSearch
          appId="K6RHV95P7Q"
          apiKey="529cedad27ce595fb0d2b0e181f32861"
          indexName="wp_posts_composer"
        >
          <CurrentRefinements />
          <ClearRefinements />
          <Stats />
          <SearchBox translations={{placeholder:"Search for a composer"}}/><PoweredBy />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={3}>
              <h3>Genres</h3>
              <RefinementList attribute="taxonomies.genre" />
              <h3>Gender</h3>
              <RefinementList attribute="taxonomies.gender" />
              <h3>Country</h3>
              <RefinementList attribute="locations.country" />
              <h3>Demographics</h3>
              <RefinementList attribute="taxonomies.demographic" />
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
