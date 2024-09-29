import { HeroCard } from "./"
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ])
    
  return (
    <div className="row rows-cals-1 row-cols-md-3 g-3">
        {
            heroes.map( (hero) => {
                return(
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
                )
            })   
        }
    </div>
  )
}
