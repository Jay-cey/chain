"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/components/auth-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Shield } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password)
      router.push("/")
    } catch (err) {
      setError("Invalid email or password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">ChainCustody</h1>
          </div>
        </div>

        {/* Login Card */}
        <Card className="border-border shadow-lg">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>Access the evidence management platform</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="officer@agency.gov"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-input border-border"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Sign In
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                This system is for authorized law enforcement use only.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>ChainCustody v1.0 • Evidence Management Platform</p>
        </div>
      </div>
    </div>
  )
}
