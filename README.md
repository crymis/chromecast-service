# Chromecast-service

A server that utilises the babbling lib in order to control a chromecast by nfc tags


## How to use it: 

1. Call a GET request with an `?id=123` queryparam of the server you are running the index.js
2. The babbling lib is used to find and play video on the chromecast device 
3. The id of the GET is used to play the youtube video
4. Now you can start playing a YouTube video by just calling that URL (e.q. from tabbing an NFC tag)
