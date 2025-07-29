import React from 'react'
import { AppBar,Toolbar,Typography ,Box} from '@mui/material'
import styled from '@emotion/styled'
import Notifications from './components/Notifications'
import TemporaryDrawer from './Sidebar'

const StyledToolBar=styled(Toolbar)(()=>({
    maxWidth:"1280px",
    margin:"0 auto",
    width:"100%",
}))

const Navbar = () => {
  return (
    
    <AppBar position='static'>
        
        <StyledToolBar >
           
            <Typography variant="h6" component='div' sx={{flexGrow:1}}>Gestionnaire de Conge
            </Typography>
            <Box sx={{display:'flex',
              alignItems:'center ', gap:'16px'}}>

                <Notifications/>
                <TemporaryDrawer/>
            </Box>
        </StyledToolBar>
    
    </AppBar>
   
  )
}

export default Navbar