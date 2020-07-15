import React from 'react';
import {StyleSheet, View} from 'react-native';
import Container from '../../components/UI/Container/Container';
import InvoiceList from '../../components/InvoiceList/InvoiceList';

const Invoice = () => {
  return (
    <View style={styles.page}>
      <Container style={styles.marginTopContainer}>
        <InvoiceList />
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
    marginTop: 10,
  },
});

export default Invoice;
