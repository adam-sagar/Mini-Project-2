import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment'; 
import SearchIcon from '@mui/icons-material/Search';

function NavBar({ searchQuery, handleSearch }) {
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Characters', path: '/characters' }
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: 'midnightblue' }}>
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
                    <TextField
                        placeholder="Search characters"
                        variant="standard"
                        value={searchQuery}
                        onChange={handleSearch}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon style={{ color: 'white' }} />
                                </InputAdornment>
                            ),
                            sx: {
                                input: { color: 'white', borderBottom: '1px solid white' },
                                label: { color: 'white' },
                                color: '#fff',
                                marginLeft: '20px',
                                width: '200px'
                            }
                        }}
                    />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}

export default NavBar;
