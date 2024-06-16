import React from 'react';
import {
  Text,
  Image,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
const Pagination = ({page, decrement, increment}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
      }}>
      {page === 1 ? null : (
        <TouchableOpacity onPress={decrement}>
          <Icon name={'skip-previous-circle'} size={30} />
        </TouchableOpacity>
      )}
      <Text style={{alignSelf: 'center'}}>Page {page}</Text>
      <TouchableOpacity onPress={increment}>
        <Icon name={'skip-next-circle'} size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 25,
    margin: 10,
    backgroundColor: colors.secondary,
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    resizeMode: 'stretch',
    margin: 15,
  },
  inner_container: {
    margin: 10,
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 15,
  },
  genre_container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  genre: {
    marginRight: 5,
    color: 'red',
    fontSize: 12,
    fontStyle: 'italic',
  },
  type: {
    color: 'white',
    marginVertical: 10,
  },
  imdbID: {
    color: 'white',
    marginVertical: 5,
  },
  brief: {
    color: 'white',
    // fontStyle: 'italic',
  },
});
export default Pagination;
