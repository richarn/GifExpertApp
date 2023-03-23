
import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifExpertApp = () => {

  const [ categories, setcategories ] = useState(['Hola', 'Hola2']);

  const onAddCategory = ( newCategory ) => {

    if (categories.includes(newCategory)) return;
    setcategories([ newCategory, ...categories ]);
  }


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        <AddCategory 
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
