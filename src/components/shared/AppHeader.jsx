import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import logoLight from '../../images/logo-light.svg';
import logoDark from '../../images/logo-dark.svg';
import { motion } from 'framer-motion';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		setShowMenu(!showMenu);
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">

				{/* Header menu links and logo */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link to="/" className="flex items-center gap-2">
							{activeTheme === 'dark' ? (
								<img src={logoDark} className="w-10 h-10" alt="Dark Logo" />
							) : (
								<img src={logoLight} className="w-10 h-10" alt="Light Logo" />
							)}
							<span className="text-2xl font-semibold text-ternary-dark dark:text-ternary-light">
								Pooja
							</span>
						</Link>
					</div>

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							{showMenu ? (
								<FiX className="text-3xl text-secondary-dark dark:text-ternary-light" />
							) : (
								<FiMenu className="text-3xl text-secondary-dark dark:text-ternary-light" />
							)}
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Theme switcher large screen */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default AppHeader;
