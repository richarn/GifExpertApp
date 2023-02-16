
import { useState } from "react";

export const GifExpertApp = () => {

  
  const [categories, setcategories] = useState(['One punch', 'other thing']);

  const onAddCategory = () => {
    
    setcategories([ ...categories, 'Hello' ]);

    // console.log('Hello');
  }


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        {/* Listado de Glif */}

        <button onClick={ onAddCategory }>Agregar</button>
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
