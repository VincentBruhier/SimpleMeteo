React Native
========================================

## Installation

Debian-like
~~~shell
sudo apt-get install linuxbrew-wrapper
brew install node
brew install watchman
sudo npm install -g react-native-cli
~~~


## Projet

Creer un projet de base : 'Example'
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

Démarrer votre périphérique Android émulé

* via Android Studio 
~~~
Android Studio > Tools > AVD > launch your virtual device
~~~

* via le shell unix
~~~
[user@computer ~]$ ${ANDROID_SDK_ROOT}/tools/emulator -list-avd
device1
device2
[user@computer ~]$ ${ANDROID_SDK_ROOT}/tools/emulator -engine qemu2 -netdelay none -netspeed full -avd <<DEVICE-ID>>
...
~~~
Remarque : en cas de problème, rajouter l'option "-gpu off"

Déployer et lancer votre application sur le périphérique
~~~shell
[user@computer ~]$ cd <<project>>
[user@computer project]$ echo "sdk.dir=${ANDROID_SDK_ROOT}" > local.properties
[user@computer project]$ react-native run-android
...
~~~

### iOS

Démarrer votre iOS périphérique émulé
~~~
TODO ...
~~~

Déployer et lancer votre application sur le périphérique
~~~shell
[user@computer ~]$ cd <<project>>
[user@computer project]$ react-native run-ios
...
~~~
Remarque : en cas de problème, je vous conseille de rajouter l'option "-accel off"


## Tutos

Pour une première création d'application React Native, je vous conseille l'excellent Tuto de Kyle Banks :
* [react-native-tutorial hello-react](https://kylewbanks.com/blog/react-native-tutorial-part-1-hello-react)



