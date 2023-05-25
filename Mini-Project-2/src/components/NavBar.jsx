import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function NavBar() {

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Characters', path: '/characters' }
    ];

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: 'midnightblue' }} >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontFamily: `'Bangers', cursive;`, fontSize: '1.5rem' } }}
                    >
                        Superhero Stats
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{ color: '#fff', fontFamily: 'Bangers', fontWeight: 'bold', fontSize: '1.5rem' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}

export default NavBar
