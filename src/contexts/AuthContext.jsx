import React, { useEffect, useState, createContext, useContext } from 'react'

const AuthContext = createContext(undefined)

const DEMO_USERS = [
  {
    username: 'admin',
    password: 'admin123',
    name: 'Admin User',
    email: 'admin@insightassist.com',
    department: 'administration',
    role: 'Admin',
  },
]

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('insightAssistUser')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (e) {
        localStorage.removeItem('insightAssistUser')
      }
    }
  }, [])

  const login = async (username, password) => {
    setError(null)

    const foundUser = DEMO_USERS.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password,
    )
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem(
        'insightAssistUser',
        JSON.stringify(userWithoutPassword),
      )
      return true
    } else {
      setError('Invalid username or password')
      return false
    }
  }

  
  const signup = async (username, password, name, email, department, role) => {
    setError(null)
    
    
    if (DEMO_USERS.some(
      (u) => u.username.toLowerCase() === username.toLowerCase(),
    )) {
      setError('Username already exists')
      return false
    }
    
    
    if (DEMO_USERS.some(
      (u) => u.email.toLowerCase() === email.toLowerCase(),
    )) {
      setError('Email already in use')
      return false
    }

    
    const newUser = {
      username,
      name,
      email,
      department,
      role: role || 'User', 
    }

    
    setUser(newUser)
    localStorage.setItem('insightAssistUser', JSON.stringify(newUser))
   
    
    DEMO_USERS.push({
      username,
      password,
      name,
      email,
      department,
      role: role || 'User',
    })

    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}