import React, { useEffect, useState } from "react"
import axios from "axios"
import CharacterCard from "./CharacterCard"
import { Grid } from '@mui/material'
import Container from 'react-bootstrap/Container'
import CharacterPages from "./CharacterPages"

function CardList() {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentCharacters, setCurrentCharacters] = useState([])

    const charactersPerPage = 12

    useEffect(() => {
        axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
            .then((response) => {
                console.log(response.data); setData(response.data);
                setCurrentCharacters(response.data.splice(0, charactersPerPage))
            })
            .catch((error) => console.log(error));
    }, []);

    const handleGetPage = function(nextPage) {
        const offset = charactersPerPage * (nextPage - 1)
        setCurrentPage(nextPage)
        setCurrentCharacters(data.splice(offset, charactersPerPage))
    }

    return (
        <div>
            <Container>
                <Grid container spacing={8} sx={{ marginTop: '100px' }}>
                    {currentCharacters.map((character) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                            <CharacterCard name={character.name} img={character.images.sm} publisher={character.biography.publisher} id={character.id} />
                        </Grid>
                    ))}
                </Grid>
                <h5>{currentPage}</h5>
                <h5>{data.length}</h5>
                <CharacterPages pageHandler={handleGetPage} />
            </Container>
        </div>
    );
}

export default CardList
