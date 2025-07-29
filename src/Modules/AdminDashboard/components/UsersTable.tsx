import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Typography } from '@mui/material';

const UsersTable = () => {
  
    const tableData = [
    { id: 1, nom: "Bouchrit maram", role: "employe", departement:"dev web", solde: "15j", },
     { id: 1, nom: "Bouchrit maram", role: "employe", departement:"dev web", solde: "15j", },
      { id: 1, nom: "Bouchrit maram", role: "employe",departement:"dev web",  solde: "15j", },
  ];

  return (
    <>
    <TableContainer component={Paper} sx={{ maxHeight: '300px', }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell >Employe</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Departement</TableCell>
            <TableCell>Solde</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.nom}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.departement}</TableCell>
              <TableCell>{row.solde}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
  
}

export default UsersTable;
