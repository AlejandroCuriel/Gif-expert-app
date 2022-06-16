import { useState } from "react"
import { AddCategory, GifGrid } from "./components";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const GifExpertApp = () => {

  const [category, setCategory] = useState([ 'One Punch']);

  const onAddCategory = (newCategory) => {
    if(category.includes(newCategory)){
      Swal.fire({
        title: 'Error!',
        text: `La categoria ${newCategory} ya se encuentra registradas`,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return
    }
    setCategory([newCategory, ...category]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory} />
        {category.map( category => (
          <GifGrid
            key = {category}
            category={category} />
        ))}
    </>
  )
}
