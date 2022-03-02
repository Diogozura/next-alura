import GlobalStyle from "../src/componets/theme/GlobalStyle";


function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    ) 
}
  
export default MyApp