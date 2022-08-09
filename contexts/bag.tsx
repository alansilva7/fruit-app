import React from 'react';

interface IProduct {
  _id: string
  price: number
  name: string
}

interface BagContextData {
  bag: IProduct[]
  saveInBag: (product: IProduct) => void
  updateInBag: (id: string, product: IProduct) => void
  removeInBag: (id: string) => void
  findInBag: (id: string) => IProduct
}

const BagContext = React.createContext<BagContextData>({} as BagContextData)

export const BagProvider: React.FC<any> = ({ children }) => {
  const [bag, setBag] = React.useState<IProduct[]>([])

  React.useEffect(() => {
    console.log({ bag });
    
  } ,[bag])

  function saveInBag(product: IProduct) {
    setBag(items => [...items, product])
  }

  function updateInBag(id: string, update: Partial<IProduct>) {
    console.log({ update });
    
    setBag(items => items.map(item => item._id === id ? { ...item, ...update } : item))
  }

  function removeInBag(id: string) {
    setBag(items => items.filter(item => item._id !== id))
  }

  const findInBag = React.useCallback((id: string) => {
    return bag.find(item => item._id === id)
  }, [bag])

  return (
    <BagContext.Provider value={{ 
      bag,
      saveInBag,
      updateInBag,
      removeInBag,
      findInBag
    }} >
      {children}
    </BagContext.Provider>
  )
}

export default BagContext