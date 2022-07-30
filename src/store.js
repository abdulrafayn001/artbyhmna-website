import create from 'zustand'

export const useStore = create((set) => ({
  sliderImages: [],
  feedbacks: [],
  products: [],
  categories: [],
  setSliderImages: (sliderImages) => set((state) => ( {sliderImages: [...state.sliderImages, ...sliderImages ]})),
  setFeedbacks: (feedbacks) => set((state) => ( {feedbacks: [...state.feedbacks, ...feedbacks ]})),
  setProducts: (products) => set((state) => ( {products: [...state.products, ...products ]})),
  setCategories: (categories) => set((state) => ( {categories: [...state.categories, ...categories ]})),
}))
