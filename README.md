# react-native-worklets: Duplicate declaration "_e"

Reproduction for https://github.com/software-mansion/react-native-reanimated/issues/11223

```sh
npm install
npm run repro
```

Output with react-native-worklets 0.13.1 and @babel/core 7.29.13:

```
production: ok
development: .../repro.cjs: [Worklets] Babel plugin exception: Duplicate declaration "_e" (This is an error on an internal node. Probably an internal error.)
```

A worklet that captures an outer variable named `_e` fails to compile in development builds.
