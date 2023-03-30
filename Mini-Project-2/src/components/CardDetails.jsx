import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function CardDetails() {

    const [data, setData] = useState({})
    const [toggleName, setToggleName] = useState(false)

    const characterParams = useParams()
    const characterid = characterParams.characterid

    useEffect(() => {

        axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"+characterid+".json")
            .then((response) => {console.log(response.data); setData(response.data)})
            .catch((error) => console.log(error));
    }, [characterid]);

    const revealIdentity = function() {
        setToggleName(!toggleName)
    }

    return (
        
        <Card sx={{ width: 450 }}>
            <CardMedia
                sx={{ height: 500 }}
                image={data.images?.md}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <b>Race:</b> {data.appearance?.race}
                    <br />
                    <b>Birthplace:</b> {data.biography?.placeOfBirth}
                    <br />
                    <b>Occupation:</b> {data.work?.occupation}
                    <br />
                    <b>Alignment:</b> {data.biography?.alignment}
                    
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={revealIdentity}>Reveal Secret Identity</Button>
                {toggleName ? <div style={{ marginLeft: '10px' }}> {data.biography?.fullName}<br /></div> : null}
            </CardActions>
        </Card>
    )
}

export default CardDetails