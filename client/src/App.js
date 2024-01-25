import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => state.global.mode);

  const theme = useMemo(() => {
    return createTheme(themeSettings(mode));
  }, [mode]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>hello</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
