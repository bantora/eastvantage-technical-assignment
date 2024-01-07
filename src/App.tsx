import './App.css';

import type { ReactElement } from 'react';

import { useRandomUser } from './hooks/random-user/RandomUser';

const App = (): ReactElement => {
  const { user, error, fetchUser, loading } = useRandomUser();

  const { name: { first, last, title }, email, picture: { large } } = user.results[0];

  if (loading) return <h1>Loading...</h1>
  
  return (
    <>
      <div className="container">
        {!error ? <>
          <img className='image' src={large} />
          <h2>{`${title}. ${first} ${last}`}</h2>
          <h3>{email}</h3>
        </> :
          <h1>{error}</h1>
        }

        <button onClick={fetchUser}>Refresh</button>
      </div>
    </>
  )
};

export default App
