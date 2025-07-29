import React from "react";
import DashboardCard from "../../../DesignSystem/DashboardCard";
import { Grid, Typography } from "@mui/material";
import TableDemande from "../components/TableDemande";
import PageHeader from "../../../DesignSystem/PageHeader";
import HolidayRequestDialog from "../components/HolidayRequestDialog";

export const UserDashboardPage = () => {
  return (
    <>
      <PageHeader>
        <Grid container justifyContent="space-between" alignItems="center" >
          <Typography variant="h5" color="primary">Hello Maram</Typography>
          <HolidayRequestDialog />
        </Grid>
      </PageHeader>
      <Grid container my={6} spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title="Vancances" content={"15/20"} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title="Maladie" content={"0"} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title="Sans solde" content={"15"} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title="Congé spécial" content={"0"} />
        </Grid>
      </Grid>
      <TableDemande />
    </>
  );
};
