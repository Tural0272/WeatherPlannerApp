import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import useWeatherStore from '../store/useWeatherStore';

const API_KEY = 'e47a830b009bbe47ee38382c51bb761c';

const HomeScreen = ({ route, navigation }) => {
  const { city = 'Warsaw' } = route.params || {};
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { favoriteCities, addFavorite, removeFavorite, unit, loadFavorites } = useWeatherStore();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
        );
        setWeather(response.data);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    loadFavorites(); 
  }, [city, unit]);

  const isFavorite = favoriteCities.includes(city);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/weather_background.png')} style={styles.backgroundImage} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          <Text style={styles.city}>{city}</Text>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png` }}
            style={styles.weatherIcon}
          />
          <Text style={styles.temp}>{weather?.main?.temp}°C</Text>
          <Text style={styles.description}>{weather?.weather[0]?.description}</Text>

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => (isFavorite ? removeFavorite(city) : addFavorite(city))}
          >
            <Text style={styles.buttonText}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('Search')}>
            <Text style={styles.buttonText}>Search City</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.favoritesButton} onPress={() => navigation.navigate('Favorites')}>
            <Text style={styles.buttonText}>Favorites</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  backgroundImage: { position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover' },
  city: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  temp: { fontSize: 36, fontWeight: 'bold', marginVertical: 10, color: '#ff5722' },
  description: { fontSize: 20, fontStyle: 'italic', color: '#555' },
  weatherIcon: { width: 120, height: 120, marginVertical: 10 },
  favoriteButton: { marginTop: 20, padding: 12, backgroundColor: '#007BFF', borderRadius: 10, alignItems: 'center' },
  searchButton: { marginTop: 10, padding: 12, backgroundColor: '#28a745', borderRadius: 10, alignItems: 'center' },
  favoritesButton: { marginTop: 10, padding: 12, backgroundColor: '#FFC107', borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  errorText: { color: 'red', fontSize: 18 },
});

export default HomeScreen;
