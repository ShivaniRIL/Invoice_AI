import { TextField, IconButton, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CATEGORY_OPTIONS = [
  { value: 'hours', label: 'Hours of Work' },
  { value: 'expenses', label: 'Work-Related Expenses' },
  { value: 'materials', label: 'Materials & Labor' },
];

export default function LineItemRow({ item, index, onChange, onRemove, disableRemove }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        mb: 2,
        alignItems: 'center',
      }}
    >
      {/* Category Dropdown */}
      <FormControl sx={{ flex: 1 }} >
        {/* <InputLabel>Category</InputLabel> */}
        <Select
          value={item.category}
          onChange={(e) => onChange(index, 'category', e.target.value)}
          size='small'
        >
          {CATEGORY_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Description */}
      <TextField
        label="Description"
        value={item.description}
        onChange={(e) => onChange(index, 'description', e.target.value)}
        sx={{ flex: 2 }}
        size='small'
      />

      {/* Conditional Fields Based on Category */}
      {item.category === 'hours' && (
        <>
          <TextField
            label="Hours"
            type="number"
            value={item.quantity}
            onChange={(e) => onChange(index, 'quantity', Number(e.target.value))}
            sx={{ flex: 1 }}
            size='small'
          />
          <TextField
            label="Rate per Hour"
            type="number"
            value={item.rate}
            onChange={(e) => onChange(index, 'rate', Number(e.target.value))}
            sx={{ flex: 1 }}
            size='small'
          />
        </>
      )}

      {item.category === 'expenses' && (
        <TextField
          label="Expense Amount"
          type="number"
          value={item.amount}
          onChange={(e) => onChange(index, 'amount', Number(e.target.value))}
          sx={{ flex: 1 }}
          size='small'
        />
      )}

      {item.category === 'materials' && (
        <>
          <TextField
            label="Quantity"
            type="number"
            value={item.quantity}
            onChange={(e) => onChange(index, 'quantity', Number(e.target.value))}
            sx={{ flex: 1 }}
            size='small'
          />
          <TextField
            label="Rate"
            type="number"
            value={item.rate}
            onChange={(e) => onChange(index, 'rate', Number(e.target.value))}
            sx={{ flex: 1 }}
            size='small'
          />
        </>
      )}

      {/* Calculated Amount */}
      <TextField label="Amount" type="number" value={item.amount} disabled sx={{ flex: 1 }} size='small' />

      {/* Delete Button */}
      <IconButton onClick={() => onRemove(index)} disabled={disableRemove}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}
