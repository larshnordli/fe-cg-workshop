import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import * as lodash from 'lodash';

function App() {
  const [memes, setMemes] = React.useState([])
  const [filteredMemes, setFilteredMemes] = React.useState();

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setMemes(data.data.memes))
  }, []);

  const filter = (e) => {
    setFilteredMemes(lodash.filter(memes, (meme) => meme.name.match(new RegExp(e.currentTarget.value, 'ig'))))
  }

  return (
    <>
      <header>
        <h1>FE CG Feb 24: Green Code</h1>
      </header>
      <form>
        <label>
          Filter on name
          <input onChange={filter} type="search" />
        </label>
      </form>
      <main>
        <ul>
          {(filteredMemes || memes).map(meme => (
            <li key={meme.id}>
              <h2>{meme.name}</h2>
              <img src={meme.url} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
