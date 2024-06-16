import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';
import styles from './home.style';
import {baseUrl, apiKey} from '../../utils/utils';
const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [moviesList, setMoviesList] = useState([]);

  //Function to handle navigation to second screen(MovieDetails)
  const handleMovieDetail = id => {
    navigation.navigate('MovieDetails', {id});
  };

  //Function to render flatlist item
  const renderMovieList = ({item}) => (
    <MovieCard movies={item} onSelect={() => handleMovieDetail(item.imdbID)} />
  );

  //Function to fetch data movie from api
  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=peace&type=movie`,
      );

      setMoviesList(responseData.Search);
      setLoading(false);
    } catch (err) {
      setError(err.Error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  // function to handle search movie by title criteria
  const search = async title => {
    setLoading(true);
    setError(null);
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=${title}&type=movie`,
      );
      const {Search, Response} = responseData;
      if (Search !== undefined) {
        setMoviesList(responseData.Search);
        console.log(JSON.stringify(responseData.Search));
      }
      if (Response !== undefined) {
        setError(responseData.Error);
        console.log(JSON.stringify(responseData.Error));
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  //Function to reset movie list
  const resetList = async title => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Movie application</Text>
      <SearchBar search={search} reset={resetList} />
      {loading && !error ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={moviesList}
          renderItem={renderMovieList}
          keyExtractor={item => item.imdbID}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
