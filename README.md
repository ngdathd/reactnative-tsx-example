# rntsxexample

Example React Native TSX

1. Init project
   npx react-native init rntsxexample --template react-native-template-typescript

2. Add Prettier Plugin to format code
   yarn add --dev eslint-config-prettier eslint-plugin-prettier prettier

3. Init Eslint Airbnb
   yarn remove @react-native-community/eslint-config
   yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

4. Absolute path for imports
   yarn add --dev babel-plugin-module-resolver

5. Sort import
   yarn add --dev eslint-plugin-simple-import-sort
