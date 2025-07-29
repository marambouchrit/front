import { Typography, Paper } from "@mui/material";
import React from "react";
import PageHeader from "../../../DesignSystem/PageHeader";

const DepartementName = ({ nom }: { nom: string }) => {
  return (
    <PageHeader>
      <Typography variant='h5' color ='primary' >Departement:dev web</Typography>
    </PageHeader>
  );
};

export default DepartementName;
