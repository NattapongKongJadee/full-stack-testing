import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(() => ({
  backgroundColor: "#6C72FF",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: "10px",
  fontWeight: 600,
  minWidth: 500,
  textTransform: "none",
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
