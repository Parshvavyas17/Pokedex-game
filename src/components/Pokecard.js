import './Pokecard.css'

const Pokecard = ({ id, name, type, exp }) => {
  const padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)
  const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}.png`
  return (
    <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-image">
          <img src={POKE_API} alt={`${name} Pic`} />
        </div>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">Exp: {exp}</div>
    </div>
  )
}

export default Pokecard
