import { TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "10px",
  fontWeight: 500,
  width: "100%",
  minWidth: "100px",
  maxWidth: "500px",
  [theme.breakpoints.up("sm")]: {
    minWidth: "300px",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: "400px",
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "500px",
  },
}));

function MainTextField({
  placeholderText,
  type = "text",
  icon = null,
  options = [],
}) {
  return (
    <CustomTextField
      select={type === "select"}
      placeholder={placeholderText}
      type={type !== "select" ? type : undefined}
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: icon ? (
          <InputAdornment position="end">{icon}</InputAdornment>
        ) : null,
      }}
    >
      {type === "select" &&
        options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
    </CustomTextField>
  );
}

export default MainTextField;
