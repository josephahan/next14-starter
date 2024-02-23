//this is where the links array will be created and exported to the Navbar component
import Navlink from './navLink';
import styles from './Links.module.css';

const Links = () => {

const links = [
    {
        title: "Homepage",
        path: '/',
    },
    {
        title: "About",
        path: '/about',
    },
    {
        title: "Contact",
        path: '/contact',
    },
    {
        title: "Blog",
        path: '/blog',
    },
];


//TEMPORARY
const session = true;
const isAdmin = true;

{/* map through the links array and create a Link component for each link */}
return (
    <div className={styles.links}>
        {links.map((link=>(
            <Navlink item={link} key = {link.title}/>
            
            //<Link href={link.path} key = {link.title}>{link.title}</Link>
        )))}
        
        {//below is an if statement that will be used to check if the user is logged in and is an admin. if the user is logged in and is an admin, the admin link will be displayed. if the user is not logged in, the login link will be displayed.}
            session ? (
                <> {/*the fragment is used to wrap the admin link and the logout button.*/}
                {isAdmin && <Navlink item={{title: "Admin", path: '/admin'}}/>}
                <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <Navlink item={{title: "Login", path: '/login'}}/>
            )
        }
    </div>
)
}

export default Links;