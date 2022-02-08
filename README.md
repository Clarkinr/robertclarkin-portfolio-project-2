# Rock, Paper, Scissors, Lizard, Spock 

This project is a fully adaptable browser based Rock, Paper, Scissors, Lizard, Spock Game built using JavaScript, HTML and CSS. Rock, Paper, Sicssors, Lizard, Spock is an extension of the classic game Rock, Paper, Scissors and was created by Sam Kass and popularized by the TV show "The Big Bang Theory"

The creator hopes that this game will be enjoyed by a multitude of users and can be a resource for others hoping to create a similar project or wishing to see how Javascript can be applied to a web based game. 

![responsive](/assets/images/readme_images/AmIResponsive.PNG)

## Features

### Exisiting Features 
__The tag line and quote__
- Featured at the top of the page is the heading which shows the name of the game and a quote from spock. 
![tagline](/assets/images/readme_images/tagline.PNG)

__The Icons Area__
- This section shows users the options they can choose to execute the game. 
- Buttons enlarge when you hover over them using a cursor or when pressed on a touchscreen.
- This section also features the text choose wisely to prompt users to pick one of the options. 
![icons_area](/assets/images/readme_images/icons_area.PNG)

__The Game Area__
- This area shows the user the option which has been chosen by the user and the computer after being clicked
- Prior to being clicked this area shows "User VS CPU" indicating that this is where the outcome will appear
![game_area](/assets/images/readme_images/game_area.PNG)

__The Declare Area__
- This area shows the rule applied to the selection made by the user and the computer e.g. Spock vaporises rock.
- prior to a button being clicked this area contains no text so is not visible.
![declare_area](/assets/images/readme_images/declare_area.PNG)

__The Score Area__
- This area keeps track of the number of wins for both the user and the computer. 
- This area was based on the code used in the codeinstitute Love Maths Project, it shares elements of CSS, HTML and JAvascript. however the text is different and the elements were adapted for this specific project. 
![wins_area](/assets/images/readme_images/wins.PNG)

### Features left to implement
- I have thought about allowing the user to chose a "best out of condition". This would limit the total number of games before an overall winner is declared. 
- Animating the game area so that computerchoice shows up after user choice and possibly adding a sound effect. 

## Testing 

### Validator Testing
- HTML
    - No errors were found when using the [w3c validator]
    ![HTML_Validator](/assets/images/readme_images/HTML_validator.PNG)
- CSS
    - No errors were found while using the Jigsaw CSS Validator
    ![CSS_validator](/assets/images/readme_images/Jigsaw_CSS_validator.PNG)
- JavaScript
    - No errors were found using the JSHint validator
    - The following Metrics were identified
        - There are 6 functions in this file.
        - Function with the largest signature take 0 arguments, while the median is 0.
        - Largest function has 42 statements in it, while the median is 7.5.
        - The most complex function has a cyclomatic complexity value of 41 while the median is 3.5.
    - On first attempt there were 10 warnings, two of which were that there were missing semi-colons, these were updated and there are currently 8 warnings. which can be seen in the images below. 
    ![Initial_test](/assets/images/readme_images/Capture.PNG) ![second_test](/assets/images/readme_images/After_fix.PNG)
- Lighthouse 
    - Lighthouse testing initially indicated a weak accesiniltiy score and slightly weak SEO score 
    ![lighthouse_first](/assets/images/readme_images/Lighthouse_first_attempt.PNG)
    - Aria-labels were added to each of the clickable buttons in html and a meta description was added to the head in order to increase these scores
    ![lighthose_fixed](/assets/images/readme_images/Light_house_updated_meta_tags.PNG)

### Unfixed bugs 
- When using developer tools, the console shows an error indicating that userScore variable is already defined, this variable is declared on the first line of JS code and is referenced in event listener and run game functions. Removing this initial declaration means the counters in the wins area would not function correctly. 
![js_bug](/assets/images/readme_images/JS_bug.PNG)

## Deployment
- The Site was deployed using GitrHub Pages following the below steps. 
    - Click settings in the GitHub repository
    - Scroll down to the git hub pages section
    - Click the Link which says "Pages settings now has its own dedicated tab! Check it out here!"
    - Select the main branch under sources 
    - Click the save button

## Credits

### Content 
- Rules for the game were taken from https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/
- The User and computer counters were based on theose used in the Love Maths Project by CodeInstitute. 
- the function generateComputerAnswer was isnpired by the following site which has a walkthrough on how to make a basic rockpaper scissors game (http://www.onlywebpro.com/2016/09/26/learn-object-oriented-javascript-via-game-development/)
- Icons used for the buttons and the game area are taken from (https://fontawesome.com/) and fonts used are all from (https://fonts.google.com)

### Media 
- The Favicon used was created using the image from the following page (https://en.wikipedia.org/wiki/File:Pierre_ciseaux_feuille_l%C3%A9zard_spock_aligned.svg)
