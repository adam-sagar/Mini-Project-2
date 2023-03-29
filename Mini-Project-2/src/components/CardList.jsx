import React, { useEffect, useState } from "react"
import axios from "axios"
import SuperheroCard from "./SuperheroCard"

function CardList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
            )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <ul>
                {data.map((hero) => (
                    <li key={hero.id} className="CardList">
                        <SuperheroCard name={hero.name} img={hero.images.sm} publisher={hero.biography.publisher} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CardList
