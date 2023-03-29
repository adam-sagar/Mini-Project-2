import React, { useEffect, useState } from "react"
import axios from "axios"
import SuperheroCard from "./CharacterCard"
import { Grid } from '@mui/material';
import Container from 'react-bootstrap/Container';

function CardList() {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <Container>
                <Grid container spacing={8}>
                    {data.map((character) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                            <SuperheroCard name={character.name} img={character.images.sm} publisher={character.biography.publisher} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default CardList
