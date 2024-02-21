//this is where the links array will be created and exported to the Navbar component
import Link from 'next/link';

const Links = () => {

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

return (
    <div>
        {/* map through the links array and create a Link component for each link */}
        {links.map((link=>(
            <Link href={link.path} key = {link.title}>{link.title}</Link>
        )))}
    </div>
)
}

export default Links;