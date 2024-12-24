# Pet-Adopt-React-Native-Firebase

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).


## project Set-up bash commands

```bash

npx create-expo-app@latest
npm run reset-project
```

### STEP 1 : make sure that your react native app works 

```js
  the first step is to create app folder and _layout.jsx and index.jsx files and return any text

```
### STEP 2 : How to add font in your react native app

```js
Modify Fonts 
Go to google fonts and choose your app font
--> Download the font
--> Extract the folder 
--> go to static folder
--> copy the files of fonts you want
--> paste them in the ./assets/fonts
now to use fonts :
--> go to _layout.jsx :

import {useFonts} from "expo-font"
 useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfitMedium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfitBold':require('./../assets/fonts/Outfit-Bold.ttf'),
  })
  --> go to index.jsx :
<View>
<Text style={{fontFamily: 'Outfit-Medium',}}> Hola!</Text> 
</View>
      
    
```

cntrl + shift + v
