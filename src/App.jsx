import logo from './logo.svg';
import './App.css';
import DesktopRoutes from './routes/DesktopRoutes';
import HeaderBar from './components/headerbar/HeaderBar';
import Footer from './components/footer/Footer';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMobileState } from './redux/isMobile';
import * as styled from './App.styles'
import ScrollToTop from './ScrollToTop';
import { ToastContainer } from 'react-toastify';
const App = () =>  {

  const dispatch = useDispatch();
  useEffect(()=> {

    dispatch(setMobileState(isMobile));
    window.scrollTo(0,0);

  },[])

  const isMobileApp = useSelector(state=> state.isMobileState.isMobile);
  return (
    <>
    <styled.App isMobile={isMobileApp}>
      <ScrollToTop>
      <HeaderBar/>
      <DesktopRoutes/>

      <Footer/>
      </ScrollToTop>
    </styled.App>
    </>
  );
}

export default App;
