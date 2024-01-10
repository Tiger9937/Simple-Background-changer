import {useState} from "react";
import Card from "./card";
function Und() {
  const [count , setCount] = useState(0)
  const [prevCount , setprevCount] = useState(0)
  

  const add_value = () => {
    if(count < 23){
      setprevCount(count)
      setCount(count +1)
    }else{
      setCount("img is not available ")
    }if(count == "img is not available "){
      setCount(0)
    }
  };
  const remove_value = () => {
    if(count !== "img is not available " && count > 0){
      setCount(count - 1)
    }else{
      setCount(prevCount)
    }if(count == 0 || count == "img is not available "){
      setCount(23)
    }
  };
    return (
    <>
    <h1 className="bg-red-400">Count value :{count}</h1>
    <Card name="hello"/>
    <Card name="react"/>
    
    <button 
      onClick={add_value}
    >add</button>
    <button
      onClick={remove_value}
    >remove</button>
    </>
  );
}

export default Und;
