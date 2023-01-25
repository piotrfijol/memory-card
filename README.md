# Memory card 

Memory card game made with create-react-app
There is a total of 12 cards. Each round a player has to choose a card that he hasn't chosen in previous rounds.
When the player chooses the same card twice the game restarts, and new best score (if beaten) will be set.


To run this app:

~~~ 
git clone git@github.com:pitorfijol/memory-card.git
cd memory-card
npm install express
npm run start
~~~

If you have a port 5500 free the app should available at:
http://localhost:5500

If some other app is currrently using this port, you either have to close that app or change value 
of 'PORT' constant in app.js file of root directory.
