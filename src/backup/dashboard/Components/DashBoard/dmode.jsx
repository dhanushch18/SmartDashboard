// theme.jsx
const getDesignThemes = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#FFF9EF",
              paper: "#FFFFFF",
              sidebar: "#FFF3E4",
            },
            sidebarItem: {
              color: "#333",
              activeBg: "#fff",
            },
            primary: {
              main: "#F9A825",
            },
            secondary: {
              main: "#00C853",
            },
            error: {
              main: "#FF5252",
            },
            warning: {
              main: "#FFC107",
            },
            text: {
              primary: "#000",
              secondary: "#444",
            },
          }
        : {
            background: {
              default: "#0D0D0D",
              paper: "#0D0D0D",
              sidebar: "#151515",
              border: "1px solid rgb(42, 42, 42)",
            },
            sidebarItem: {
              color: "#D7D7D7",
              activeBg: "#2A2A2A",
            },
            primary: {
              main: "#F9A825", // Accent yellow
            },
            secondary: {
              main: "#00C853", // Approve green
            },
            error: {
              main: "#FF5252",
            },
            warning: {
              main: "#FFC107",
            },
            text: {
              primary: "#FFFFFF",
              secondary: "#A0A0A0",
            },
          }),
    },
  
    typography: {
      fontFamily: "Poppins, sans-serif",
      h6: {
        fontWeight: 600,
      },
      body1: {
        fontSize: "0.9rem",
      },
      button: {
        textTransform: "none",
        fontWeight: 500,
      },
    },
  
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#0D0D0D" : "#FFFFFF",
            borderRadius: "16px",
            boxShadow:
              mode === "dark"
                ? "0 0 10px rgba(0, 0, 0, 0.5)"
                : "0 2px 10px rgba(0, 0, 0, 0.1)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            padding: "6px 16px",
          },
          containedPrimary: {
            color: "#000",
            backgroundColor: "#F9A825",
            "&:hover": {
              backgroundColor: "#fbc02d",
            },
          },
          containedSecondary: {
            backgroundColor: "#00C853",
            "&:hover": {
              backgroundColor: "#00e676",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#1C1C1C" : "#FFF3E4",
            boxShadow: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#1C1C1C" : "#FFFFFF",
            borderRadius: "16px",
          },
        },
      },
    },
  });
  
  export default getDesignThemes;
  