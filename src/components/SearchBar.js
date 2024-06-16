import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';
import colors from '../utils/colors';
const SearchBar = props => {
  const [searchValue, setSearchValue] = useState('');

  const callSearch = () => {
    props.search(searchValue);
  };

  const changeSearchValue = text => {
    if (text === '') {
      setSearchValue(text);
      props.reset(text);
    } else {
      setSearchValue(text);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={searchValue}
        onChangeText={text => changeSearchValue(text)}
        placeholder="Search by title."
        style={styles.input}
      />
      <TouchableOpacity onPress={callSearch} style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10%',
  },
  input: {
    borderWidth: 2,
    height: 50,
    borderColor: 'gray',
    width: '90%',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  button: {
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: 'blue',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  buttonText: {
    color: 'white',
  },
});
export default SearchBar;
