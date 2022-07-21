import './Pokedex.css'
import Pokecard from './Pokecard'

const Pokedex = ({ pokemons, exp, isWinner }) => {
    let title;
    if(isWinner) {
        title = <h1 className="Pokedex-winner">Winning Hand!</h1>
    } else {
        title = <h1 className="Pokedex-loser">Losing Hand!</h1>
    }
  return (
    <div className="Pokedex">
        {title}
        <h4>Total Experience: {exp}</h4>
        <div className="Pokedex-cards">
            {pokemons.map((pokemon) => 
                <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience} />
            )}
        </div>
    </div>
  )
}

export default Pokedex
