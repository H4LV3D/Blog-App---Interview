"use client";
import "./globals.css";
import "@mantine/core/styles.css";
import Head from "next/head";
// import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/contexts/themeContext";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
// import localFont from "next/font/local";
import { Notifications } from "@mantine/notifications";

const queryClient = new QueryClient();

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
      <body className={` `}>
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
