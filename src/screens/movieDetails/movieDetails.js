import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MovieDetail from '../../components/MovieDetail';
import styles from './movieDetails.style';
import {baseUrl, apiKey} from '../../utils/utils';
import axios from 'axios';
const MovieDetails = ({route, navigation}) => {
  /* 2. Get the param */
  const {data1} = route.params;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchByImdbID = async () => {
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&i=${data1.imdbID}&type=movie`,
      );
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.Error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchByImdbID();
  }, [data]);
  return (
    <View style={styles.container}>
      {data && <MovieDetail data={data} />}
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default MovieDetails;
