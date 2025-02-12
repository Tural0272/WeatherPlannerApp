import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useWeatherStore = create((set, get) => ({
  favoriteCities: [],
  unit: 'metric',

  loadFavorites: async () => {
    const savedFavorites = await AsyncStorage.getItem('favoriteCities');
    if (savedFavorites) {
      set({ favoriteCities: JSON.parse(savedFavorites) });
    }
  },

  addFavorite: async (city) => {
    const newFavorites = [...get().favoriteCities, city];
    await AsyncStorage.setItem('favoriteCities', JSON.stringify(newFavorites));
    set({ favoriteCities: newFavorites });
  },

  removeFavorite: async (city) => {
    const newFavorites = get().favoriteCities.filter((c) => c !== city);
    await AsyncStorage.setItem('favoriteCities', JSON.stringify(newFavorites));
    set({ favoriteCities: newFavorites });
  },

  setUnit: (unit) => set({ unit }),
}));

export default useWeatherStore;
