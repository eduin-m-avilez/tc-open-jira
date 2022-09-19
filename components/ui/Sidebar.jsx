import {  Drawer, 
          Box, 
          Typography, 
          List, 
          ListItem, 
          ListItemIcon,
          ListItemText } from '@mui/material'

import AdbIcon from '@mui/icons-material/Adb';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const menuItems = ['Send', 'About', 'Contact', 'Product', 'Services'];

export const Sidebar = () => {
  return (
    <Drawer
    anchor='left'
    open={true}
    onClose={ console.log("Cerrando")}
    >
      <Box sx={{ width: 300 }}>
        <Box sx={{ padding: '5px 10px' }}>
              <Typography variant='h4'>Menú</Typography>
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
      </Box>
        
    </Drawer>
  )
}
