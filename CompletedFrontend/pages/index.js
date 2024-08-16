import React,{useEffect} from "react";
import Nav from './components/NavBar/LandingPage';
// import Hero from "./components/NavBar/Hero';
import LandingPage from './components/NavBar/LandingPage'
import InfoCard from "./components/Card/InfoCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Last from "./components/Footer/Last";
import OfferCard from "./components/Card/OfferCard";
import Footer from "./components/Footer/Footer";
import Home from "./Home";
import { AuthProvider, AuthContext } from './AuthContext';
// import Login from './Login';
import Admin from './components/Admin';
// import AdminPortal from './AdminPortal';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin-login" />
        )
      }
    />
  );
};
const Index = () => {
  useEffect(() => {
    // AOS.init();
  }, );
  return (
    <div>
      <Home/>
      
      {/* <InfoCard/> */}
      {/* <OfferCard/> */}
      {/* <Hero /> */}
      {/* <Nav /> */}
      {/* <Footer /> 
      <Last/> */}
    </div>
  );
};

export default Index;
