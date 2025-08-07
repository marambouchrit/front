import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { IconButton, TextField } from "@mui/material";
import axiosInstance from "../../../AxiosInstance";

const RejectButton = ({ demandeId, onSuccess }: { demandeId: number; onSuccess?: () => void }) => {
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleReject = async () => {
    try {
      await axiosInstance.patch(`/conges/${demandeId}/refuser`, {
        commentaire: comment,
      });
      alert("Demande refusée !");
      setOpen(false);
      onSuccess?.();
    } catch (error) {
      console.error("Erreur lors du refus :", error);
      alert("Erreur lors du refus !");
    }
  };

  return (
    <React.Fragment>
      <IconButton color="error" onClick={handleClickOpen}>
        <CancelOutlinedIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Ajouter un commentaire de refus"}</DialogTitle>
        <DialogContent>
          <TextField
            value={comment}
            fullWidth
            placeholder="Écrire votre commentaire"
            multiline
            rows={4}
            onChange={(e) => setComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleReject} autoFocus>
            Envoyer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default RejectButton;
// const RejectButton = () => {
//   const [open, setOpen] = React.useState(false);
//   const [comment, setComment] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleChange = (event: any) => {
//     setComment(event.target.value);
//   };

//   return (
//     <React.Fragment>
//       <IconButton color="error" onClick={handleClickOpen}>
//         <CancelOutlinedIcon />
//       </IconButton>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{"Ajouter un commentaire de refus"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             <TextField
//               value={comment}
//               fullWidth
//               placeholder="Ecrire votre commentaire"
//               multiline
//               rows={4}
              
//               onChange={handleChange}
//             ></TextField>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Annuler</Button>
//           <Button onClick={handleClose} autoFocus>
//             Envoyer
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// };
// export default RejectButton;
