import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { Route, Routes } from "react-router";
import LandingPage from "./pages/landingPage/LandingPage";
import Navbar from "./global-components/Navbar";
import GoodDesignPage from "./pages/goodDesignPage/GoodDesignPage";
import Profile from "./pages/profile";
import hamburger from './assets/icons/menu-mobile.svg'
import cross from './assets/icons/cross.svg'
import 'react-creative-cursor/dist/styles.css';
import AnimatedCursor from "react-animated-cursor";
import mobileNavbarToggleAtom from "./recoil/atoms/mobileNavbarToggleAtom";
import { useRecoilState } from "recoil";
import websiteLoaderAtom from "./recoil/atoms/websiteLoaderAtom";

function App() {
  const [mobileNavbarToggle, setMobileNavbarToogle] = useRecoilState(mobileNavbarToggleAtom);
  const [landingPageLoading, _setLandingPageLoading] = useRecoilState(websiteLoaderAtom);

  return (
    <>
      <div className={`w-full relative ${landingPageLoading ? 'hidden' : ''}`}>
        <Navbar />
      </div>
      <div className={`md:hidden fixed w-[50px] flex justify-center items-center top-3 rounded-full bg-primary right-3 z-[120] ${landingPageLoading ? 'hidden' : ''}`} onClick={() => setMobileNavbarToogle(!mobileNavbarToggle)}>
        <img className={`w-full ${mobileNavbarToggle ? '' : 'ml-1.5'}`} src={mobileNavbarToggle ? cross : hamburger} alt="" />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gooddesign" element={<GoodDesignPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <div className="hidden lg:block">
        <AnimatedCursor
          innerSize={14}
          outerSize={30}
          outerScale={2}
          trailingSpeed={7}
          color='253, 187, 17'
        />
      </div>
    </>
  )
}

export default App
