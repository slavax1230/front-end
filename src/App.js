import React, {useEffect,useState} from "react";
import axios from 'axios';

const App = () => {

  const [info,setInfo] = useState(''); // בשביל סטרינג
  // const [info,setInfo] = useState([]); בשביל מערך

  useEffect(()=> {
    LoadData()
  },[])

  const LoadData = () => {
    axios.get('http://localhost:3001/api/users')
    .then(res => {
      setInfo(res.data.data);
    })
    .catch(err => console.log(err.message))
  }

  return (
    <div>
        <ul>
          {
            // info.map(info => <li>{info.dugma}</li>)
            <li>{info}</li>
          }
        </ul>
    </div>
  )
}

export default App;