import {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './img/nplogo.png';
import './styles.scss';

import Heading from './components/Head';
import CharacterTable from './components/CharacterTable';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';

// Hash made easy to insert  into URL
const hash = "ce66b81c1ee295746bdbfff8879cc67c"

function App() {
  const [marvels, setMarvels] = useState([])
  const[isLoading, setLoading] = useState(true)
  const[query, setQuery] = useState('')
  
  // if query is equal to search then fire the the fetch
  // else is used in case first paraemeter returns null thus the second parameter allows user to type first two letters and be matched to the characters that starts with said letters
  useEffect(() => {
    const fetch = async() => {
      if(query ==='') {
        const resp = await axios
        (`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3dfaa3c97fb22d55230ea5fda9505d58&hash=${hash}`);
        // console.log(resp.data.data.results);
        setMarvels(resp.data.data.results);
        setLoading(false)
      } else{
        const resp = await axios
        (`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=3dfaa3c97fb22d55230ea5fda9505d58&hash=${hash}`);
        // console.log(resp.data.data.results);
        setMarvels(resp.data.data.results);
        setLoading(false)
      }
    }

    fetch()
    // Dependancy [] will run everytime the state changes
  }, [query])


  return (
    <div className="App">
      <Heading />
        <div className="name-logo"><img src={logo} id="name-img" alt="personal np logo"></img></div>

      {/* Displays data from array onto page */}
      <CharacterTable marvels={marvels} isLoading={isLoading} />
      <Filter search={(s) => setQuery(s)}></Filter>
      </div>
  );
  }

export default App;
