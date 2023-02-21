import { useState } from 'react';
export const AddCategory = ( {onNewCategory} ) => {

const [ inputValue, setinputValue ] = useState('Pan');

const InputChange = ({ target }) => {
    // console.log(target.value);
    setinputValue(target.value);
}

const onSubmit = ( event ) => {
    event.preventDefault();

    if( inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim() );
    // setcategories( categories => [ inputValue, ...categories ]);
    setinputValue('');
}
    return (

        <form onSubmit={ onSubmit }>

        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={  InputChange }
        />
        </form>
    );
}

