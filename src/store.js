import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      sliderImages: [],
      feedbacks: [],
      products: [],
      selectedPtoducts: [],
      categories: [],
      cart: [],
      setSliderImages: (sliderImages) => set((state) => ( {sliderImages: [ ...sliderImages ]})),
      setFeedbacks: (feedbacks) => set((state) => ( {feedbacks: [ ...feedbacks ]})),
      setProducts: (products) => set((state) => ( {products: [ ...products ]})),
      setCategories: (categories) => set((state) => ( {categories: [ ...categories ]})),
      setSelectedPtoducts: (selectedPtoducts) => set((state) => ( {selectedPtoducts: [ ...selectedPtoducts ]})),
      setCart: (cart) => set((state) => ( {cart: [ ...state.cart, ...cart ]})),
    }),{
      name: 'artbyhmna'
    }
  )
)
