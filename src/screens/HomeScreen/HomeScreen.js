import React from 'react';
import {StyleSheet, View} from 'react-native';
import Container from '../../components/UI/Container/Container';
import GamesList from '../../components/GamesList/GamesList';

const HomeScreen = props => {
  return (
    <View style={styles.page}>
      <Container style={styles.marginTopContainer}>
        <GamesList navigate={props.navigation.navigate} />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    zIndex: 1,
  },
  marginTopContainer: {
    marginTop: 60,
  },
});

export default HomeScreen;
