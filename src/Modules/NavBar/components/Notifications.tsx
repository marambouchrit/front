import React from "react";
import { useState } from "react";
import axiosInstance from "../../../AxiosInstance";
import { IconButton, Stack, styled, type Theme } from "@mui/material";
import Tooltip, {
  tooltipClasses,
  type TooltipProps,
} from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NotificationCard from "./NotificationCard";
import { CircularButton } from "../Sidebar";
import { Typography } from "@mui/material";

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

const getUserIdFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const payload = JSON.parse(window.atob(base64));
  return payload.user_id;
};

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const fetchNotifications = async () => {
    const userId = getUserIdFromToken();
    if (!userId) {
      console.warn("Utilisateur non connecté");
      return;
    }

    try {
      const response = await axiosInstance.get(`/notifications/user/${userId}`);
      setNotifications(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des notifications", error);
    }
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    fetchNotifications(); // charger à chaque ouverture
  };

  const handleTooltipClose = () => {
    setOpen(false);
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
                {notifications.length === 0 ? (
                  <Typography variant="body2" color="text.secondary">
                    Aucune notification
                  </Typography>
                ) : (
                  notifications.map((notification, index) => (
                    <NotificationCard key={index} notification={notification} />
                  ))
                )}
              </Stack>
            }
            slotProps={{
              popper: {
                disablePortal: true,
              },
            }}
          >
            <CircularButton onClick={handleTooltipOpen}>
              <NotificationsNoneOutlinedIcon color="primary" />
            </CircularButton>
          </NotificationPopup>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default Notifications;
