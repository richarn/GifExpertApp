
import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

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


        {/* recorre el hook categories */}                
        { categories.map( (category) => ( 
            <GifGrid 
                key={ category }
                category={ category }
            />
            
            )) 
        }
            
                    
    </>
  )
}
