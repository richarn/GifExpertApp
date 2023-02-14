
import { useState } from "react";

export const GifExpertApp = () => {

  
  const [categories, setcategories] = useState(['One punch', 'other thing']);
  console.log(categories);
  return (
    <>

        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

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
