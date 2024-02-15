import { useEffect, useState } from "react";
import axios from "axios";

function usePokemonList(){
    const[PokemonListState,setPokemonListState]=useState({
        PokemonList:[],
        isLoading:true,
        pokemonurl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        PreviousUrl:'',
       
   });

   async function downloadPolemons(){
         
  
        setPokemonListState((state)=>({...state,isLoading:true}));
           
   
       const responce=await axios.get(PokemonListState.pokemonurl); //pokemonurl
       console.log(responce.data);
   
       const pokemonResults=responce.data.results;
       console.log(pokemonResults);
   
       console.log('responce is ',responce.data.pokemon);
   
       setPokemonListState((state)=>({
           ...state,
           nextUrl:responce.data.next,             // setNextUrl(responce.data.next);
           PreviousUrl:responce.data.previous     // setPreviousUrl(responce.data.previous);
       }));
    

    const pokemonResultPromice= pokemonResults.map((pokemon)=>axios.get(pokemon.url));
    const pokemonData=await axios.all(pokemonResultPromice);
    console.log(pokemonData);

    const res=pokemonData.map((pokeData)=>{
        const pokemon=pokeData.data
        return{
            name:pokemon.name,
            image:pokemon.sprites.other.dream_world.front_default,
            type:pokemon.types,
            id:pokemon.id
        }
    });
    console.log(res);
    // setPokemonList(res);
    setPokemonListState((state)=>({
        ...state,
        PokemonList:res,
        isLoading:false
    }));

    
   
}
   
     useEffect(()=>{
        downloadPolemons();
     },[PokemonListState.pokemonurl]);
    
     return [PokemonListState ,setPokemonListState];
    }  
export default usePokemonList;