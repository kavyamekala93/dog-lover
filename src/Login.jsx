import {
    Avatar,
    Box,
    Container,
    FormControlLabel,
    Paper,
    TextField,
    Typography,
    Checkbox,
    Button,
    Grid2,
    Link,
  } from "@mui/material";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
  import { Link as RouterLink } from "react-router-dom";
  
  const Login = () => {
    const handleSubmit = () => console.log("login");
    return (
      <Container maxWidth="xs">
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
          <Avatar
            sx={{
              mx: "auto",
              bgcolor: "secondary.main",
              textAlign: "center",
              mb: 1,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textAlign: "center", marginBottom:"40px" }}>
            Dog Lover App Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField id="name" label="Name"
              
              fullWidth              
              autoFocus
              sx={{ mb: 2 }}
            />
            <TextField 
              id="email" 
              label="Email"
              fullWidth             
              autoFocus
              sx={{ mb: 2 }}
            />
            {/* <TextField
              placeholder="Enter username"
              fullWidth
              required
              autoFocus
              sx={{ mb: 2 }}
            />
            <TextField
              placeholder="Enter password"
              fullWidth
              required
              type="password"
            /> */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
              Sign In
            </Button>
          </Box>
          {/* <Grid2 container justifyContent="space-between" sx={{ mt: 1 }}>
            <Grid2 item>
              <Link component={RouterLink} to="/forgot">
                Forgot password?
              </Link>
            </Grid2>
            <Grid2 item>
              <Link component={RouterLink} to="/register">
                Sign Up
              </Link>
            </Grid2>
          </Grid2> */}
        </Paper>
      </Container>
    );
  };
  
  export default Login;