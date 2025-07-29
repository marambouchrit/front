import React from "react";
import {  IconButton, Stack, styled, type Theme } from "@mui/material";
import Tooltip, {
  tooltipClasses,
  type TooltipProps,
} from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationCard from "./NotificationCard";
import { CircularButton } from "../Sidebar";


const notifications: Notification[] = [
  {
    type: "ACCEPTED",
    message:
      "Votre Demande de congé  de maladie du 15/07:25 au 20/07/25 a été accepté.",
    date: "25 juil.",
  },
  {
    type: "REJECTED",
    message:
      "Votre Demande de congé du 15/07:25 au 20/07/25 a été refusée. (Cliquez pour savoir plus)",
    date: "19 juil.",
  },
  { type: "ACCEPTED", message: "This is a success Alert.", date: "18 juil." },
];
const NotificationPopup = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }: { theme: Theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[4],
    fontSize: 11,
    width: "500px",
  },
}));



const Notifications = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <NotificationPopup
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <Stack spacing={2} sx={{ padding: 2 }}>
                {notifications.map((notification, index) => (
                  <NotificationCard key={index} notification={notification} />
                ))}
              </Stack>
            }
            slotProps={{
              popper: {
                disablePortal: true,
              },
            }}
          >
            <CircularButton  onClick={handleTooltipOpen}>
              <NotificationsNoneOutlinedIcon color="primary"/>
            </CircularButton>
          </NotificationPopup>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default Notifications;
