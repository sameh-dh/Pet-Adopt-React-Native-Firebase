
# Hello everyone 🌸 

<p>
I created this project to deepen my understanding of React Native through hands-on implementation. Along the way, I documented key concepts and insights that I believe will serve as a valuable reference when revisiting this project. Detailed documentation is crucial for navigating older projects effectively, so take your time, stay focused, and don't get discouraged!
</p>

<h3>💙 Enjoy this journey into the world of React Native! 💙</h3>

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

#### 1. [Set up project 🤗](#project-Set-up-bash-commands)
#### 2. [How to add font in your react native app 😪](#How-to-add-font-in-your-react-native-app)
#### 3. [React Native Authentication using clerk 🤨](#React-Native-Authentication)
#### 4. [About Clerk 🙂](#About-Clerk)
#### 5. [Project structure 💖](#Project-structure)



## project Set-up bash commands 🤗

```bash

npx create-expo-app@latest
npm run reset-project
```

### STEP 1 : make sure that your react native app works 

```js
  the first step is to create app folder and _layout.jsx and index.jsx files and return any text

```
### STEP 2 : How to add font in your react native app 😪

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
    'Outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Bold':require('./../assets/fonts/Outfit-Bold.ttf'),
  })
  --> go to index.jsx :
<View>
<Text style={{fontFamily: 'Outfit-Medium',}}> Hola!</Text> 
</View>
      
    
```
### STEP 3 : React Native Authentication 🤨

```js
--> create login folder inside app folder
--> create a navigation link and make sure you can navigate between home and Login Screen 
--> Design the log in screen
---> GOOGLE authentication
---> use authentication using Clerk "https://clerk.com/" ( go to product then click user Authentication / create an account // crate app // choose expo )

    ---> create .env file
    ---> Install dependencies
```
```bash
npm i react-native-web @expo/metro-runtime
npm install @clerk/clerk-expo
npm install expo-secure-store


```
#  Project structure 💖
```js
                            
 ├── app ───├── _Layout.jsx                       
 │          │                                     
 │          ├── index.jsx                             
 │          │                                       
 │          ├── Login                          
 │          │                                         
 │          ├──Signup                                                    
 │                                               
 │                                       
 ├──assets                               
 │                                      
 │                                                                       
 ├──components                                  
 │
 │
 ├──constants           
```
cntrl + shift + v

# About Clerk 🙂

 <p><b>Clerk</b> is an authentication and user management platform designed to integrate seamlessly into modern web and mobile applications. It provides tools for implementing features like user authentication, authorization, session management, and profile handling. Clerk supports various authentication methods, including:

Email and password
Social logins (Google, Facebook, GitHub, etc.)
Magic links
One-time passwords (OTP)
Passwordless authentication 
It offers pre-built UI components and SDKs for frameworks like React, Next.js, and more, simplifying the integration process for developers.</p>
<h2> Advantages of using Clerk</h2>
<p>
<ul>
<li>1. Faster Development </li>
Pre-built UI Components: Clerk provides ready-made components for login, signup, and profile management, saving time and effort in designing and coding these features from scratch.
SDK Integration: Easily integrates with modern frameworks like React, Next.js, and others, reducing boilerplate code.
<li>2. Enhanced Security</li>
Out-of-the-box Security Features: Clerk includes advanced security measures like rate limiting, encryption, and protection against common vulnerabilities (e.g., SQL injection, XSS).
Regular Updates: Authentication standards evolve, and Clerk handles updates to stay compliant with best practices, ensuring your app remains secure.
<li>3. Support for Modern Authentication</li>
Multi-Factor Authentication (MFA): Easy to enable MFA for added security.
Passwordless Options: Includes magic links, social logins, and one-time passwords, which are user-friendly and secure.
<li>4. Scalability</li>
Handles User Management at Scale: No need to worry about building and maintaining databases for user accounts. Clerk can scale as your app grows.
Global Infrastructure: Optimized for global use, ensuring fast and reliable authentication.
<li>5. Time-Saving Features</li>
Built-In User Profiles: Clerk handles user profiles, preferences, and account settings.
Session Management: Automatically manages user sessions, token expiration, and refresh tokens.
<li>6. Integration with Third-Party Services</li>
Social Logins: Easy integration with providers like Google, GitHub, and more.
APIs for Custom Logic: Clerk's APIs allow you to customize authentication workflows if needed.
<li>7. Reduced Maintenance</li>
No Custom Backend Required: Clerk takes care of backend logic for authentication and user management.
Automatic Compliance: Clerk ensures compliance with regulations like GDPR and CCPA, reducing legal and technical overhead.
<li>8. Developer-Friendly</li>
Documentation: Excellent documentation and examples make it easy to get started.
Community Support: Growing community and support for troubleshooting.
</ul>
</p>

<h2> Disadvantages of Using Clerk </h2>
While Clerk offers many advantages, there are some potential drawbacks to consider:
<ul>


<li>If Clerk experiences downtime, your app's authentication system may also fail unless you have fallback mechanisms.</li>
<li>You're relying on their pricing model, and significant cost increases could affect your budget.
Limited Customization</li>

<li>Pre-built components may not fit your exact design or user experience requirements without additional effort.
Customizing advanced authentication flows might be more challenging compared to building them from scratch.
Cost</li>

<li>Clerk is a paid service, so it might not be ideal for small projects or startups with limited budgets. While they have a free tier, it might not meet the needs of larger-scale applications.
Vendor Lock-In</li>

<li>If you rely heavily on Clerk and decide to switch to another service or build your own system later, migrating users and data can be complex.
Limited Offline Functionality</li>

<li>Applications that need offline authentication or functionality may find Clerk less suitable since it relies on external servers for most processes.</li>


</ul>

<h2>Conclusion</h2>

<p>If you need a quick, secure, and scalable solution, Clerk is a great choice. However, if you want complete control over your authentication system and don’t mind the extra work, building it yourself might be more suitable.</p>

