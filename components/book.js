import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Share,
} from 'react-native';


const HomePage = () => {

  const onBookTwo = async () => {
    {
      const result = await Share.share({
        involve:
          'Class 7th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-7th.pdf',
      });
    }
  };



  const onBookOne = async () => {
    {
      const result = await Share.share({
        involve:
          'Class 6th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-6th.pdf',
      });
    }
  };


  return (
    <View style={styles.main}>
      <Text style={styles.heading}>BOOKS</Text>
      <Text>{'\n'} </Text>

      <Text style={styles.text}>Computer Education Class 6th</Text>
      <Text style={styles.description}>
        Class 6th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-6th.pdf">
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onBookOne}
        title="Share"
        color="orange"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>


      <Text style={styles.txt}>Computer Education Class 7th</Text>
      <Text style={styles.description}>
        Class 7th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-7th.pdf">
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onBookTwo}
        title="Share"
        color="orange"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>


    </View>
  );
};

export default HomePage;


const styles = StyleSheet.create({

  txt: {
    fontSize: 28,
  },


  main: {
    flex: 1,
    backgroundColor: 'rgba(155, 199, 120, 0.356)',
  },


  heading: {
    textAlign: 'center',
    marginBottom: '2px',
    fontSize: 28,
    fontWeight: 'bold',
  },


});