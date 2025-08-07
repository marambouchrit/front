import React from "react";
import axiosInstance from "../../../AxiosInstance";
import { useEffect,useState } from "react";
import DashboardCard from "../../../DesignSystem/DashboardCard";
import { Grid, Typography } from "@mui/material";
import TableDemande from "../components/TableDemande";
import PageHeader from "../../../DesignSystem/PageHeader";
import HolidayRequestDialog from "../components/HolidayRequestDialog";

export const UserDashboardPage = () => {
  
const [username, setUsername] = useState("");
 const [congeStats, setCongeStats] = useState({
    vacances: 0,
    maladie: 0,
    sansSolde: 0,
    special: 0,
  });

useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const payload = JSON.parse(window.atob(base64));
      const userId = payload.user_id;
      setUsername(payload.prenom || "");

      axiosInstance
        .get(`/soldeconge/user/${userId}`)
        .then((res) => {
          setCongeStats({
            vacances:
             res.data.joursPrisVacances,
            maladie: res.data.joursPrisMaladie,
            sansSolde: res.data.joursPrisSansSolde,
            special: res.data.joursPrisMaternite,
          });
        })
        .catch((err) => {
          console.error("Erreur lors du chargement du solde", err);
        });
    }
  }, []);


  return (
    <>
      <PageHeader>
        <Grid container justifyContent="space-between" alignItems="center" >
          <Typography variant="h5" color="primary">Bienvenue {username}</Typography>
          <HolidayRequestDialog />
        </Grid>
      </PageHeader>
      <Grid container my={6} spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title="Vancances" content={`${congeStats.vacances}`} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title="Maladie" content={`${congeStats.maladie}`} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title="Sans solde" content={`${congeStats.sansSolde}`} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard title="Congé spécial"  content={`${congeStats.special}`} />
        </Grid>
      </Grid>
      <TableDemande />
    </>
  );
};
