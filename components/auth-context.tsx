"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

export type UserRole = "admin" | "investigator" | "evidence_custodian" | "viewer"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  agency: string
  badge_number?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  updateUser: (user: User) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // TODO: Implement actual authentication
      const mockUser: User = {
        id: "1",
        email,
        name: "Officer Name",
        role: "investigator",
        agency: "Law Enforcement Agency",
      }
      setUser(mockUser)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const updateUser = useCallback((updatedUser: User) => {
    setUser(updatedUser)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
