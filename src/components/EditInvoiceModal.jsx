import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useInvoice } from "../context/InvoiceContext";

const STATUS_OPTIONS = ["paid", "outstanding", "late"];

export default function EditInvoiceModal({ invoice, onClose }) {
  const { dispatch } = useInvoice();
  const [amount, setAmount] = useState(invoice.total);
  const [status, setStatus] = useState(invoice.status);

  const handleSave = () => {
    dispatch({
      type: "UPDATE_INVOICE",
      payload: { ...invoice, total: parseFloat(amount), status },
    });
    onClose();
  };

  return (
    <Dialog open onClose={onClose} fullWidth>
      <DialogTitle>Edit Invoice</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          margin="normal"
        >
          {STATUS_OPTIONS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
