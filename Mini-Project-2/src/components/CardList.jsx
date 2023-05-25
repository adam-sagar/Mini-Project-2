import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Grid, TextField } from "@mui/material";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function CardList() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCharacters, setCurrentCharacters] = useState([]);
    const [maxPage, setMaxPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const charactersPerPage = 8;

    useEffect(() => {

        axios
            .get(
                "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
            )
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {

        const filteredCharacters = data.filter((character) =>
            character.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );

        setMaxPage(Math.ceil(filteredCharacters.length / charactersPerPage));
        setCurrentCharacters(
            filteredCharacters.slice(0, charactersPerPage)
        );

        setCurrentPage(1);
    }, [data, searchQuery]);

    const handleNextPage = () => {

        if (currentPage < maxPage) {
            const nextPage = currentPage + 1;
            const offset = charactersPerPage * (nextPage - 1);
            setCurrentPage(nextPage);
            setCurrentCharacters(
                data.slice(offset, offset + charactersPerPage)
            );
        }
    };

    const handlePrevPage = () => {

        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            const offset = charactersPerPage * (prevPage - 1);
            setCurrentPage(prevPage);
            setCurrentCharacters(
                data.slice(offset, offset + charactersPerPage)
            );
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const cardContainerStyle = {
        // prevents character cards from overlapping when there is less than a full page of results
        display: "flex",
        flexWrap: "wrap",
        justifyContent: currentCharacters.length < charactersPerPage ? "space-around" : "flex-start",
    };


    return (
        <div>
            <Container>
                <TextField
                    label="Search character..."
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearch}
                    fullWidth
                    sx={{ width: "200px", marginBottom: "30px" }}
                />
                <Grid container spacing={8} style={cardContainerStyle}>
                    {currentCharacters.map((character) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                            <CharacterCard
                                name={character.name}
                                img={character.images.sm}
                                publisher={character.biography.publisher}
                                id={character.id}
                            />
                        </Grid>
                    ))}
                </Grid>
                {currentCharacters.length === charactersPerPage && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
                        }}
                    >
                        <Button
                            variant="outline-dark"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </Button>
                        <Button
                            variant="outline-dark"
                            onClick={handleNextPage}
                            disabled={currentPage === maxPage}
                        >
                            Next
                        </Button>
                    </div>
                )}
            </Container>
        </div>
    );

}

export default CardList;
