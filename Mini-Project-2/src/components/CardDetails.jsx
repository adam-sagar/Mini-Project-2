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

    const alignmentColor = {
        color: data.biography?.alignment === 'bad' ? 'red' : 'green'
    };

    return (
        
        <Card id='CardDetails' sx={{width: 400, marginTop: '100px'}}>
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
                    <div style={alignmentColor}><b>Alignment:</b> {data.biography?.alignment}</div>
                </Typography>
            </CardContent>
            <CardActions>
                {data.biography?.fullName && data.biography?.fullName !== data.name && ( // only shows the reveal secret identity button if it is given and different to their superhero name
                    <Button size="small" onClick={revealIdentity}>
                        {toggleName ? "Hide Secret Identity" : "Reveal Secret Identity"}
                    </Button>
                )}
                {toggleName ? <div style={{ marginLeft: '10px' }}> {data.biography?.fullName}<br /></div> : null}
            </CardActions>
        </Card>
    )
}

export default CardDetails