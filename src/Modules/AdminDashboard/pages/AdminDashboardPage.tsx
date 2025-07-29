import React from "react";
import DashboardCard from "../../../DesignSystem/DashboardCard";
import { Grid, Box, Paper, Typography } from "@mui/material";
import UsersTable from "../components/UsersTable";
import TableDemande from "../../UserDashboard/components/TableDemande";
import EmployeRequestTable from "../../SuperviseurDashboardPage/components/EmployeRequest";
const AdminDashboardPage = () => {
  return (
    <>
      <Grid container my={6} spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title=" Utilisateurs" content={"20"} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title="Superviseurs" content={"6"} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard
            title="Departements 
"
            content={"6"}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title=" Demandes " content={"12"} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Paper sx={{ height: "215px" }}>TABLE</Paper>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <UsersTable />
        </Grid>
      </Grid>
      <EmployeRequestTable/>
    </>
  );
};

export default AdminDashboardPage;
