import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userData } from "./Data"
import UserCard from "./UserCard";
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function App() {
  console.log(userData);
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  //getting users with fetch
  //useEffect(() => {
  //function fetchData() {
   // fetch ("https://jsonplaceholder.typicode.com/users")
    //.then(res => res.json())
    //.then(res => {
  //setData(res)
  //console.log(res);

   // })
  //  .catch(error => setError(error))
 // }
  //fetchData()
// }, [])


//posting with fetch
//const [user, setUser] = useState();
//const handleSubmit = (e) => {
 // e.preventDefault();
  //fetch ("https://jsonplaceholder.typicode.com/users", {
// method: "POST",
// headers: {
// Accept:"application/json",
//"Content-Type":"application/json"  
// },
// body: JSON.stringify(user)
//})
// .then(res => res.json())
//.then(res => console.log(res))
//.catch(err => console.log(err));
//};



//getting users with axios
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
setData(res.data)
console.log(res.data);
  })
.catch(error => setError(error))
}, [])


//posting with axios
const [user, setUser] = useState();
const handleSubmit = (e) => {
  e.preventDefault();
  axios
  .post("https://jsonplaceholder.typicode.com/users", user)
  
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};



const handleChange = e =>
  setUser({ [e.target.name]:e.target.value });
  
  return (
    <div className="App">
      <h1>Checkpoint API</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>

          <label>
            Person Username:
            <input type="text" name="username" onChange={handleChange} />
          </label>




          <Button type="submit">Add</Button>
        </form>
      </div>
      <div className='usercard'>
      {data.map(user => {
return <UserCard key={user.id} user={user}/>



      })}
    </div>
    </div>
  );
}

export default App;