//Simple Event Concept
var events = require('events');

var anubhav = new events.EventEmitter();

anubhav.on('speak', () => {
    console.log("how you doin folks!");
});

anubhav.emit('speak');


//How we use the same in real life
var utils = require('util');

var Person = function(name){
    this.name = name;
}

utils.inherits(Person, events.EventEmitter);

var anubhav = new Person("Anubhav");
var ananya = new Person("Ananya");

var people = [anubhav, ananya];

people.forEach(element => {
    element.on('talk', (msg) => {
        console.log(element.name + " says " + msg);
    });
});

anubhav.emit('talk', 'hey dude!');
ananya.emit('talk', 'hey gals!');
