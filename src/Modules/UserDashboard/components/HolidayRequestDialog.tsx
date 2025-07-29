import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DatePickerForm from "./DatePickerForm";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import axiosInstance from "../../../AxiosInstance";

const HolidayRequestDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");
   const [dateDebut, setDateDebut] = React.useState<Date | null>(null);
  const [dateFin, setDateFin] = React.useState<Date | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };

  const submitDemandeConge = async () => {
    if (!dateDebut || !dateFin || !type) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const userId = localStorage.getItem("userId"); // ou récupérer depuis context/auth
    if (!userId) {
      alert("Utilisateur non connecté.");
      return;
    }

    try {
      const response = await axiosInstance.post(
        "/conges",
        {
          dateDebut: dateDebut.toISOString().split("T")[0],
          dateFin: dateFin.toISOString().split("T")[0],
          typeConge: type,
          statut: "En attente",
          user_id: parseInt(userId),
        },
       
      );

      console.log("Demande envoyée avec succès :", response.data);
      alert("Votre demande de congé a été créée.");
      handleClose();
    } catch (error: any) {
      console.error("Erreur lors de l’envoi :", error.response?.data || error.message);
      alert("Erreur : " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Demander conge
      </Button>
      <Dialog fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle>Demande de congé</DialogTitle>
        <DialogContent>
          <DatePickerForm label="Date debut" value={dateDebut} onChange={setDateDebut} />
          <DatePickerForm label="Date fin" value={dateFin} onChange={setDateFin}/>

          <FormControl sx={{ marginTop: "8px", minWidth: 120, width: "100%" }}>
            <InputLabel>Type</InputLabel>
            <Select value={type} label="type" onChange={handleChange}>
              <MenuItem value="Maladie">Maladie</MenuItem>
              <MenuItem value="Vacances">Vacances</MenuItem>
                <MenuItem value="Sans solde">Sans solde</MenuItem>
              <MenuItem value="Maternité">Maternité</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button
            onClick={submitDemandeConge}
            autoFocus
          >
            Envoyer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default HolidayRequestDialog;
