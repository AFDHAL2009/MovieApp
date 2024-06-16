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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayList, setDisplayList] = useState([]);
  const handleMovieDetail = data1 => {
    navigation.navigate('MovieDetails', {data1});
  };

  const renderMovieList = ({item}) => (
    <MovieCard movies={item} onSelect={() => handleMovieDetail(item)} />
  );

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=peace&type=movie`,
      );
      setData(responseData.Search);
      setDisplayList(responseData.Search);
      setLoading(false);
    } catch (err) {
      setError(err.Error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const search = async searchValue => {
    setLoading(true);
    setError(null);
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&s=${searchValue}&type=movie`,
      );
      const {Search, Response} = responseData;
      if (Search !== undefined) {
        setData(responseData.Search);
        setDisplayList(responseData.Search);
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

  const reset = async searchValue => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Movie application</Text>
      <SearchBar search={search} reset={reset} />
      {loading && !error ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={displayList}
          renderItem={renderMovieList}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
