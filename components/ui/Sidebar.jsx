import { useContext} from 'react';
import {  Drawer,
          Divider,
          Box, 
          Typography, 
          List, 
          ListItem, 
          ListItemIcon,
          ListItemText } from '@mui/material'

import AdbIcon from '@mui/icons-material/Adb';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { UIContext } from '../../context/ui';

const menuItems = ['Send', 'About', 'Contact', 'Product', 'Services'];

export const Sidebar = () => {

  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer
    anchor='left'
    open={ sidemenuOpen}
    onClose={ closeSideMenu } 
    >
      <Box sx={{ width: 300 }}>
        <Box sx={{ padding: '5px 10px' }}>
              <Typography variant='h4'>Menú</Typography>
              <CloseOutlinedIcon onClick={ closeSideMenu }/>
        </Box>

          <List>
            {
              menuItems.map((text, index) =>(
                <ListItem button key={ text } >
                  <ListItemIcon >
                    { index % 2 ? <AdbIcon/>: <AccessTimeOutlinedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))
            }
          </List>

          <Divider />

          <List>
            {
              menuItems.map((text, index) =>(
                <ListItem button key={ text } >
                  <ListItemIcon >
                    { index % 2 ? <AdbIcon/>: <AccessTimeOutlinedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))
            }
          </List>
      </Box>
        
    </Drawer>
  )
}
