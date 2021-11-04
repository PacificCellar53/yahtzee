input.onButtonPressed(Button.A, function () {
    Dice1R2 = Dice1
})
input.onGesture(Gesture.Shake, function () {
    Dice1 = randint(1, 6)
    Dice1 = Dice1R2
    basic.showNumber(Dice1)
    basic.pause(500)
    Dice2 = randint(1, 6)
    basic.showNumber(Dice2)
    basic.pause(500)
    Dice3 = randint(1, 6)
    basic.showNumber(Dice3)
    basic.pause(500)
    Dice4 = randint(1, 6)
    basic.showNumber(Dice4)
    basic.pause(500)
    Dice5 = randint(1, 6)
    basic.showNumber(Dice5)
    basic.pause(500)
})
let Dice5 = 0
let Dice4 = 0
let Dice3 = 0
let Dice2 = 0
let Dice1 = 0
let Dice1R2 = 0
Dice1R2 = randint(1, 6)
basic.forever(function () {
	
})
