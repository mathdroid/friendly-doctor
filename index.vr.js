import React from "react";
import { AppRegistry, asset, StyleSheet, Pano, Text, View } from "react-vr";

export default class vrnext extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("horror.jpg")} />
        <Text
          style={{
            backgroundColor: "#777879",
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 0, -25] }]
          }}
        >
          hi there gud doctor
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("vrnext", () => vrnext);
