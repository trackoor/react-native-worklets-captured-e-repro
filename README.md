# react-native-worklets: Duplicate declaration "_e"

Reproduction for https://github.com/software-mansion/react-native-reanimated/issues/11223

A new React Native 0.88.1 app (`@react-native-community/cli init`) with react-native-reanimated 4.7.1 and react-native-worklets 0.13.1. `App.tsx` has a worklet (`useAnimatedStyle`) that captures a module-level variable named `_e`.

```sh
npm install
npx react-native bundle --platform android --dev true --entry-file index.js --bundle-output /tmp/out.js
```

Output (same with `--platform ios`, and with `npx react-native start`):

```
error App.tsx: .../App.tsx: [Worklets] Babel plugin exception: Duplicate declaration "_e" (This is an error on an internal node. Probably an internal error.).
```

With `--dev false` the bundle builds. Renaming `_e` to anything else also makes it build.

`node babel-only-repro.cjs` shows the same error with only `@babel/core` and the plugin.
