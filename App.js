import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import HomePage from './components/book'
const styles = StyleSheet.create({
  welcome: {
    textAlign: 'center',
    marginBottom: "50px",
    fontSize: '26px'
  },
  logo: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    marginBottom: 50,
  },
  button: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'rgba(235, 168, 12, 0.911)',
    width: '100%',
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 28,
  },
});

const App = () => {
  const gotoBooksPage = () => {
  };

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <View>
      <Text style={styles.welcome}>
        <Text>{`Welcome to BOOKS APP\nRead here to get\nKnowldge`}</Text>
      </Text>

      <HomePage />
    </View>
  )
};

export default App;