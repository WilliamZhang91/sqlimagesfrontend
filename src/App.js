import { useState, useEffect } from "react";
import axios from 'axios'

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/user')
        .then(response => {
            console.log(response.data)
            setUsers(response.data)
            
        })
    })

    return (
        <div>
            <img src={users[0].profile_pic} />
        </div>
    )
}

export default App