import create from 'zustand'

export const useStore = create((set) => ({
  sliderImages: [],
  feedbacks: [],
  setSliderImages: (sliderImages) => set((state) => ( {sliderImages: [...state.sliderImages, ...sliderImages ]})),
  setFeedbacks: (feedbacks) => set((state) => ( {feedbacks: [...state.feedbacks, ...feedbacks ]}))
}))
