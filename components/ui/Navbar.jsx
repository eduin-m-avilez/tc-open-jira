import { useContext } from 'react';
import { AppBar, IconButton, Toolbar } from "@mui/material"

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Typography from "@mui/material/Typography";

import { UIContext } from '../../context/ui';


export const Navbar = () => {

    const { openSideMenu } = useContext( UIContext );

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton
                size='large'
                edge='start'
                onClick={ openSideMenu }
                >
                    <MenuOutlinedIcon/>
                </IconButton>
                
                <Typography variant="h6" color="inherit" component="div">
                    OpenJira
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
