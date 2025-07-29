import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Typography,
} from '@mui/material';
import axiosInstance from '../../../AxiosInstance';

interface DemandeConge {
  id: number;
  dateDebut: string;
  dateFin: string;
  typeConge: string;
  statut: string;
  commentaireRefus?: string;
}

const TableDemande = () => {
  const [demandes, setDemandes] = useState<DemandeConge[]>([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem('userId'); 

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await axiosInstance.get(`/users/${userId}/demandes`, {
          
        });

        setDemandes(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des demandes :", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchDemandes();
  }, [userId]);

  return (
    <>
      <Typography variant="h5" color="primary" sx={{ mt: 10, mb: 2, pl: 2 }}>
        Mes demandes précédentes
      </Typography>

      <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Date début</TableCell>
              <TableCell>Date fin</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Commentaire</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={5}>Chargement...</TableCell></TableRow>
            ) : demandes.length === 0 ? (
              <TableRow><TableCell colSpan={5}>Aucune demande trouvée</TableCell></TableRow>
            ) : (
              demandes.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.dateDebut}</TableCell>
                  <TableCell>{row.dateFin}</TableCell>
                  <TableCell>{row.typeConge}</TableCell>
                  <TableCell>{row.statut}</TableCell>
                  <TableCell>{row.commentaireRefus || '-'}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableDemande;
