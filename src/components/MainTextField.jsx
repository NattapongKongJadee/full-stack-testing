import { TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";

const CustomTextField = styled(TextField)(() => ({
  backgroundColor: "#fff",
  borderRadius: "10px",
  fontWeight: 500,
  minWidth: 500,
}));

function MainTextField({
  placeholderText,
  type = "text",
  icon = null,
  options = [],
}) {
  return (
    <CustomTextField
      select={type === "select"} // Enable dropdown when type is "select"
      placeholder={placeholderText}
      type={type !== "select" ? type : undefined} // Only apply type if not a select
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
