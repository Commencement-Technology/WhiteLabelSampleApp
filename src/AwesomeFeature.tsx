import React, { useState } from 'react';
import type { FunctionComponent } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

interface Props {}

const AwesomeFeature: FunctionComponent<Props> = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Awesome feature</Text>
      <View style={styles.toggleContainer}>
        <Switch
          accessible
          accessibilityState={{ checked: enabled }}
          ios_backgroundColor="gray"
          role="slider"
          onValueChange={setEnabled}
          value={enabled}
        />
        <Text style={styles.toggleLabel}>Toggle me</Text>
      </View>
      <View style={styles.summaryContainer}>
        {enabled && <Text style={styles.summary}>You are awesome!</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 20,
  },
  header: {
    color: 'white',
    fontSize: 24,
  },
  summary: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  summaryContainer: {
    height: 50,
  },
  toggleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
  },
  toggleLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AwesomeFeature;
