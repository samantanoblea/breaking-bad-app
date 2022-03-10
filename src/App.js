import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import { ProviderGeneralContext } from './context/GeneralContext';
import { URLBase } from './services/api';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './styles/App.scss';

const App = () => {
  const [ apiData, setApiData ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(()=>{
    getData();
  },[])

  const getData = () => {
    fetch(`${URLBase}/characters`)
    .then( response => {
      setIsLoading(true);
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      }
      return response.json();
    })
    .then(response => { 
      setApiData(response);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => { setError(err.message) })
  }

  const routeData = useRouteMatch("/characterDetail/:detailId");
  const getCharactersRoute = () => {
    const detailId = routeData !== null ? routeData.params.detailId : "";
    const selectedCharacter = apiData.find((eachCharacter) => eachCharacter.char_id === parseInt(detailId));
    return selectedCharacter
  };

  return(
    <ProviderGeneralContext>
      <div>
        <Header />
        <main className="main">
          { isLoading && <p className="main__loading">Loading...</p>}
          { error && <div>{`There is a problem fetching the post data ${error}`}</div>}
            <Switch>
              <Route exact path="/">
                <CharacterList apiData = {apiData}/>
              </Route>
              <Route path="/characterDetail/:detailId">
                <CharacterDetail selectedCharacter = {getCharactersRoute()}/>
              </Route>
            </Switch>
        </main>  
      </div>
    </ProviderGeneralContext>
  )
}

export default App;
