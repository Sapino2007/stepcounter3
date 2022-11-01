input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showNumber(steps)
})
let steps = 0
steps = 0
basic.showNumber(0)
basic.forever(function () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # # .
        . . . . .
        `)
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showNumber(steps * 2)
    }
})
