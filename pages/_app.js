import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
