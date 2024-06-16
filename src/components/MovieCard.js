import React from 'react';
import {
  Text,
  Image,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';
const MovieCard = ({movies, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: movies.Poster}} />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{movies.Title}</Text>
          <Text style={styles.imdbID}>ImdbID : {movies.imdbID}</Text>
          <Text style={styles.type}>Type : {movies.Type}</Text>
          <Text numberOfLines={2} style={styles.brief}>
            Year : {movies.Year}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
export default MovieCard;
