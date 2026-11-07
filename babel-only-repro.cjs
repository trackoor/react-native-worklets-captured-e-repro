const babel = require("@babel/core");

const code = `
const _e = 41;
const w = () => {
  "worklet";
  return _e + 1;
};
`;

for (const envName of ["production", "development"]) {
  try {
    babel.transformSync(code, {
      filename: __filename,
      envName,
      babelrc: false,
      configFile: false,
      plugins: ["react-native-worklets/plugin"],
    });
    console.log(envName + ": ok");
  } catch (e) {
    console.log(envName + ": " + e.message.split("\n")[0]);
  }
}
