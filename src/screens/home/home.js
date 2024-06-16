import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';
import styles from './home.style';
import {baseUrl, apiKey} from '../../utils/utils';
import Pagination from '../../components/Pagination';
import colors from '../../utils/colors';
const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPagination, setIsPagination] = useState(true);
  //Function to handle navigation to second screen(MovieDetails)
  const handleMovieDetail = id => {
    navigation.navigate('MovieDetails', {id});
  };

  //Function to render flatlist item
  const renderMovieList = ({item}) => (
    <MovieCard movies={item} onSelect={() => handleMovieDetail(item.imdbID)} />
  );

  //Function to fetch data movie from api
  const initialFetchData = async page => {
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=peace&&page=${page}`,
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
    setIsPagination(false);
    setError(null);
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=${title}&type=movie`,
      );
      const {Search, Response} = responseData;
      if (Search !== undefined) {
        setCurrentPage(1);
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
    initialFetchData();
    setIsPagination(true);
  };

  useEffect(() => {
    initialFetchData(currentPage);
  }, []);
  //Increment page by button
  const pageIncrement = async () => {
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=peace&&page=${currentPage + 1}`,
      );

      setMoviesList(responseData.Search);
      let count = currentPage + 1;
      setCurrentPage(count);
      setLoading(false);
    } catch (err) {
      setError(err.Error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  //Decrement page by button
  const pageDecrement = async () => {
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=peace&&page=${currentPage - 1}`,
      );
      setMoviesList(responseData.Search);
      let count = currentPage - 1;
      setCurrentPage(count);
      setLoading(false);
    } catch (err) {
      setError(err.Error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: 50, height: 50, alignSelf: 'center'}}
      />
      <Text style={styles.title}>Movie app</Text>
      <SearchBar search={search} reset={resetList} />
      {loading && !error ? (
        <ActivityIndicator size="large" color={colors.secondary} />
      ) : error ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{error}</Text>
        </View>
      ) : (
        <View style={{flex: 0.98}}>
          <FlatList
            data={moviesList}
            renderItem={renderMovieList}
            keyExtractor={item => item.imdbID}
          />
          {isPagination && (
            <Pagination
              page={currentPage}
              increment={() => pageIncrement()}
              decrement={() => pageDecrement()}
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
