import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import { format } from "date-fns";
import { useState, useMemo } from "react";
import { useInvoice } from "../context/InvoiceContext";
import EditInvoiceModal from "./EditInvoiceModal";

export default function InvoiceList() {
  const { state } = useInvoice();
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const STATUS_COLORS = {
    paid: "success",
    outstanding: "warning",
    late: "error",
    default: "default",
  };

  const invoices = useMemo(() => state.invoices || [], [state.invoices]);

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Invoices
        </Typography>

        {invoices.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center", my: 3 }}>
            No invoices available.
          </Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell><strong>Date</strong></TableCell>
                  <TableCell><strong>Amount</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>
                      {invoice.date ? format(new Date(invoice.date), "MM/dd/yyyy") : "N/A"}
                    </TableCell>
                    <TableCell>{currencyFormatter.format(invoice.total)}</TableCell>
                    <TableCell>
                      <Chip
                        label={invoice.status}
                        color={STATUS_COLORS[invoice.status] || "default"}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => setSelectedInvoice(invoice)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>

      {/* Edit Invoice Modal */}
      {selectedInvoice && (
        <EditInvoiceModal
          invoice={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
        />
      )}
    </Container>
  );
}
