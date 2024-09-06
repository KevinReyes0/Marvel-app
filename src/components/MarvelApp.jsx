
import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from './GridCharacters';
import { Pagination } from "@mui/material"


export const MarvelApp = () => {
    
    const [pagina, setPagina] = useState()
    const {characters} = useCharacters(pagina)
    
    //const totalPersonajes = personaje.length

    return (
        <>

            <GridCharacters characters={characters}/>
            <Pagination count={10} color="primary" className="d-flex justify-content-center mt-5"  onChange={(e,value)=>{setPagina(value)}} />
            
        </>
        
    )
}

