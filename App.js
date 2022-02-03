import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import uuid from 'react-uuid';
import AddItem from './src/components/AddItem';
import Header from './src/components/Header';
import ListItems from './src/components/ListItems';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Soda'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem />
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
