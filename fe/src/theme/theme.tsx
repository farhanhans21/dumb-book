import { extendTheme } from "@chakra-ui/react";

export const costumeTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
        overflowX: "hidden",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    },
    fonts: {
      heading: "Outfit, sans-serif",
      body: "Inter, sans-serif",
    },
  },
});
