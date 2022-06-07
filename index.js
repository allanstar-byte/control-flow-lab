const { Console } = require("console");

function scuberGreetingForFeet(ride) {
    if (ride < 400 && ride < 2500) {
        return 'This one is on me!'
    } else if (ride > 2000) {
        return 'I will gladly take your thirty bucks.'
    }
}
scuberGreetingForFeet(2000)


function ternaryCheckCity(city) {
    if (city === 'NYC') {
        return 'Ok, sounds good.'
    } else {
        return 'No go.'
    }


}

ternaryCheckCity(NYC)

function switchOnCharmFromTip(y) {
    // Write your code here!
    switch (y) {
        case 'generous':
            return 'Thank you so much.'
        case 'not as generous':
            return 'Thank you.'
        default:
            return 'Bye.'

    }
}