import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton } from "@mui/material";
import axiosInstance from "../../../AxiosInstance";

const AcceptButton = ({ demandeId, onSuccess }: { demandeId: number; onSuccess?: () => void }) => {
  const handleAccept = async () => {
    try {
      await axiosInstance.patch(`/conges/${demandeId}/valider`);
      alert("Demande validée !");
      onSuccess?.(); // Refresh or notify parent
    } catch (error) {
      console.error("Erreur lors de la validation :", error);
      alert("Erreur lors de la validation !");
    }
  };

  return (
    <IconButton color="primary" onClick={handleAccept}>
      <CheckCircleOutlineIcon />
    </IconButton>
  );
};

// const AcceptButton = () => {
//   return (
//     <IconButton color="primary">
//       <CheckCircleOutlineIcon />
//     </IconButton>
//   );
// };

 export default AcceptButton;
