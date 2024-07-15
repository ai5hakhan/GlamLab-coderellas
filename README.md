# Myntra Glam Lab: Makeover Game

## Problem Statement
We aspire to implement a "Makeover Game" where users, especially Gen Z who grew up playing such games, can create virtual outfits using available fashion items, earning points for likes.

## Use Case
**Engagement on a shopping platform**: Building engagement constructs on a platform which will drive a connect and virality among younger audiences in the country. It need not be linked to shopping but needs to be linked to fashion, which will drive users to keep visiting the app on a habitual basis.

## Our Solution: Myntra Glam Lab
- **Inclusivity**: Models in the game are inclusive of all body types, promoting diversity and body positivity.
- **Points System**: Points are awarded for likes on selected outfits and can be redeemed for app discounts.
- **Competitions**: Weekly competitions among top-liked outfits with specific themes (party, casual, formals, weddings, etc.).

### Features
- **Gamification**: Drives continuous app engagement and user retention through competitions and rewards.
- **Inclusivity**: Models of all body types to cater to a diverse audience.
- **Rewards System**: Discounts and outfit rewards enhance user loyalty and satisfaction.

## Tech Stack

### Website and Community
- HTML
- CSS
- JavaScript
- Node.js
- express.js
- Handlebars

### Game Development
- **Ready Player Me**: For creating avatars.
- **Unity 2022 LTD 1**: Installed for development.
- **Unity Hub**: For managing Unity projects and installations.
- **WebView**: To integrate the Web Avatar Creator.
- **Unity SDK**: To build your own Avatar Creator in Unity.
- **HTML and JavaScript**: For embedding the Avatar Creator into a webpage.
- **REST and postMessage APIs**: For communication between the Avatar Creator and your application.

## Getting Started

### Prerequisites
- Node.js
- Unity 2022 LTD 1
- Unity Hub

### Installation

#### Website Setup

1. **Clone the repository**
   

2. **Install dependencies for the website**
    ```bash
    npm install
    ```

3. **Run the development server**
    ```bash
    npm start
    ```

4. **Navigate to `http://localhost:3000` to view the web app.**

#### Unity Project Setup

1. **Install Unity and Unity Hub**
   - You installed Unity 2022 LTD 1 and Unity Hub to manage your Unity projects.

2. **Choose Integration Method**
   - **WebView Integration**: You explored using the Web Avatar Creator via WebView, which runs inside a browser within your application. This method is quick to integrate but has limitations such as no editor support, limited customization options, and compatibility only with Android, iOS, and WebGL.
   - **Unity SDK Integration**: You also considered building your own Avatar Creator in Unity using the Unity SDK, which offers full customization, compatibility with all Unity-supported platforms, and includes ready-to-use examples but requires more effort to integrate and maintain.

3. **Quickstart with Web Avatar Creator**
   - **Create an HTML File**: You created a new .html file in a text editor.
   - **Embed Avatar Creator**: You copied and pasted the provided code to embed the Avatar Creator into the webpage.
   - **Open in Web Browser**: You opened the HTML file in a web browser to access the Avatar Creator.
   - **Create Avatar**: You created an avatar using the Ready Player Me Avatar Creator.
   - **Receive Avatar URL**: After creating the avatar, you received the avatar URL through the v1.avatar.exported event, which was handled in the event handler to show the URL and hide the Avatar Creator iFrame.

### Usage
- Navigate to `http://localhost:3000` to view the web app.
- Use the provided tools to create avatars and outfits.
#### Unity Game Part
- To use the Unity game part, follow these steps:
  1. **Open the HTML File**: Locate the provided HTML file (`avatar_creator.html`) in the `unity-game` directory.
  2. **Open in Web Browser**: Open the `avatar_creator.html` file in a web browser to access the Avatar Creator directly.
  3. **Create Avatar**: Use the Avatar Creator to design your avatar.
  4. **Receive Avatar URL**: After creating the avatar, you will receive the avatar URL through the `v1.avatar.exported` event, which is handled to display the URL and hide the Avatar Creator iFrame.
- Alternatively, you can open the Unity project directly in Unity:
  1. **Open Unity Hub**: Launch Unity Hub and open the Unity project by selecting the project directory.
  2. **Run the Project**: Click on the `Play` button in Unity to run the project within the Unity editor.
  3. **Interact with the Avatar Creator**: Interact with the Avatar Creator as integrated into the Unity project.

![Alt Text](https://github.com/ai5hakhan/GlamLab-coderellas/blob/main/images/61d6de4d-28d8-402f-a700-3ca73f33bde3.jfif)
