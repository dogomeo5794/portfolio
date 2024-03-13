"use client"

import React, { use, useState } from 'react'
import { ThemeContext } from './ThemeContext'

export const defaultTheme = "dark"

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState<string>(defaultTheme)
  const handleToggleTheme = (value: string) => {
    setTheme(value)
  }
  const ctxValue = {
    theme: theme,
    toggleTheme: handleToggleTheme
  }
  return (
    <ThemeContext.Provider value={ctxValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider