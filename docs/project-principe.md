Application Mobile : Simple Meteo
========================================

Application React Native tutoriel de prévisions météorologiques

Application React Native tutorial (android application)

## Références

Référence :
* excellent vidéo YouTube [Découverte de ReactNative, App Météo](https://www.youtube.com/watch?v=Y7rbJRjaYCY) de [Grafikart.fr](https://www.grafikart.fr/)

## Aperçu

| search pane                              | forecast pane                                | about pane                              |
|:----------------------------------------:|:--------------------------------------------:|:---------------------------------------:|
| ![Search](screenshots/pane-search.png)   | ![Forecast](screenshots/pane-forecast.png)   | ![About](screenshots/pane-about.png)    |

## Dépendances

Le projet SimpleMeteo requiert des dépendances en plus de la base react-native

| dependency                | description                                                      |
|-------------------------- |----------------------------------------------------------------- |
| react-native-autolink     | text with link (ex : mailto, url, hashtag)                       |
| react-navigation          | navigation context in your application (example : 'go back')     |
| axios                     | HTTP call library appel (use for API Rest)                       |
| moment                    | date library                                                     |
| dotenv                    | extension library for your custom var ('.env' file)              |
| react-native-dotenv       | extension library for your custom var ('.env' file)              |


## Webservice OpenWeatherMap

Le projet utilise le webservice REST de prévision météorologique d'[OpenWeatherMap](https://openweathermap.org/).

Pour pouvoir utiliser ce webservice, il préalablement s'enregistrant avec une adresse mail à partir du site [openweathermap.org](https://openweathermap.org/api)

Exemple d'appel du webservice REST en curl
~~~
[user@computer ~]$ curl "http://api.openweathermap.org/data/2.5/forecast?q=Paris&APPID=xxxxxx"
{
  ...
}
[user@computer ~]$ 
~~~


