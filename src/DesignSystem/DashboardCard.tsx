import React from "react";
import { Card, CardContent, Typography, useTheme } from "@mui/material";

const DashboardCard = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        transition: "transform 0.3s ease, boxShadow 0.3s ease",
        borderRadius: 2,
        boxShadow: 3,
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
