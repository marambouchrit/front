import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Typography,
  Box,
 
} from "@mui/material";
import AcceptButton from "./AcceptButton";
import RejectButton from "./RejectButton";

const EmployeRequestTable = () => {
  const tableData = [
    {
      id: 1,
      dateDebut: "2025-07-18",
      dateFin: "2025-07-20",
      type: "Vacances",
      statut: "En attente",
    },
    {
      id: 2,
      dateDebut: "2025-07-21",
      dateFin: "2025-07-23",
      type: "Maladie",
      statut: "En attente",
    },
    {
      id: 3,
      dateDebut: "2025-07-25",
      dateFin: "2025-07-27",
      type: "Vacances",
      statut: "En attente",
    },
    {
      id: 4,
      dateDebut: "2025-07-28",
      dateFin: "2025-07-30",
      type: "Congé spécial",
      statut: "En attente",
    },
    {
      id: 5,
      dateDebut: "2025-08-01",
      dateFin: "2025-08-03",
      type: "Maladie",
      statut: "En attente",
    },
    {
      id: 6,
      dateDebut: "2025-08-05",
      dateFin: "2025-08-07",
      type: "Vacances",
      statut: "En attente",
    },
    {
      id: 7,
      dateDebut: "2025-08-08",
      dateFin: "2025-08-10",
      type: "Congé spécial",
      statut: "En attente",
    },
  ];

  return (
    <>
      {" "}
      <Typography variant="h6" color="primary" sx={{ marginTop: 5, marginBottom: 2 }}>
        Les demandes en attentes
      </Typography>
      <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ paddingLeft: 2}}>Date début</TableCell>
              <TableCell>Date fin</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ paddingLeft: 2 }}>{row.dateDebut}</TableCell>
                <TableCell>{row.dateFin}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.statut}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: " 2px" }}>
                    <AcceptButton/>
                    <RejectButton/>
                    
                      
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default EmployeRequestTable;
