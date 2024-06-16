import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLanguage from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';
const MovieDetail = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.left_container}>
          <Text style={styles.name}>{data.Title}</Text>
          <Text style={styles.director}>
            Director <Icon name="video-vintage" size={16} />
            {`\n${data.Director}`}
          </Text>
          <View styles={styles.genre_container}>
            <Text style={styles.genre_title}>
              Genres <Icon name="play-box-outline" size={16} />
              {data.Genre}
            </Text>
          </View>
          <View style={styles.language_container}>
            <Text style={styles.genre_title}>
              Language{' '}
              <IconLanguage name="language" size={16} style={{marginTop: 10}} />
              {data.Language}
            </Text>
          </View>
        </View>
        <Image source={{uri: data.Poster}} style={styles.image} />
      </View>
      <Text style={styles.brief}> {data.Plot}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginTop: Platform.OS === 'ios' ? 100 : 60,
    backgroundColor: colors.secondary,
    padding: 15,
    flex: 1,
  },
  inner_container: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  left_container: {
    marginVertical: 10,
    marginRight: 5,
    marginLeft: 30,
    justifyContent: 'space-between',
    width: 150,
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 250,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  director: {
    color: colors.primary,
    fontSize: 16,
    marginVertical: 15,
  },
  genre_container: {
    flexDirection: 'row',
  },
  language_container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  genre_title: {
    fontSize: 16,
    color: colors.primary,
  },
  genre: {
    marginRight: 10,
    color: colors.primary,
    fontSize: 16,
  },
  rate: {
    color: colors.primary,
    marginVertical: 10,
  },
  brief: {
    color: 'black',
    padding: 35,
    textAlign: 'left',
  },
});

export default MovieDetail;
