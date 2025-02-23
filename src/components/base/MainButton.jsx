import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6C72FF",
  color: "#fff",
  borderRadius: "10px",
  fontWeight: 600,
  textTransform: "none",
  width: "100%",
  minWidth: "100px",
  maxWidth: "500px",
  padding: "10px 16px",
  fontSize: "0.875rem",

  [theme.breakpoints.up("sm")]: {
    minWidth: "200px",
    padding: "12px 20px",
    fontSize: "1rem",
  },

  [theme.breakpoints.up("md")]: {
    minWidth: "300px",
    padding: "14px 24px",
    fontSize: "1.125rem",
  },

  [theme.breakpoints.up("lg")]: {
    minWidth: "500px",
    padding: "16px 28px",
    fontSize: "1.25rem",
  },
}));

const PrimaryButton = ({ label, onClick, className }) => {
  return (
    <CustomButton
      variant="contained"
      className={className}
      onClick={onClick}
      fullWidth
    >
      {label}
    </CustomButton>
  );
};

export default PrimaryButton;
