Application Mobile : Simple Meteo
========================================

Application React Native tutoriel de prévisions météorologiques


## References

* excellent vidéo YouTube [Découverte de ReactNative, App Météo](https://www.youtube.com/watch?v=Y7rbJRjaYCY) de [Grafikart.fr](https://www.grafikart.fr/)


## Todo list

* internationnalization
* test unit
* better style management

## Dependances

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


