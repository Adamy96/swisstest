// @ts-nocheck
import React, { createContext, useState } from 'react'

interface IMealsState {
  searchText: string,
  foods: IFood[],
  addedFoods: IAddedFood[]
}

interface IContextState {
  mealsState: IMealsState
  setMealsState: React.Dispatch<React.SetStateAction<any>>
}

const initialState: IMealsState = {
  searchText: '',
  foods: [],
  addedFoods: []
}

export const MealsContext = createContext<IContextState>(null)

const MealsContextProvider = ({ children }: any) => {
  const [mealsState, setMealsState] = useState(initialState)
  return (
    <MealsContext.Provider
      value={{
        mealsState,
        setMealsState
      }}
    >
      {children}
    </MealsContext.Provider>
  )
}

export default MealsContextProvider