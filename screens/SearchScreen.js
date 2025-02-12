import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [city, setCity] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter City Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., New York"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => navigation.navigate('Home', { city })}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
  },
  searchButton: { padding: 10, backgroundColor: '#007BFF', borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default SearchScreen;
