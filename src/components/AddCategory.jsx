import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1 ) return;
    // setCategory(category => [...category,inputValue]);
    onNewCategory(inputValue.trim())
    setInputValue("");
  }

  return (
    <form onSubmit = {onSubmit}>
      <input
        type = "text"
        placeholder = 'Escriba un Gif a buscar'
        value = { inputValue }
        onChange = { onInputChange }
      />
    </form>
  )
}
