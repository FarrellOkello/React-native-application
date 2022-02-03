import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItems = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="remove"
          fontSize="20"
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 2,
    borderColor: '#eee  ',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  listItemText: {
    fontSize: 20,
  },
});

export default ListItems;
