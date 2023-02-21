
import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifExpertApp = () => {

  
  const [ categories, setcategories ] = useState(['Hola', 'Hola2']);

  const onAddCategory = ( newCategory ) => {
    // console.log(newCategory);
    setcategories([ newCategory, ...categories ]);
  }


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        <AddCategory 
          // setcategories = { setcategories }
          // on NewCategory es una funcion
          onNewCategory = { (valuedelNewCategorie) => onAddCategory(valuedelNewCategorie) }
        />

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
