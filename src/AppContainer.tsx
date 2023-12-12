import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./styles/mui";
import { AppRoutes } from "./AppRoutes";

export const AppContainer = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
};
