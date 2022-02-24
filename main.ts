let number = 0
let strike = 0
input.onButtonPressed(Button.A, function () {
    number = 0
    number = 4
    basic.showNumber(number)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    strike = 3
    basic.showNumber(strike)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
