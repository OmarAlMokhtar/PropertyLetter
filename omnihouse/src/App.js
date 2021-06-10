import './App.css';
import { Grid } from '@material-ui/core';

 

const App = () => {

  return (
    <Grid container >
      <Grid container item xs={4} className="Filter">
        <h1>Filter</h1>
        <Grid item xs={12}><input className='search'></input></Grid>
        <Grid item xs={6}><h3>#dropdown</h3></Grid>
        <Grid item xs={6}><h3>#dropdown</h3></Grid>
      </Grid>
      <Grid container item className="HeaderButtons" alignItems="flex-end">
        <h3>login</h3>
        <h3>sign up</h3>
      </Grid>
      <Grid container item direction="column" xs={12} className="SearchResults">
        <h1>OmniHouse</h1>
        <h1>OmniHouse</h1>
        <h1>OmniHouse</h1>
      </Grid>
      
    </Grid>
    

  );
}

export default App;
