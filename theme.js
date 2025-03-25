import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#18181B" }, // Deep Charcoal Black
    secondary: { main: "#3B82F6" }, // Vibrant Blue
    background: { default: "#F4F4F5", paper: "rgba(255, 255, 255, 0.8)" }, // Soft white with slight transparency
    text: { primary: "#111827", secondary: "#6B7280" }, // Dark & muted gray tones
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    h1: { fontWeight: 700, fontSize: "2.75rem", letterSpacing: "-0.03em" },
    h6: { fontWeight: 600, fontSize: "1.125rem", letterSpacing: "-0.02em" },
    body1: { fontSize: "1rem", fontWeight: 400 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: 600,
          background: "linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)",
          color: "#FFF",
          boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            background: "linear-gradient(135deg, #2563EB 0%, #4338CA 100%)",
            boxShadow: "0 6px 16px rgba(59, 130, 246, 0.4)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "14px",
          boxShadow: "0 6px 24px rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(10px)", // Glassmorphism effect
          background: "rgba(255, 255, 255, 0.6)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
            "& fieldset": { borderColor: "#CBD5E1" },
            "&:hover fieldset": { borderColor: "#3B82F6" },
            "&.Mui-focused fieldset": { borderColor: "#6366F1" },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.5)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(12px)",
          padding: "12px 24px",
        },
      },
    },
  },
});

export default theme;
