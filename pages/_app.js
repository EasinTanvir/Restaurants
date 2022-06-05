import { HelperContext } from '../Components/Context/Context';
import Header from '../Components/header/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <HelperContext>
      <Header>
       <Component {...pageProps} />       
    </Header>
    </HelperContext>
    
 
  )
}

export default MyApp
