// import { useEffect, useState } from "react";
// import axios from 'axios'
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
import { useEffect } from 'react';
 function PokemonList(){
    // const [PokemonList,setPokemonList]=useState([]);
    // const [isLoading,setIsLoading]=useState(true);
    // const [pokemonurl,setPokemonUrl]=useState('https://pokeapi.co/api/v2/pokemon');
    // const [nextUrl,setNextUrl]=useState('');
    // const [PreviousUrl,setPreviousUrl]=useState('');

    // const[PokemonListState,setPokemonListState]=useState({
    //      PokemonList:[],
    //      isLoading:true,
    //      pokemonurl:'https://pokeapi.co/api/v2/pokemon',
    //      nextUrl:'',
    //      PreviousUrl:''
    // });

    // async function downloadPolemons(){
    //     // setIsLoading(true);
    //     setPokemonListState({...PokemonListState,isLoading:true});
            

    //     const responce=await axios.get(PokemonListState.pokemonurl); //pokemonurl
    //     console.log(responce.data);

    //     // setNextUrl(responce.data.next);
    //     setPokemonListState((state)=>({
    //         ...state,
    //         nextUrl:responce.data.next,
    //         PreviousUrl:responce.data.previous
    //     }));

    //     // setPreviousUrl(responce.data.previous);
        
    //     const pokemonResults=responce.data.results;
    //     console.log(pokemonResults);

    //     const pokemonResultPromice= pokemonResults.map((pokemon)=>axios.get(pokemon.url));
    //     const pokemonData=await axios.all(pokemonResultPromice);
    //     console.log(pokemonData);

    //     const res=pokemonData.map((pokeData)=>{
    //         const pokemon=pokeData.data
    //         return{
    //             name:pokemon.name,
    //             image:pokemon.sprites.other.dream_world.front_default,
    //             type:pokemon.types,
    //             id:pokemon.id
    //         }
    //     });
    //     console.log(res);
    //     // setPokemonList(res);
    //     setPokemonListState((state)=>({
    //         ...state,
    //         PokemonList:res,
    //         isLoading:false
    //     }));

    //     // setIsLoading(false)
        
    // }

    // useEffect(()=>{
    //   downloadPolemons();
    // },[PokemonListState.pokemonurl]) //pokemonurl

    const [PokemonListState ,setPokemonListState] =usePokemonList(false);
    useEffect(()=>{
     console.log('render');
    },[])

    return(
    <div className="Pokemon-list-wrapper">
       <div> PokemonList</div>

       <div className="pokemon-wrapper">
        {(PokemonListState.isLoading)?'isLoading...':
         PokemonListState.PokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
        }
        </div>
           <div className="controls">
            <button disabled={PokemonListState.PreviousUrl==null} onClick={()=>setPokemonListState({...PokemonListState,pokemonurl:PokemonListState.PreviousUrl})}>Previous</button>
            <button disabled={PokemonListState.nextUrl==null} onClick={()=>setPokemonListState({...PokemonListState,pokemonurl:PokemonListState.nextUrl })}>Next</button>
           </div>
     </div> 
     
    );
 };
 export default PokemonList;