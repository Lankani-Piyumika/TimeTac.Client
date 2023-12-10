import React from "react";
import {
  alpha,
  TextField,
  styled,
  FormLabel,
} from "@mui/material";

const BootstrapTextField = styled(TextField)(({ theme }) => ({
    "label + &": {
      marginTop: "1px",
    },
    "& .MuiInputBase-input": {
      borderRadius: 2,
      position: "relative",
      border: "1px solid",
      borderColor: theme.palette.grey[100],
      fontSize: 16,
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.05)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  
  const MuiTextField = ({
      fullWidth,
      label,
      required,
      error,
      helperText,
      type
  }) => {
      return (
          <>
            <FormLabel>{label}</FormLabel>
            <BootstrapTextField 
              fullWidth={fullWidth}
              required={required}
              error={error}
              helperText={helperText}
              size="small"
              variant="outlined"
              margin="normal"
              sx={{
                  '& legend': { display: 'none' },
                  '& fieldset': { top: 0 },
                  fontSize: "16px"
              }}
              type={type}
          />
          </>
          
      );
  }

export default MuiTextField;