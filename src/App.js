
import './App.css';
import Content from './Content';
import ContentData from './ContentData';
import React,{useState,useEffect} from 'react';




function App() {

  const [name,setName] =useState('and workiing manually');

  useEffect(()=>{
    setTimeout(function(){ alert('it coming here'+name)}, 3000);
  },[name]);
const arrayList =
  [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
  return (
    <div className="App">
      <header className="App-header">
        Thid is new upfdate
        This is my third commit
        <select>
          {
          arrayList.map((currentList,index)=>{
            return   (<>
            <optgroup label={currentList.category}>
            <option value={index} >{currentList.name}</option>
            </optgroup>
            </>)

          })
          }
          
        </select>
       This is my first update in react js {name}
       {
        ContentData.filter((currentValue)=>{
              return currentValue.id >12;
        }).map((currentElement)=>{
          return <Content key ={currentElement.id} titleContent={currentElement.title} setVContent={currentElement.setValue} nameContent={currentElement.name} contentDescription={currentElement.content}  setName={setName}/>
      
       })} 
      
   
      </header>
    </div>
  );
}

export default App;
