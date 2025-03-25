import { TextField, Typography, Box } from '@mui/material';

export default function NotesField({ value, onChange }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Notes
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add payment instructions or additional notes..."
      />
    </Box>
  );
}
