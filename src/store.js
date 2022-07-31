import create from 'zustand'

export const useStore = create((set) => ({
  sliderImages: [],
  feedbacks: [],
  products: [],
  selectedPtoducts: [],
  categories: [],
  cart: [],
  setSliderImages: (sliderImages) => set((state) => ( {sliderImages: [...state.sliderImages, ...sliderImages ]})),
  setFeedbacks: (feedbacks) => set((state) => ( {feedbacks: [...state.feedbacks, ...feedbacks ]})),
  setProducts: (products) => set((state) => ( {products: [...state.products, ...products ]})),
  setCategories: (categories) => set((state) => ( {categories: [...state.categories, ...categories ]})),
  setSelectedPtoducts: (selectedPtoducts) => set((state) => ( {selectedPtoducts: [ ...selectedPtoducts ]})),
  setCart: (cart) => set((state) => ( {cart: [ ...state.cart, ...cart ]})),
}))
