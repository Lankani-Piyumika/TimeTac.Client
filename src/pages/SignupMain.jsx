import React from "react";
import {
  Stack,
  Box,
  Typography,
  Divider,
  FormControl,
  useTheme,
  Link,
} from "@mui/material";
import MuiTextField from "../common/textField/TextField";
import MuiLoadingButton from "../common/buttons/loadingButton/LoadingButton";

const SignUpMain = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Stack sx={{ justifyContent: "flex-start" }}>
          <Typography
            variant="h2"
            style={{ color: theme.palette.primary.dark }}
          >
            TimeTac
          </Typography>
          <Typography
            variant="h5"
            style={{ color: theme.palette.primary.main }}
          >
            Discover Easy Management in One
          </Typography>
        </Stack>
        <Stack
          sx={{
            border: "1px solid",
            borderColor: theme.palette.secondary.light,
            p: "28px",
          }}
        >
          <Typography
            variant="h4"
            style={{ color: theme.palette.primary.light }}
          >
            Register
          </Typography>
          <FormControl
            sx={{
              justifyContent: "flex-start",
              width: "100vh",
              textAlign: "left",
            }}
          >
            <MuiTextField
              label={"Name"}
              fullWidth={true}
              required={true}
              type={"text"}
            />
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
            <MuiTextField
              label={"Company Name"}
              fullWidth={true}
              required={true}
              type={"text"}
            />
          </FormControl>
          <MuiLoadingButton
            onClick={() => {}}
            loading={false}
            label={"Register"}
          />
          <Divider flexItem sx={{ m: "10px" }} />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              variant="body2"
              style={{ color: theme.palette.primary.light }}
            >
              Already a user?
            </Typography>
            <Link
              variant="body2"
              href="login"
              style={{ color: theme.palette.primary.light }}
              underline="always"
            >
              Sign in
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SignUpMain;
