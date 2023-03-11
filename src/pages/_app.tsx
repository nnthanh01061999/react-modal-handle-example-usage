import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ModalContextProvider } from "react-modal-handle";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
      <Analytics />
    </ModalContextProvider>
  );
}
