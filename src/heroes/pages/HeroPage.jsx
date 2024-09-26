import { useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const HeroPage = () => {

  const { id, ...rest }= useParams()
  console.log( id, rest)
  
  const hero = getHeroById( id )

  console.log(hero)

  return (
    <>
        <h1>HeroPage</h1>
    </>
  )
}
