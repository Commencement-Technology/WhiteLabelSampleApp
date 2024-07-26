import React from 'react';
import type { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface Props {
  FLAVOR_COLOR: string;
  FLAVOR_NAME: string;
  HAS_AWESOME_FEATURE: boolean;
}

const App: FunctionComponent<Props> = ({
  FLAVOR_COLOR,
  FLAVOR_NAME,
  HAS_AWESOME_FEATURE,
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: FLAVOR_COLOR }]}>
      <View style={styles.container}>
        <View accessible role="heading">
          <Text style={styles.header}>{FLAVOR_NAME}</Text>
        </View>
        {HAS_AWESOME_FEATURE ? <Text>Awesome</Text> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  safeArea: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default App;
