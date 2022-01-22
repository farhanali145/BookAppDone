import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  Button,
  Share,
  KeyboardAvoidingView,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginBottom: '0px',
    fontSize: 26,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(155, 199, 120, 0.356)',
  },

  text: {
    fontSize: 26,
  },
});
const Dashboard = () => {
  const onShare6 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 6th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-6th.pdf',
      });
    }
  };

  const onShare7 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 7th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-7th.pdf',
      });
    }
  };

  const onShare8 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 8th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-8th.pdf',
      });
    }
  };

  const onShare9 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 9th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-9th.pdf',
      });
    }
  };

  const onShare10 = async () => {
    {
      const result = await Share.share({
        message:
          'Class 10th Computer book Punjab Curriculum and Textbook Board https://co.vid19.pk/media/books/computer-education-class-10th.pdf',
      });
    }
  };

  const logout = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BOOKS</Text>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjspPtUIqQmZyzIoz0yzFIjQ8sR_6Edv7Aw&usqp=CAU' }}
        style={{ width: 320, height: 450 }}
      />

      <Text style={styles.text}>Computer Education Class 6th</Text>
      <Text style={styles.description}>
        Class 6th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-6th.pdf">
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare6}
        title="Share"
        color="orange"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F903%2F111%2Fpng-transparent-book-cover-e-book-bookmark-novel-book-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dbook%2Bcover&tbnid=fxQBKKxislhhBM&vet=12ahUKEwiQktyWv771AhUhgXMKHQ6yC9UQMygGegUIARDDAQ..i&docid=M3QV-B_ny8bzrM&w=360&h=422&itg=1&q=book%20thumbnail%20image&ved=2ahUKEwiQktyWv771AhUhgXMKHQ6yC9UQMygGegUIARDDAQ' }}
        style={{ width: 320, height: 450 }}
      />

      <Text style={styles.text}>Computer Education Class 7th</Text>
      <Text style={styles.description}>
        Class 7th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-7th.pdf">
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare7}
        title="Share"
        color="orange"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://books-dj2.pages.dev/thumbnails/8th.jpg' }}
        style={{ width: 320, height: 450 }}
      />

      <Text style={styles.text}>Computer Education Class 8th</Text>
      <Text style={styles.description}>
        Class 8th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-8th.pdf">
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare8}
        title="Share"
        color="orange"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://books-dj2.pages.dev/thumbnails/9th.jpg' }}
        style={{ width: 320, height: 450 }}
      />

      <Text style={styles.text}>Computer Education Class 9th</Text>
      <Text style={styles.description}>
        Class 9th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-9th.pdf">
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare9}
        title="Share"
        color="orange"
        fontSize="26"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
      <Image
        source={{ uri: 'https://books-dj2.pages.dev/thumbnails/10th.jpg' }}
        style={{ width: 320, height: 450 }}
      />

      <Text style={styles.text}>Computer Education Class 10th</Text>
      <Text style={styles.description}>
        Class 10th Computer book Punjab Curriculum and Textbook Board
      </Text>

      <a href="https://co.vid19.pk/media/books/computer-education-class-10th.pdf">
        <h2>Read OR Download</h2>
      </a>

      <Button
        onPress={onShare10}
        title="Share"
        color="orange"
        fontSize="26"
        fontWeight="bold"></Button>
      <Text>{'\n'} </Text>
    </View>
  );
};

export default Dashboard;
