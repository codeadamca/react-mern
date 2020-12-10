import React,{useState,useEffect} from 'react';
import './App.css';

import Members from './components/Members'

function App() {

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('members.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <Members members={data}></Members>
    </div>
  );
}

export default App;
