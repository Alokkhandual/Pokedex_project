
import axios from "axios";
import { useEffect,useState } from "react";


function usePokemonDetails(id,pokemonName){
    
    const [pokemon,setPokemon]=useState({});
    
    
    async function downloadPokemon(){
        try {
            let responce;
        if(pokemonName){
            console.log('fetchng by name');
            responce=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        }else{
            responce=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }
         
           
          
          const pokemonOfSameTypes= axios.get(`https://pokeapi.co/api/v2/type/${responce.data.types ?responce.data.types[0].type.name:''}`);
          
          setPokemon((state)=>({
            ...state,
            name:responce.data.name,
            image:responce.data.sprites.other.dream_world.front_default,
            weight:responce.data.weight,
            height:responce.data.height,
            types:responce.data.types.map((t)=>t.type.name),
            
        }));
        pokemonOfSameTypes.then((responce)=>{
            setPokemon((state)=>({
                ...state,                      
               similarPokemons:responce.data.pokemon
            }));
        })
        console.log(responce.data.types);
       setPokemonListState({...PokemonListState,type:responce.data.types ?responce.data.types[0].type.name:''})
        
        } catch (error) {
            console.log('Something went wrong');
        }
        
          
    }; 
    const [PokemonListState,setPokemonListState]= useState({});


    useEffect(()=>{       
            downloadPokemon();                     
        console.log( 'List',pokemon.types,PokemonListState);
    },[]); 
    return [pokemon];
}
export default usePokemonDetails;