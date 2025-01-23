import { useState } from "react";


const Navbar = () => {
  // State to toggle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 // Toggle function for the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#1f242d] text-white min-w-full">
       {/* Header */}
       <header className="fixed top-0 left-0 min-w-full py-5 px-10 flex justify-between items-center z-50 bg-transparent max-sm:pr-[20%]">
       <a href="#" className="text-2xl font-bold text-white animate-slideRight">
         Portfolio.
       </a>
 
       {/* Hamburger Menu for Mobile and Tablet */}
       <div className="sm:hidden flex items-center">
         <button
           onClick={toggleMenu}
           className="text-white focus:outline-none"
         >
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             className="w-6 h-6"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M4 6h16M4 12h16M4 18h16"
             />
           </svg>
         </button>
       </div>
 
       {/* Navbar Links */}
       <nav className="hidden sm:flex space-x-6">
         <a
           href="#"
           className="text-white text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           Home
         </a>
         <a
           href="#aboutMe"
           className="text-white text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           About Me
         </a>
         <a
           href="#portfolio"
           className="text-white text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           Portfolio
         </a>
         <a
           href="#skills"
           className="text-white text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           Skills
         </a>
         <a
           href="#contactMe"
           className="text-white text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           Contact Me
         </a>
       </nav>
 
       {/* Dropdown Menu for Mobile Devices */}
       <div
         className={`${
           isMenuOpen ? 'block' : 'hidden'
         } sm:hidden md:hidden lg:hidden absolute left-0 top-16 w-full bg-gray-800 bg-opacity-80 text-white space-y-4 px-10 py-5`}
       >
         <a
           href="#"
           className="block text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           Home
         </a>
         <a
           href="#aboutMe"
           className="block text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           About Me
         </a>
         <a
           href="#skills"
           className="block text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           Skills
         </a>
         <a
           href="#portfolio"
           className="block text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           Portfolio
         </a>
         <a
           href="#contactMe"
           className="block text-lg font-medium hover:text-[#0ef] transition animate-slideTop"
         >
           Contact Me
         </a>
       </div>
     </header>
    </div>
  );
};

export default Navbar;


