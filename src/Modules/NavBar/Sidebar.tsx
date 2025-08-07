import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GestionUser from '../AdminDashboard/components/GestionUser';

export const CircularButton = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.contrastText,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
}));

const routes = [
  {
    path: '/user-dashboard',
    title: "UserDashboard",
    icon: <GroupIcon />,
  },
  {
    path: '/mon-equipe',
    title: "MonEquipe",
    icon: <GroupIcon />,
  },
  {
    path: '/admin-dashboard',
    title: "AdminDashboard",
    icon: <GroupIcon />,
  },
  {
    path: '/admin-dashboard',
    title: "Gestion utilisateur",
    icon: <GroupIcon />,
  },
  {
    path: '/login',
    title: "Se Deconnecté",
    icon: <GroupIcon />,
  },
];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false); 
  const theme = useTheme();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen:boolean) => () => {
    setOpen(newOpen);
  };

  const handlePopupOpen = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {routes.map((route) => (
          <ListItem key={route.title} disablePadding>
            <ListItemButton
              onClick={() => {
                if (route.title === "Gestion utilisateur") {
                  handlePopupOpen(); 
                } else {
                  navigate(route.path);
                }
              }}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <CircularButton onClick={toggleDrawer(true)}><MenuIcon color='primary' /></CircularButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <GestionUser open={popupOpen} handleClose={handlePopupClose} /> 
    </div>
  );
}