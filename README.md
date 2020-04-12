# crystal_collector

![Demo](./assets/images/crystal_collector.gif)

## Description 
The Crystal Collector is a blackjack style game with twist. JQuery is used to create a random target score for each round and also to treat the crystal images a buttons with numerical values. 

The crystals are images labeled with an numbered crystal id. A function called 'crystal value' iterates through a short for-loop to assign a value from 1 to 12  to each crystal using the Math.random method.

```javascript
  function crystalVal() {
        for (var i = 0; i < 4; i++){
         $("#crystal-"+i).attr("value", (Math.floor(Math.random() *12)+1) );
        }
    };
```
The value is hidden from the player as they attempt to use a combination of button values to get to the target score without going over.  If the player goes over, then they lose!

It's a simple game that is a lot of fun, but don't just take my word for it...

**Game Link:** https://armc8234.github.io/crystal_collector

# Game On !!!

