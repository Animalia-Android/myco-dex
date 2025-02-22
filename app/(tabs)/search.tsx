import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function SearchScreen() {
  // Dummy data for search results (replace with real data later)
  const fungiList = [
    { id: '1', name: 'Amanita Muscaria' },
    { id: '2', name: 'Psilocybe Cubensis' },
    { id: '3', name: 'Pleurotus Ostreatus' },
    { id: '4', name: 'Lentinula Edodes' },
    { id: '5', name: 'Clitocybe Nuda' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFungi, setFilteredFungi] = useState(fungiList);

  // Function to filter the fungi list based on search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredFungi(fungiList); // Show all if search is empty
    } else {
      const filteredData = fungiList.filter((fungus) =>
        fungus.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFungi(filteredData);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Fungi</Text>

      {/* Search bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Type to search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Display filtered list */}
      <FlatList
        data={filteredFungi}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
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
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
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
