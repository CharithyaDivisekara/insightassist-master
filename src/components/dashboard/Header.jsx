import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import {
  MenuIcon,
  BellIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  SearchIcon,
} from 'lucide-react'

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()
  return (
      <header className="bg-white dark:bg-gray-800 shadow-sm z-10 transition-colors duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
       <div className="flex items-center justify-between h-16">
         <div className="flex items-center">
           <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
                 className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
          >
             <span className="sr-only">Open sidebar</span>
                <MenuIcon size={24} />
                 </button>
             <div className="lg:hidden ml-2 text-lg font-semibold text-gray-800 dark:text-white">
                Insight Assist
           </div>

       <div className="hidden md:block ml-4 lg:ml-6">
  <div className="relative w-64">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <SearchIcon size={18} className="text-gray-400" />
              </div>
              <input
                 type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
               />
             </div>
           </div>
         </div>
         <div className="flex items-center space-x-3">

           <button
             onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
             {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
           </button>

           <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 relative">
            <BellIcon size={20} />
             <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-gray-800"></span>
           </button>

           <div className="relative ml-3">
             <div className="flex items-center">
               <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-1 pr-3">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                   <UserIcon size={18} />
                 </div>
                 <div className="ml-2">
                   <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                     {user?.name || 'User'}
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
  </header>
)
}
export default Header