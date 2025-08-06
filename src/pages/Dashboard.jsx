import React from 'react'
import Header from '../components/dashboard/Header'
import { useTheme } from '../contexts/ThemeContext'

const Dashboard = () => {
  const { darkMode } = useTheme()
  const themeClasses = darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'

  return (
    <div className={`min-h-screen ${themeClasses} transition-all duration-300`}>
      <Header sidebarOpen={false} setSidebarOpen={() => {}} />
      <div className="p-8">
        
        <h1>Welcome to your dashboard!</h1>
      </div>
    </div>
  )
}

export default Dashboard