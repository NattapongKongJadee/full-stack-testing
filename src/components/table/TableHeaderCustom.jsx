import { TableHead, TableRow, TableCell, Checkbox } from "@mui/material";

const TableHeaderCustom = ({ isAllSelected, handleSelectAll }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ color: "white", borderBottom: "none" }}>
          <Checkbox
            color="primary"
            checked={isAllSelected}
            onChange={handleSelectAll}
            sx={{
              color: "#C54CFF",
              "&.Mui-checked": { color: "#C54CFF" },
            }}
          />
          Order
        </TableCell>
        <TableCell sx={{ color: "white", borderBottom: "none" }}>
          Date
        </TableCell>
        <TableCell sx={{ color: "white", borderBottom: "none" }}>
          Status
        </TableCell>
        <TableCell sx={{ color: "white", borderBottom: "none" }}>
          Total
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeaderCustom;
