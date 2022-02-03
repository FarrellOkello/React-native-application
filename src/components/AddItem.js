import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title}) => {
  return (
    <>
      <View>
        <TextInput placeholder="Add project" style={styles.input} />
        <TouchableOpacity style={styles.btn}></TouchableOpacity>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} style={styles.btnText} />
          Add project
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    // color: 'darkslateblue',
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '@c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
