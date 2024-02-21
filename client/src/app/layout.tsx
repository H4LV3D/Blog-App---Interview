"use client";
import "./globals.css";
import "@mantine/core/styles.css";
import Head from "next/head";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/contexts/themeContext";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import localFont from "next/font/local";
import { Notifications } from "@mantine/notifications";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const queryClient = new QueryClient();

const clash = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Bold.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Semibold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head key="app-head">
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/solid.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/all.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/brands.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/regular.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/fontawesome.css"
        />
      </Head>
      <body className={`${raleway.className} ${clash.className} `}>
        <MantineProvider withCssVariables>
          <Notifications position="top-left" zIndex={2077} />
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <ThemeProvider>{children}</ThemeProvider>
            </Provider>
          </QueryClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
