let Int = 0
input.onButtonPressed(Button.A, function () {
    Int = input.compassHeading()
    basic.showNumber(Int)
})
input.onButtonPressed(Button.B, function () {
    Int = input.temperature()
    basic.showNumber(Int)
    if (25 <= Int) {
        basic.showString("Overheating!")
    } else if (25 > Int && 5 <= Int) {
        basic.showString("Normal")
    } else if (5 > Int) {
        basic.showString("Very cold!")
    }
})
basic.forever(function () {
	
})
