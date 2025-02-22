import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CollectionScreen() {
  // Dummy data for the collection (replace with real data later)
  const [collection, setCollection] = useState([
    { id: '1', name: 'Amanita Muscaria' },
    { id: '2', name: 'Psilocybe Cubensis' },
    { id: '3', name: 'Pleurotus Ostreatus' },
  ]);

  const handleItemPress = (item: { id: string; name: string }) => {
    // Navigate to a detailed view of the fungi (for now, just log it)
    console.log('Selected fungi:', item);
    // You could use `navigation.push('FungiDetail', { item })` if you have a detailed screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Collection</Text>

      {/* Display the list of saved fungi */}
      <FlatList
        data={collection}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleItemPress(item)}
            style={styles.item}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});
