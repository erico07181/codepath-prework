# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Enrique Rico

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/carnation-butter-kettledrum

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- Users can use the keyboard numbers 1-6 to activate buttons

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![x] (https://github.com/NesquickRabbit1/codepath-prework/blob/main/Prework-losing.gif)

![x] (https://github.com/NesquickRabbit1/codepath-prework/blob/main/Prework-winning.gif)
## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- w3schools.com
- stackoverflow.com
- rapidtables.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   While I was creating the first part of the submission, everything was going smoothly; the issue arose when it came to adding an additional feature. While I was testing the game out and thinking of new features I could add I thought of adding a feature that would let the user play with the keyboard buttons 1-6. I started off by looking at JavaScript documentation to see if I could find a way to activate a button with a keyboard press. After searching for a while, I found the “keydown” and “keyup” keyboard events. I looked for guides on how to implement it but there were many different situations that used these events and nothing that I read aligned with my situation. I was about to not carry through with the feature due to the time constraint, but I decided to keep looking. Searching through StackOverflow posts and Googling the event implementation for hours, I eventually found it on a website named w3schools.com. The website mentioned that I had to add an if-statement that would check for the keyboard input using something called event.code. This is a specific code that represents the physical key pressed on a keyboard. I implemented this for the first button and didn't see it light up or make a noise, but if I clicked it out of the pattern, the game would end. I knew the button was working but I didn't know why it wouldn't light up or play the noise of the pressed button. This also stumped me for a bit, I tried adding it to different functions and in different places to no avail. I finally coded the lightButton, playTone, and the setTimeout functions where I placed the keyboard listener. After doing this for the first button, it worked! The button lit up, played the tone and would register on the website. All I needed to do was copy the code and make it work for the rest of the buttons.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   I came across many questions as I completed the assignment, but the two that captured my interest were the following: “Can a website have more than one CSS file?” and “What kind of security challenges/problems can be exploited in this?”. The former question came to me when I was working on the optional features. As an optional feature, I wanted to include a colorblind filter selector including Deuteranomaly, Protanomaly, Protanopia, Tritanomaly, and Tritanopia. Because of this, I wanted to see if there was a way to reference different CSS files according to the filter chosen by the user. The latter question I had was about security. Having a strong interest in Cyber Security, I always like to ask myself, how can I break this? Because of this, I was thinking of the different security issues that could arise with not only this application. I want to learn more about the security aspect of web development and how to overcome security flaws.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   After reading the Prework document, I started to think about the additional features I could add to the game to enhance its excitement and engagement, if I had more time. These include a difficulty selector, a colorblind filter, and mobile support. Basing off the optional feature “Speeding it up”, adding two difficulties could spruce up the game. There would be two buttons, “Easy :(“ and “Extreme!!!”. Clicking the “Easy” button would put you in the regular game with the regular clueHoldTime, cluePauseTime and nextClueWaitTime. If “Extreme!!!” is chosen, players can expect an extreme difference. The variables clueHoldTime, cluePauseTime and nextClueWaitTime would be divided by four, causing the reaction and memory of the player to be challenged quite a bit more. Another feature that I wanted to add was to increase individual user experience. I believe the experience would be greater if there were specific colorblind filters added to the game. Even if the user can see the button light up and can memorize the sounds each button gives off, they wouldn't have the same experience without the colors. Because of this, I wanted to add a colorblind filter the user could choose at the beginning of the game, which would change the colors of the buttons according to the type of color blindness. The last feature I believe would improve user experience is mobile support. When I was testing the game, I decided to try it out on my phone. The buttons on mobile devices are displayed vertically instead of horizontally. This made the game nearly impossible because only a few buttons were visible. This additional support for mobile devices would attract more players to the game since some people don't have access to a computer but do have access to a mobile phone.

## Interview Recording URL Link

[My 5-minute Interview Recording] https://www.loom.com/share/70eca7c7d7d24ce4ba1c0ed5d106c6c6

## License

    Copyright Enrique Rico

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
