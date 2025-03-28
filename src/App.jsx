import { useState } from 'react'
import './App.css'
import MyLi from './components/MyLi'

function App() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [entryData, setEntryData] = useState([])

  function saveHandler() {
    const entry = {
      date: new Date().toLocaleString(),
      firstname: firstname,
      lastname: lastname
    }

    setEntryData([...entryData, entry])
    setFirstname("")
    setLastname("")
  }

  function deleteHandler(index) {
    const nextEntryData = entryData.slice()
    nextEntryData.splice(index, 1)
    setEntryData(nextEntryData)
  }

  function updateHandler(index, newFirstname, newLastname) {
    const nextEntryData = entryData.slice()
    nextEntryData[index].firstname = newFirstname
    nextEntryData[index].lastname = newLastname
    setEntryData(nextEntryData)
  }

  const listItems = entryData.map((entry, index) => (
    <MyLi
      key={index}
      date={entry.date}
      firstname={entry.firstname}
      lastname={entry.lastname}
      onDelete={() => deleteHandler(index)}
      onUpdate={(newFirstname, newLastname) => updateHandler(index, newFirstname, newLastname)}
    />
  ))

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>

      <textarea
        placeholder="Firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <br />
      <button onClick={saveHandler}>Save</button>
    </div>
  )
}

export default App
