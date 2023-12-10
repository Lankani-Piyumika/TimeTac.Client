import React from "react";
import {
  Stack,
  Box,
  Typography,
  Divider,
  FormControl,
  useTheme,
  Link
} from "@mui/material";
import MuiTextField from "../common/textField/TextField";
import MuiLoadingButton from "../common/buttons/loadingButton/LoadingButton";

const SignIn = () => {
    const theme = useTheme();
    
  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Stack sx={{ justifyContent: "flex-start" }}>
          <Typography variant="h2" style={{color: theme.palette.primary.dark}}>TimeTac</Typography>
          <Typography variant="h5" style={{color: theme.palette.primary.main}}>Discover Easy Management in One</Typography>
        </Stack>
        <Stack sx={{border: "1px solid", borderColor: theme.palette.secondary.light, p: "28px"}}>
        <Typography variant="h4" style={{color: theme.palette.primary.light}}>Sign In</Typography>
        <FormControl sx={{justifyContent: "flex-start", width:"100vh", textAlign: "left"}}>
          <MuiTextField 
            label={"Email"}
            fullWidth={true}
            required={true}
            type={"email"}
          />
          <MuiTextField 
            label={"Password"}
            fullWidth={true}
            required={true}
            type={"password"}
          />
        </FormControl>
        <MuiLoadingButton
            onClick={() => {}}
            loading={false}
            label={"Sign In"}
          />
        <Divider flexItem sx={{m: "10px"}}/>  

        <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="body2" style={{color: theme.palette.primary.light}}>New User?</Typography>
        <Link variant="body2" href="register" style={{color: theme.palette.primary.light}} underline="always">Create Organization</Link>
        </Stack>      
        </Stack>
      </Stack>
    </Box>
  );
};

export default SignIn;
