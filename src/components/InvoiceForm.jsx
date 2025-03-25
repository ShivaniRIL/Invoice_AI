import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Snackbar,
  Typography,
} from '@mui/material';
import { useInvoice } from '../context/InvoiceContext';
import LineItemRow from './LineItemRow';
import NotesField from './NotesField';

export default function InvoiceForm() {
  const { dispatch } = useInvoice();
  const [open, setOpen] = useState(false);
  const [lineItems, setLineItems] = useState([
    { category: 'hours', description: '', quantity: 1, rate: 0, amount: 0 },
  ]);
  const [notes, setNotes] = useState('');

  const handleAddLineItem = () => {
    setLineItems([
      ...lineItems,
      { category: 'hours', description: '', quantity: 1, rate: 0, amount: 0 },
    ]);
  };

  const handleLineItemChange = (index, field, value) => {
    const newLineItems = [...lineItems];
    newLineItems[index][field] = value;

    // Recalculate amount based on category
    if (newLineItems[index].category === 'hours' || newLineItems[index].category === 'materials') {
      newLineItems[index].amount = newLineItems[index].quantity * newLineItems[index].rate;
    } else if (newLineItems[index].category === 'expenses') {
      newLineItems[index].amount = value;
    }

    setLineItems(newLineItems);
  };

  const handleRemoveLineItem = (index) => {
    setLineItems(lineItems.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = lineItems.reduce((sum, item) => sum + item.amount, 0);

    dispatch({
      type: 'ADD_INVOICE',
      payload: {
        lineItems,
        notes,
        total,
        status: 'outstanding',
        date: new Date().toISOString(),
      },
    });

    setLineItems([{ category: 'hours', description: '', quantity: 1, rate: 0, amount: 0 }]);
    setNotes('');
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create New Invoice
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Line Items
            </Typography>
            {lineItems.map((item, index) => (
              <LineItemRow
                key={index}
                index={index}
                item={item}
                onChange={handleLineItemChange}
                onRemove={handleRemoveLineItem}
                disableRemove={lineItems.length === 1}
              />
            ))}
            <Button variant="outlined" onClick={handleAddLineItem}>
              Add Line Item
            </Button>
          </Box>

          <NotesField value={notes} onChange={setNotes} />

          <Button variant="contained" type="submit" size="large">
            Create Invoice
          </Button>
        </form>
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Invoice created successfully!"
      />
      </Paper>
    </Container>
  );
}
