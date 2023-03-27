import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/auth/authContext";
import "antd-css-utilities/utility.min.css";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Navbar />
        <div style={{ padding: "1rem" }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </AuthProvider>
    </Provider>
  );
}
