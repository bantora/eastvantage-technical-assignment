import './App.css';

import type { User } from './api/random-user/types';
import type { ReactElement } from 'react';

import { useEffect, useState } from 'react';

import { getRandomUser } from './api/random-user/RandomUser';
import { UserValues } from './util/InitialValues';

const App = (): ReactElement => {
  const [user, setUser] = useState<User>(UserValues);

  const handleNewUser = (): void => {
    getRandomUser()
      .then((data) => {
        setUser(data);
        localStorage.setItem('userData', JSON.stringify(data));
      })
      .catch((err) => console.error('failed to fetch user:', err))
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      handleNewUser();
    }
  }, [])

  const { name: { first, last, title }, email, picture: { large } } = user.results[0];
  return (
    <>
      <div className="container">
        <img className='image' src={large} />
        <h2>{`${title}. ${first} ${last}`}</h2>
        <h3>{email}</h3>
        <button onClick={handleNewUser}>Refresh</button>
      </div>
    </>
  )
};

export default App
