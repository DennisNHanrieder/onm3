import { useState, useRef, useEffect } from 'react'
import './MyLi.css'

function MyLi({ date, firstname, lastname, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false)
  const [myFirstname, setMyFirstname] = useState(firstname)
  const [myLastname, setMyLastname] = useState(lastname)

  const myInput = useRef(null)

  useEffect(() => {
    if (editing && myInput.current) {
      myInput.current.select()
    }
  }, [editing])

  function editHandler() {
    setEditing(true)
  }

  function updateHandler() {
    setEditing(false)
    onUpdate(myFirstname, myLastname)
  }

  return (
    <tr className={editing ? "editing" : ""}>
      <td><em>{date}</em></td>

      {editing ? (
        <>
          <td>
            <input
              className="edit"
              ref={myInput}
              value={myFirstname}
              onChange={(e) => setMyFirstname(e.target.value)}
            />
          </td>
          <td>
            <input
              className="edit"
              value={myLastname}
              onChange={(e) => setMyLastname(e.target.value)}
            />
          </td>
          <td>
            <button onClick={updateHandler}>Save</button>
            &nbsp;
            <button onClick={onDelete}>x</button>
          </td>
        </>
      ) : (
        <>
          <td onDoubleClick={editHandler}>{firstname}</td>
          <td onDoubleClick={editHandler}>{lastname}</td>
          <td>
            <button onClick={onDelete}>x</button>
          </td>
        </>
      )}
    </tr>
  )
}

export default MyLi
