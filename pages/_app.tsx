import ClientProvider from "@/src/contexts/client.context";
import LoadProvider from "@/src/contexts/load.context";
import StyledGlobal from "@/src/styles/global.style";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadProvider>
        <ClientProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="colored"
          />
          <StyledGlobal />
          <Component {...pageProps} />;
        </ClientProvider>
      </LoadProvider>
    </>
  );
}
