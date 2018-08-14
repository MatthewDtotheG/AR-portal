# AR-portal
AR-Portal app built using React Native and ViroReact


PREREQUISITES:

AR (iOS)
OSX computer or Linux computer
iOS Device with A9 chip or higher and running iOS 11 or an ARCore supported device running Android N or higher.

AR (Android)
OSX/Linux computer
An ARCore supported device

VR
OSX or Linux computer
Recent Android or iOS Device (Android requirements: Android 5.0+ w/ gyroscope support and OpenGl ES 3.0, iOS requirements: iOS 9.0+)
Cardboard headset (you can find some QR codes here)

Dependencies: 
  - node, watchman, react-native-cli, react-viro-cli
  
Instructions to run the app:
  - Download "Viro Media" app onto your mobile device
  - Download or clone this repo and cd into it
  - Run npm start in your terminal. The NGrok Packager Server endpoint url will be displayed there
  - In the Viro media app open the menu and then select "enter testbed"
  - Enter the NGrok Packager Server endpoint url into field on the app
  - Select either VR or AR. The window can take 30 seconds to a minute to load
