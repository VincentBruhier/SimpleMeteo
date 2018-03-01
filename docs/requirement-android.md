Android requirements
========================================

## References

Documentation : [https://kylewbanks.com/blog/react-native-tutorial-part-1-hello-react](https://kylewbanks.com/blog/react-native-tutorial-part-1-hello-react)

## Install

Install Android-Studio

## variables d'environnement

Add environment variables in your own environment file (ex : .profile, .bashrc, ...)
~~~shell
...

# === ANDROID HOME ===================
# @deprecated :: export ANDROID_HOME=$HOME/Android/Sdk
#   cependant il reste nécessaire à react-native
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export ANDROID_AVD_HOME=$HOME/.android/avd
export PATH=$PATH:${ANDROID_SDK_ROOT}/emulator

~~~

Do not forget to reload your new environment file
~~~shell
[user@computer ~]$ source <<my-env-file>>
~~~

### update android licences

Step 1 - Agreement on your android's* licenses
~~~studio
Open your android-studio
  Tools > Android > SDK Manager
  download SDK : (SDK + source)
~~~

Step 2 - command line
~~~shell
[user@computer ~]$ cd ${ANDROID_SDK_ROOT}
[user@computer Sdk]$ ./tools/bin/sdkmanager --update
[user@computer Sdk]$ ./tools/bin/sdkmanager --licenses
~~~


### Trouble on AVD

Solution 1 : good
~~~
Android Studio
  Tools > Android > AVD Manager ...
    
modal windows
   edit your virtual device
   > show advanced settings
     in "Graphics" selection : 'Automatic' by 'Software'
~~~

Solution 2 : ugly

Replace the android 'libstdc++.so.6' file with your 'libstdc++.so.6' system file

The android 'libstdc++.so.6' path file is : ${ANDROID_SDK_ROOT}/emulator/lib64/libstdc++/libstdc++.so.6


## project properties

For each project, you need to create 'local.properties' file on your project directory with your ANDROID_SDK_ROOT path
~~~text
# ====================================================================================================================================
# SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable
# ====================================================================================================================================
sdk.dir=/home/user/Android/Sdk
~~~

