import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  SetStateAction,
  ReactNode,
} from 'react'

interface ThemeContextProps {
  children: ReactNode
}

type ThemeContextData = {
  theme: boolean
  setTheme: React.Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext({} as ThemeContextData)

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined'
      ? window.localStorage.theme === 'light'
      : false
  )

  useEffect(() => {
    const rootElement = window.document.documentElement
    const currentTheme = theme

    const prevTheme = currentTheme ? 'dark' : 'light'
    rootElement.classList.remove(prevTheme)

    const nextTheme = currentTheme ? 'light' : 'dark'
    rootElement.classList.add(nextTheme)

    localStorage.setItem('theme', nextTheme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
