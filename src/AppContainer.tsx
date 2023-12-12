import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./styles/mui";
import { AppRoutes } from "./AppRoutes";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const AppContainer = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
      </ThemeProvider>
    </CacheProvider>
  );
};
