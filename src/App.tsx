import React, { useState, useRef } from 'react';
import IUserDataJson from './types/IUserDataJson';

function App() {

  const [userData, setUserData] = useState<any>()

  const userInputRef = useRef<HTMLInputElement>(null)

  async function fetchUserData(userName: string) {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      const data: IUserDataJson = await response.json()
      if (response.ok) {
        const reposResponse = await fetch(data.repos_url)
        data.repos_list = await reposResponse.json()
        if (reposResponse.ok) {
          console.log(response.status)
          console.log(data.repos_list)
          setUserData(data.repos_list.toString())
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const userName = userInputRef.current?.value
    console.log(userName)
    if (userName) {
      fetchUserData(userName)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={userInputRef} />
        <button formAction="submit">Pega</button>
      </form>
      <p>{userData}</p>
    </>
  );
}

export default App;
