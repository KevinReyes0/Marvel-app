
import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from './GridCharacters';
import { Pagination } from "@mui/material"


export const MarvelApp = () => {

    const {characters} = useCharacters()
    //const totalPersonajes = personaje.length

    return (
        <>

            <GridCharacters characters={characters}/>
            
        </>
        
    )
}

