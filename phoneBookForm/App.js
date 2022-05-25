import { useState } from 'react'
import './App.css'
import InformationTable from './components/InformationTable'
import PhoneBookForm from './components/PhoneBookForm'

function App() {
  // Create a state of users to (default empty):
  // 1- Add the returned values from <PhoneBookForm /> to here!
  // 2- Pass this state to <InformationTable /> to display the user
  const [users, setUsers] = useState([])

  // Function to append the users to the users state
  const addUserItem = (user) => {
    setUsers([...users, user])
  }

  console.log(users)

  return (
    <div className="app">
      <PhoneBookForm addUserItem={addUserItem} />
      <InformationTable users={users} />
    </div>
  )
}

export default App
