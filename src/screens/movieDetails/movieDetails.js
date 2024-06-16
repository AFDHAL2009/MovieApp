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
  /* 1. Get the param */
  const {id} = route.params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Fetch movie  details by id or ImdbID from api  */
  const fetchByImdbID = async () => {
    try {
      const {data: responseData} = await axios.get(
        `${baseUrl}?apikey=${apiKey}&i=${id}&type=movie`,
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
