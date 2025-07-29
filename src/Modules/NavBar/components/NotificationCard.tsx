import React from "react";
import { Alert, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

type NotificationType = "ACCEPTED" | "REJECTED";
export type Notification=  {
    type: NotificationType;
    message: string;
    date: string;
  };
type NotificationCardProps = {
  notification:Notification
};
function getSeverity(notificationType: NotificationType) {
  if (notificationType === "ACCEPTED") {
    return "success";
  } else {
    return "error";
  }
}
const NotificationCard = ({ notification }: NotificationCardProps) => {
  return (
    <Alert
      
      severity={notification.type==="ACCEPTED"?"success":"error"}
    
      icon={false}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{notification.message}</span>
      <Typography variant="caption" sx={{ marginLeft: "auto", color: "gray" }}>
        {notification.date}
      </Typography>
    </Alert>
  );
};

export default NotificationCard;
