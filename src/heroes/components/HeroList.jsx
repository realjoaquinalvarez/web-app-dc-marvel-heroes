import { HeroCard } from "./"
import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)
    
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
