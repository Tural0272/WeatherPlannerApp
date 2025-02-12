import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{weather.name}</Text>
      <Text style={styles.temp}>{weather.main.temp}°C</Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
        }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: { alignItems: 'center', padding: 20, borderRadius: 10, backgroundColor: '#ddd' },
  city: { fontSize: 24, fontWeight: 'bold' },
  temp: { fontSize: 32, fontWeight: 'bold', marginVertical: 10 },
  description: { fontSize: 18, fontStyle: 'italic' },
  icon: { width: 50, height: 50, marginTop: 10 },
});

export default WeatherCard;
