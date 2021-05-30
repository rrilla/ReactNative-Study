import React, {createContext, useContext} from 'react'
import type {FC} from 'react'

export type ToggleThemeContextType = {
  toogleTheme: () => void
}
const defaultToggleThemeContext = {
  toogleTheme: () => {},
}
const ToggleThemeContext = createContext<ToggleThemeContextType>(
  defaultToggleThemeContext,
)

type ToggleThemeContextProps = {
  toogleTheme: () => void
}
export const ToggleThemeProvider: FC<ToggleThemeContextProps> = ({
  children,
  toogleTheme,
}) => {
  const value = {
    toogleTheme,
  }
  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  )
}

export const useToggleTheme = () => {
  const {toogleTheme} = useContext(ToggleThemeContext)
  return toogleTheme
}
