'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from 'react-viro';

var createReactClass = require('create-react-class');
var MainScene = createReactClass({

  render: function() {
    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
            <Viro3DObject source={require('./portal_res/portal_wood_frame/portal_wood_frame.vrx')}
              resources={[require('./portal_res/portal_wood_frame/portal_wood_frame_diffuse.png'),
                          require('./portal_res/portal_wood_frame/portal_wood_frame_normal.png'),
                          require('./portal_res/portal_wood_frame/portal_wood_frame_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Video source={require("./portal_res/waterfall.mp4")} loop={true} />
        </ViroPortalScene>
      </ViroARScene>
    );
  },
});

module.exports = MainScene;
