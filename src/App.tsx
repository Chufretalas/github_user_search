import React, { useState, useRef } from 'react';
import ResultsWrapper from './components/ResultsWrapper/ResultsWrapper';
import SearchForm from './components/SearchForm/SearchForm';
import fetchUserData from './http/fetchUserData';
import IUserDataJson from './types/IUserDataJson';

function App() {

  const [userData, setUserData] = useState<IUserDataJson | undefined>()

  

  async function handleSubmit(event: React.FormEvent, userNameRef: React.RefObject<HTMLInputElement>) {
    event.preventDefault()
    if (userNameRef.current) {
      setUserData(await fetchUserData(userNameRef.current.value))
      setTimeout(() => {
        if(userNameRef.current) userNameRef.current.value = ""
      }, 10);
    }
  }

  return (
    <>
      <SearchForm handleSubmit={handleSubmit}/>
      {userData && <ResultsWrapper userData={userData}/>}
    </>
  );
}

export default App;
