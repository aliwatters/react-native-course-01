# react-native-course-01

Following along with https://www.udemy.com/reactnative - Build Apps with React Native

## Notes
* in the course apps are built on a mac - I'm using linux, and therefore android
* apps in course are built with `react-native init <app name> --version 0.24.0` - used that for weekdays
* useful flex box cheatsheet at: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* access `console.<blah>` by running `$ react-native log-android`


## Debugging Android Notes

Had lots of trouble with the maps section, what a pain;
1) MapView as a native component no longer seems to be supported
2) on android requires a key to use google maps

### Use react-native-maps

from: https://github.com/airbnb/react-native-maps

Installation:
https://github.com/airbnb/react-native-maps/blob/master/docs/installation.md

```
npm install react-native-maps --save
react-native link
// go get a key from google
```

Got errors:

```
$ react-native run-android
:app:dexDebug
Unknown source file : UNEXPECTED TOP-LEVEL EXCEPTION:
Unknown source file : com.android.dex.DexException: Multiple dex files define Landroid/support/v7/appcompat/R$anim;
Unknown source file : 	at com.android.dx.merge.DexMerger.readSortableTypes(DexMerger.java:596)
Unknown source file : 	at com.android.dx.merge.DexMerger.getSortedTypes(DexMerger.java:554)
Unknown source file : 	at com.android.dx.merge.DexMerger.mergeClassDefs(DexMerger.java:535)
Unknown source file : 	at com.android.dx.merge.DexMerger.mergeDexes(DexMerger.java:171)
Unknown source file : 	at com.android.dx.merge.DexMerger.merge(DexMerger.java:189)
Unknown source file : 	at com.android.dx.command.dexer.Main.mergeLibraryDexBuffers(Main.java:502)
Unknown source file : 	at com.android.dx.command.dexer.Main.runMonoDex(Main.java:334)
Unknown source file : 	at com.android.dx.command.dexer.Main.run(Main.java:277)
Unknown source file : 	at com.android.dx.command.dexer.Main.main(Main.java:245)
Unknown source file : 	at com.android.dx.command.Main.main(Main.java:106)

:app:dexDebug FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:dexDebug'.
> com.android.ide.common.process.ProcessException: org.gradle.process.internal.ExecException: Process 'command '/usr/lib/jvm/java-8-openjdk-amd64/bin/java'' finished with non-zero exit value 2

// fixed with

$ react-native upgrade
$ react-native run-android
```

## Weather APP

- openweathermap.org doesn't support https on the free accounts (probably better to use forcast.io)

Workaround - enable http for api.openweathermap.org in `ios/weather/Info.plist`.

```
<key>api.openweathermap.org</key>
<dict>
  <key>NSExceptionAllowsInsecureHTTPLoads</key>
  <true/>
</dict>
```

## Parse App

Video 59 - parse is no longer - (parse.com) - running in a docker container instead.

```
$ git clone git@github.com:ParsePlatform/parse-server.git
$ cd parse-server
$ docker build --tag parse-server .
$ docker run --name my-mongo -d mongo
$ docker run --name my-parse-server --link my-mongo:mongo parse-server --appId APPLICATION_ID --masterKey MASTER_KEY --databaseURI mongodb://mongo/test
```
