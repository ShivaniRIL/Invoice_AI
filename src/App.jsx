import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  CssBaseline,
  ThemeProvider,
  Box,
} from "@mui/material";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceList from "./components/InvoiceList";
import { InvoiceProvider } from "./context/InvoiceContext";
import theme from "../theme";

// ✅ Custom Modern Minimal Theme


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InvoiceProvider>
        <Router>
          <AppBar position="static" color="transparent">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6" color="textPrimary">
                Invoice App
              </Typography>
              <Box>
                <Button component={Link} to="/" sx={{ mx: 1 }}>
                  Invoices
                </Button>
                <Button component={Link} to="/create" sx={{ mx: 1 }}>
                  Create Invoice
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          <Container sx={{ mt: 4 }}>
            <AppRoutes />
          </Container>
        </Router>
      </InvoiceProvider>
    </ThemeProvider>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<InvoiceList />} />
      <Route path="/create" element={<InvoiceForm />} />
    </Routes>
  );
}

export default App;
