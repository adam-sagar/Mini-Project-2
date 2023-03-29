import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

function CardDetails() {

    const [data, setData] = useState([]);

    const characterParams = useParams()
    const characterid = characterParams.id

    useEffect(() => {

        axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json" +characterid)
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, [characterid]);

    return (
        <div>
            {data.name}
        </div>
    )
}

export default CardDetails