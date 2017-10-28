import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class WelcomeScreen extends React.Component {
  realm = null
  constructor() {
    super()
  }

  render() {
    const realm = this.props.realm
    var sampleObject = realm && realm.objects('SampleObject')[0]
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a sample to verify Realm Integration.
        </Text>
        <Text style={[styles.instructions, styles.schema]}>
            Realm Schema Version {realm.schemaVersion}
        </Text>
        <Text style={[styles.instructions, styles.name]}>
            Application Name {sampleObject.name}
        </Text>
        <Text style={styles.instructions}>
            {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    schema: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold'
    },
});