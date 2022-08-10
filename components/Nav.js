import Link from "next/link"
import { MdLightMode } from "react-icons/md"
import { HiOutlineMenu } from "react-icons/hi"

const NavLinks = [
    {
        text: 'Games',
        path: '/games'
    },
    {
        text: 'About',
        path: '/about'
    },
    {
        text: 'Contact',
        path: '/contact'
    }
]

const Nav = () => {
    return (
        <nav className="text-black flex flex-row justify-between">
                <div className="pt-2 flex gap-6 items-center sm:flex-row">
                    <span className="text-2xl font-mono font-bold hover:text-fuchsia-700">
                            <Link href='/'>ALEXANDER</Link>
                    </span>
                    <ul className="gap-4 hidden md:flex">
                        {NavLinks.map( (link) => (
                            <li key={link.path} className="text-xl hover:text-fuchsia-700">
                                <Link href={link.path}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                    <HiOutlineMenu className="text-3xl inline md:hidden"/>
                </div>
                <div className="pt-2 flex justify-end items-center gap-4 pr-2">
                    <span className="hover:text-green-500">Connect Wallet</span>
                    <MdLightMode />
                </div>
        </nav>
    )
}

export default Nav

// I'm not certain how the map function works or what the key attribute is