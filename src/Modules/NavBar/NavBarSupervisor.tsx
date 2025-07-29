import React from 'react'
import { AppBar,Toolbar,Typography ,Stack,Button} from '@mui/material'
import styled from '@emotion/styled'
import Notifications from './components/Notifications'
const StyledToolBar=styled(Toolbar)(()=>({
    maxWidth:"1280px",
    margin:"0 auto",
    width:"100%",
}))

const NavbarSupervisor = () => {
  return (
    
    <AppBar position='static'>
        
        <StyledToolBar >
           
            <Typography variant="h6" component='div' sx={{flexGrow:1}}>Gestionnaire de Conge
            </Typography>
            <Stack direction='row' spacing={1}>
                <Button color='inherit'>Mon equipe</Button>
                <Notifications/>
                <Button color='inherit'> Déconnexion </Button>
            </Stack>
        </StyledToolBar>
    
    </AppBar>
   
  )
}

export default NavbarSupervisor