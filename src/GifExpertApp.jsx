
import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifExpertApp = () => {

  
  const [categories, setcategories] = useState([]);

  const onAddCategory = () => {
    setcategories([ ...categories, 'Hello' ]);
  }


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        <AddCategory setcategories = { setcategories }/>

        {/* Listado de Glif */}


        <ol>
            {/* recorre el hook categories */}                
            { categories.map( category => {
            
                return <li key={ category }>{ category }</li>
                }) 
            }
            
        </ol>
                    
            {/* Gif Item */}
    </>
  )
}
