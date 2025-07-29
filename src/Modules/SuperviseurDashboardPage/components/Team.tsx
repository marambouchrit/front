import React from 'react'


 import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Typography } from '@mui/material';

const tableData = [
    {  nom: "Bouchrit", prenom: "Maram", email: "marambouchrit@gmail.com", solde: "29j" },
    { nom: "Dupont", prenom: "Jean", email: "exemple@gmail.com", solde: "5j" },
    {  nom: "Martin", prenom: "Lisa", email: "lisa@gmail.com", solde: "0j" },
];
const Team = () => {
  return (
    <>
    <Typography variant='h6' color="primary" sx={{marginTop:5,marginBottom:2,}}>Liste des employes</Typography>
    <TableContainer component={Paper} sx={{ maxHeight: '400px'}}>
      <Table  aria-label="simple table" stickyHeader>
        <TableHead >
          <TableRow>
            <TableCell sx={{ paddingLeft: 2 }}>nom</TableCell>
           
            <TableCell>Prenom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Solde</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ paddingLeft: 2 }}>{row.nom}</TableCell>
              <TableCell>{row.prenom}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.solde}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};


export default Team