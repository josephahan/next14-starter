"use client";

import { usePathname } from 'next/navigation';
import styles from './navLink.module.css';
import Link from 'next/link';

//below is the Navlink component that will be used in the Links component. This allows us to apply the active class to the active link.

//the item prop is the link object from the links array. the item prop is passed to the Navlink component from the Links component.
const Navlink = ({item}) => {

    const pathname = usePathname();
    //console.log('Item Path:', item.path); - this was used to test the path of the item object

    return (
        <Link 
        href = {item.path} 
        className={`${styles.container} ${pathname === item.path && styles.active }`}>
        {item.title}
        </Link>
    );
    }

export default Navlink;