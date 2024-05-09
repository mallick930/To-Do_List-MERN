import React, { useEffect, useState } from "react";
import Create from './Create'
import axios from 'axios'
import './App.css'

function Home (){

    const[todos, setTodos] = useState([])
 
    useEffect( () => {
         axios.get('http://localhost3001/get')
         .then(result => setTodos(result.data))
         .catch(err => console.log(err))
    },[])

return(
    <div className="home">
        <h2 >Welcome to Consistency Tracker</h2>

        <Create/>

    

        {
            todos.length === 0
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo =>(
                <div>
                    {todo.task}
                </div>
            )

            )
        }



     

    </div>
)
}

export default Home

