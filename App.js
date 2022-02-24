import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import uuid from 'react-uuid';
import AddItem from './src/components/AddItem';
import Header from './src/components/Header';
import ListItems from './src/components/ListItems';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Bangalo'},
    {id: uuid(), text: 'Condo'},
    {id: uuid(), text: 'Rentals'},
    {id: uuid(), text: 'Mizigo Express'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      alert('Please fill in a text');
    } else {
      setItems(prevItems => {
        return [...prevItems, {id: uuid(), text}];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItems item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
