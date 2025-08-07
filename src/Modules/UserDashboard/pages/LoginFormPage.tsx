import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
  styled,
} from "@mui/material";

const AppBody = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[100],
}));

const LoginFormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
   
    try {
  const response = await axios.post(
  "http://localhost:8000/api/login",
  {
    username: email,
    password,
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);
  const { token } = response.data;
localStorage.setItem("token", token);

// Décoder le token et extraire user_id
const base64Url = token.split('.')[1];
const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
const payload = JSON.parse(window.atob(base64));
localStorage.setItem("userId", payload.user_id);

navigate("/user-dashboard");

} catch (err: any) {
  setError(err.response?.data?.error || "Login failed");
}
  };
  return (
    <>
      <AppBody>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          width="100%"
        >
          <Card sx={{ width: 350, p: 2 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Welcome!
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Sign in to continue.
              </Typography>
              {error && (
                <Typography
                  variant="body2"
                  color="error"
                  align="center"
                  sx={{ mt: 2 }}
                >
                  {error}
                </Typography>
              )}
              <Box  mt={2} >
                <Typography variant="body2" fontWeight="bold" gutterBottom>
                  Email
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Entrer votre email"
                  variant="outlined"
                  size="small"
                  margin="dense"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Typography
                  variant="body2"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ mt: 2 }}
                >
                  Password
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  placeholder="Mot de passe"
                  variant="outlined"
                  size="small"
                  margin="dense"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3 }}
                  onClick={handleSubmit}
                >
                  Connexion
                </Button>
              </Box>

              <Typography variant="body2" align="center" mt={2}>
                Don&apos;t have an account?{" "}
                <Link href="#" underline="hover">
                  Sign up
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </AppBody>
    </>
  );
};

export default LoginFormPage;
