import { useState } from 'react';

export const AddCategory = () => {

const [ inputValue, setinputValue ] = useState('Pan');

const InputChange = ({ target }) => {
    // console.log(target.value);
    setinputValue(target.value);
}

const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( inputValue );
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

