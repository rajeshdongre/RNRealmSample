/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import WelcomeScreen from './WelcomeScreen'
import { Navigation } from 'react-native-navigation'
import Realm from 'realm'

const SampleObject = {
    name: 'SampleObject',
    properties: {
        name: 'string',
    }
};

export default class App {
  constructor() {
    // open the Realm with the latest schema
    const realm = new Realm({
        path: 'Sample.realm',
        schema: [SampleObject],
        schemaVersion: 0,
    })
    realm && realm.write(() => {
      var sampleObject = realm.objects('SampleObject')[0]
      if (sampleObject === undefined) {
        realm.create('SampleObject', {
          name: 'Realm Sample'
        })
      }
    })

    Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen)

    Navigation.startSingleScreenApp({
      screen: {
        screen: 'WelcomeScreen',
        title: 'Welcome',
      },
      passProps: {realm},
      animationType: 'none',
    })
  }
}
