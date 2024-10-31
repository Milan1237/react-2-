import { useCallback, useState } from 'react'
import './App.css'
import Search from './Components/Search';
const brandName = [
  {id: 1 , brandName: 'Puma'},
  {id: 2 , brandName: 'Adidas'},
  {id: 3 , brandName: 'Nike'},
  {id: 4 , brandName: 'Asian'},
  {id: 5 , brandName: 'Campus'},
  {id: 6 , brandName: 'New Balance'},
]
function App() {
  const [brand , setBrand] = useState(brandName);
  const [search , setSearch] = useState('');

  function sortByName(){
    const sortedArray = [...brand].sort((a , b )=>{
      
        const nameA = a.brandName.toUpperCase(); ; 
        const nameB = b.brandName.toUpperCase() ; 
        return nameA > nameB ? 1 : nameA < nameB ? -1 : 0 ;  
    } )
    setBrand(sortedArray);
  }

  /*
  // what is happening is that in every re-render of the parent component the function is being stored in different location. 
  //that is why this function is becoming different each time the app is re-rendered. and even after we have used 
  //memo in search componet the search component is rendered everytime
  
  function handleChange (value){
      setSearch(value);
      const newBrandArray = brand.length > 0 ?  brandName.filter((b)=> b.brandName.includes(value)) : brand ; 
      setBrand(newBrandArray);
  }
      */

    const handleChange = useCallback(function handleChange (value){
      setSearch(value);
      const newBrandArray = brand.length > 0 ?  brandName.filter((b)=> b.brandName.includes(value)) : brand ; 
      setBrand(newBrandArray);
    }, [search]);

  return (
    <>
    <button onClick={sortByName}>Sort by name</button>
    <Search hanldeSearch={handleChange} search={search}/>
    {brand.map(b=>{
      return <p>{b.brandName}</p>
    })}    
    </>
  )
}

export default App
