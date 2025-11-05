import lockWhite from '../assets/icons/wegotit-icons-lock(white)-04.svg'
import logoYellow from '../assets/icons/wegotit-icons-home(yellow)-02.svg'
import logoWhite from '../assets/icons/wegotit-icons-home(white)-05.svg'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import mobileNavbarToggleAtom from '../recoil/atoms/mobileNavbarToggleAtom'

const Navbar = () => {
    const location = useLocation();
    const [mobileNavbarToggle, setMobileNavbarToogle] = useRecoilState(mobileNavbarToggleAtom);
    const [hover, setHover] = useState(false);
    const [_showBackground, setShowBackground] = useState(false);

    let scrollTimeout: any;

    const handleScroll = () => {
        setShowBackground(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            setShowBackground(false);
        }, 1400);
    };

    const handleLinkButtonClick = () => {
        window.open('https://www.behance.net/pallavsinha', '_blank');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={` hidden md:flex cursor-pointer text-white fixed font-clashdisplaysemibold top-0 justify-between transition-all duration-300 ease-in-out bg-black shadow-none sm:justify-between items-center w-full p-5 z-[10]`}>
                <div className='w-[40%] lg:w-[20%] flex flex-row-reverse md:flex-row justify-end md:justify-start gap-1 md:gap-3 items-center'>
                    <Link to={``} className={`${location?.pathname == '/typeface' ? '' : ''} opacity-60 `}>case studies</Link>
                    <img src={lockWhite} className='w-full max-w-[12px] md:max-w-[15px]' alt="" />
                </div>
                <Link className='' to={`/`}>
                    <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} src={hover ? logoYellow : logoWhite} className='w-[23px]' alt="" />
                </Link>
                <div className='w-[40%] lg:w-[20%] flex justify-end gap-4'>
                    <Link to={`/profile`} className={`${location?.pathname == '/profile' ? 'text-primary' : ''} hover:text-primary`}>profile</Link>
                    <Link to={``} onClick={handleLinkButtonClick} className={`${location?.pathname == '/typeface' ? '' : ''} hover:text-primary`}>portfolio</Link>
                </div>
            </div>
            <div className={`block md:hidden fixed z-[120] right-0 bg-secondary rounded-l-[30px] transition-all duration-300 ease-in-out ${mobileNavbarToggle ? 'w-[85%] h-screen' : 'w-0 h-0'}`}>
                <div className='w-[85%]  mt-[200px] flex flex-col justify-center items-center gap-8 text-white fixed font-clashdisplaysemibold'>
                    <Link to={`/`} onClick={() => setMobileNavbarToogle(false)} className='hover:text-primary text-[30px]'>home</Link>
                    <Link to={`/profile`} onClick={() => setMobileNavbarToogle(false)} className='hover:text-primary text-[30px]'>profile</Link>
                    <p onClick={() => {
                        handleLinkButtonClick();
                        setMobileNavbarToogle(false);
                    }} className='hover:text-primary text-[30px]'>portfolio</p>
                    <span className='w-[80%] opacity-60 text-[30px] flex justify-center md:justify-start gap-2 md:gap-3 items-center'>
                        <p>
                            case studies
                        </p>
                        <img src={lockWhite} className='w-full max-w-[15px]' alt="" />
                    </span>
                </div>
            </div>
            <div className={`${mobileNavbarToggle ? 'block' : 'hidden'} bg-black fixed opacity-40 inset-0 z-[110]`} onClick={() => setMobileNavbarToogle(false)}>
            </div>
        </>
    )
}

export default Navbar
