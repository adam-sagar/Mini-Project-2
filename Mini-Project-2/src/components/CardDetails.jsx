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
import { Link } from 'react-router-dom'

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
        
        <Card sx={{ width: 400, marginTop: '100px' }}>
            <CardMedia
                sx={{ height: 400 }}
                image={data.images?.md}
                title="data.name"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='cardContent'>
                    <div><b>Race:</b> {data.appearance?.race}</div>
                    <div><b>Birthplace:</b> {data.biography?.placeOfBirth}</div>
                    <div><b>Occupation:</b> {data.work?.occupation}</div>
                    <div><b>Alignment:</b> {data.biography?.alignment}</div>
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