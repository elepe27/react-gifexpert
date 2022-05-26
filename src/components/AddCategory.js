import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categories=>[inputValue,...categories]);
            setInputValue('');
        }else{
            return;
        }

    }

    return (
        <form  onSubmit={ handleSubmit }>
            <p> { inputValue } </p>
            <input 
                type='text' 
                placeholder='Escribe tu serie aquí...'
                value={ inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

