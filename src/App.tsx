import React, { Suspense } from 'react';
import type { FunctionComponent } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const AwesomeFeature = React.lazy(
  () => import(/* webpackChunkName: "awesome" */ './AwesomeFeature'),
);
const BasicFeature = React.lazy(
  () => import(/* webpackChunkName: "basic" */ './BasicFeature'),
);

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
        <Suspense fallback={<Text style={styles.loader}>Loading...</Text>}>
          {HAS_AWESOME_FEATURE ? <AwesomeFeature /> : <BasicFeature />}
        </Suspense>
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
  loader: {
    color: 'white',
    fontSize: 18,
  },
  safeArea: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default App;
