let START = 0
let TIME = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    START = input.runningTime()
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    TIME = input.runningTime() - START
    basic.showNumber(Math.idiv(TIME, 1000))
})
