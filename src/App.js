import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
          <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
          </ThemeProvider>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App