import {StyleSheet, Platform, StatusBar} from 'react-native';
import colors from '../../utils/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  title: {
    alignSelf: 'center',
    margin: '3%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
