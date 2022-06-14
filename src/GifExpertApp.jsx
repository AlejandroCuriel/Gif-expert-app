import { useState } from "react"

export const GifExpertApp = () => {

  const [category, setCategory] = useState([ 'One Punch', 'Dragon Ball']);
  console.log(category)

  const onAddCategory = () =>{
    console.log("Overlord")
    setCategory(['Overlord', ...category]);
  }
  return (
    <> {/* Fragmento*/}
      {/* Titulo */}
      <h1>!...!</h1>

      {/* Buscador*/}

      {/* Listado de Gif */}
      <button onClick={ onAddCategory }>Add Category</button>
      <ol>
        {category.map( category => {
          return <li key={ category } > { category } </li>
        })}
      </ol>
        {/* Gif Item */}
    </>
  )
}
