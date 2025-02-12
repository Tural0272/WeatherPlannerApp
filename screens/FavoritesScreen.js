import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import useWeatherStore from '../store/useWeatherStore';

const FavoritesScreen = ({ navigation }) => {
  const { favoriteCities, removeFavorite } = useWeatherStore();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Cities</Text>

      {favoriteCities.length === 0 ? (
        <Text style={styles.emptyText}>No favorite cities added</Text>
      ) : (
        <FlatList
          data={favoriteCities}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.cityContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home', { city: item })}>
                <Text style={styles.city}>{item}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeFavorite(item)} style={styles.removeButton}>
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  emptyText: { fontSize: 18, textAlign: 'center', marginTop: 20 },
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 3,
  },
  city: { fontSize: 20 },
  removeButton: { backgroundColor: '#ff5252', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default FavoritesScreen;
