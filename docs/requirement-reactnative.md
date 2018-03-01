React Native
========================================

from :
* doc : https://kylewbanks.com/blog/react-native-tutorial-part-1-hello-react

## Install

Debian-like
~~~shell
sudo apt-get install linuxbrew-wrapper
brew install node
brew install watchman
sudo npm install -g react-native-cli
~~~


## Create Project

Creer le projet 'Example'
~~~shell
[user@computer ~]$ react-native init Example
...
...
[user@computer ~]$ tree -L 1 Example
. ReactCalculator
├── android
├── index.js
├── App.js
├── ios
├── node_modules
└── package.json
[user@computer ~]$ 
~~~

## Run


### Android

Start your android device emulator
~~~
Android Studio > Tools > AVD > launch your virtual device
~~~

Launch your mobile application
~~~shell
[user@computer ~]$ cd <<project>>
[user@computer project]$ echo "sdk.dir=${ANDROID_SDK_ROOT}" > local.properties
[user@computer project]$ react-native run-android
~~~

### iOS

Start your android device emulator
~~~
SECTION TODO ...
~~~

Launch your mobile application
~~~shell
[user@computer ~]$ cd <<project>>
[user@computer project]$ react-native run-ios
~~~
