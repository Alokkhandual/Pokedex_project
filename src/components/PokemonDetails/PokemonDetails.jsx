

import { useParams } from "react-router-dom";
import './PokemonDetails.css'
import usePokemonDetails from "../../hooks/usePokemonDetails";
function PokemonDetails({pokemonName}){
    const {id}=useParams();
    const [pokemon]=usePokemonDetails(id,pokemonName);
    // const [pokemon,setPokemon]=useState({});
    
    // let PokemonListHookResopnce=[];
    // async function downloadPokemon(){
        
    //       const responce=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    //       console.log(responce);
    //       setPokemon({
    //         name:responce.data.name,
    //         image:responce.data.sprites.other.dream_world.front_default,
    //         weight:responce.data.weight,
    //         height:responce.data.height,
    //         types:responce.data.types.map((t)=>t.type.name)

    //     });
    //    return responce;
        
          
    // }; 
   
    // PokemonListHookResopnce=usePokemonList(`https://pokeapi.co/api/v2/type/${pokemon.types ?pokemon.types[0]:'fire'  }`,true);

    // useEffect(()=>{
    //     downloadPokemon();
    //     console.log( 'List',pokemon.types);
    // },[]); 
    
      return(
        
         <div className="pokemon-details-wrapper">
            <img className="pokemon-details-image" src={pokemon.image} />
            <div className="pokemon-details-name"><span>{pokemon.name}</span></div>
            <div className="pokemon-details-name">weight:{pokemon.weight}</div>
            <div className="pokemon-details-name">height:{pokemon.height}</div>
            <div className="pokemon-details-types">
                 <div>
                 types:{pokemon.types}
                 </div>
            </div>
              {
                pokemon.types && pokemon.similarPokemons &&
                <div> 
                    more {pokemon.types[0]} type pokemons 

                    <ul>
                    {pokemon.similarPokemons.map((p)=><li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                    </ul>
                </div> 
              }
           
         </div>
      );
}
export default PokemonDetails;





     
  
