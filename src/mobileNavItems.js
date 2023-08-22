import { GoHome } from 'react-icons/go';
import { RiBook2Line, RiContactsLine } from 'react-icons/ri';
import { AiOutlineShop } from 'react-icons/ai';
import { FaHandsHoldingCircle } from 'react-icons/fa6';
import { TiBook } from 'react-icons/ti';
import { TbNotebook } from 'react-icons/tb';
import { MdOutlineWifiFind } from 'react-icons/md';
import { PiTruckDuotone } from 'react-icons/pi';
import { CiHeart } from 'react-icons/ci';
import { LiaFastForwardSolid } from 'react-icons/lia'

const mobileNavItems = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    icon: <GoHome />,
  },
  {
    id: 2,
    name: 'Our story',
    path: '/our-story',
    icon: <RiBook2Line />,
  },
  {
    id: 3,
    name: 'Shop',
    path: '/shop',
    icon: <AiOutlineShop />,
  },
  {
    id: 4,
    name: 'Bathroom Care',
    path: '/bathroom-care',
    icon: <FaHandsHoldingCircle />,
  },
  {
    id: 5,
    name: 'Guide',
    path: '/guide',
    icon: <TiBook />,
  },
  {
    id: 6,
    name: 'Contact',
    path: '/contact',
    icon: <RiContactsLine />,
  },
];

const mobileNavItems2 = [
  {
    id: 7,
    name: 'Request a Catalogue',
    path: '/request-catalogue',
    icon: <TbNotebook />,
  },
  {
    id: 8,
    name: 'Find Our Store',
    path: '/contact',
    icon: <MdOutlineWifiFind />,
  },
  {
    id: 9,
    name: 'Track Your Order',
    path: '/orders',
    icon: <PiTruckDuotone />,
  },
  {
    id: 10,
    name: 'Wish List',
    path: '/customer',
    icon: <CiHeart />,
  },
  {
    id: 11,
    name: 'Login / Register',
    path: '/auth/login',
    icon: <LiaFastForwardSolid />
  },
];

export { mobileNavItems, mobileNavItems2 };
