import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'

function CharacterCard(props) {

    return (
        
        <Card id='CharacterCard' sx={{ width: 275, boxShadow: '0px 2px 10px 2px rgba(0, 0, 0, 0.25)' }}>
            <Link to ={'/characters/' + props.id}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={props.img}
                        alt={props.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A character from {props.publisher}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}

export default CharacterCard
