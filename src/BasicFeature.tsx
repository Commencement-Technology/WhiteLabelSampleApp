import React from 'react';
import type { FunctionComponent } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const noop = () => {};

interface Props {}

const BasicFeature: FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Basic feature</Text>
      <Button onPress={noop} title="Click me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  header: {
    color: 'white',
    fontSize: 20,
  },
});

export default BasicFeature;
