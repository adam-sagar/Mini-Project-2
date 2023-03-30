import React from 'react'
import Button from '@mui/material/Button';

export default function CharacterPages(props) {
    let pages = [];
    //sets 5 pages
    for (let i = 0; i < 5; i++) {
        pages.push(<Button id="buttonWhite" variant="outlined" key={i} onClick={() => props.pageHandler(i + 1)} >{i + 1}</Button>)
    } return pages
}