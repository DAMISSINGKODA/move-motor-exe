let police = false
input.onButtonPressed(Button.AB, function () {
    police = true
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
})
basic.forever(function () {
    let INDICATING = 0
    if (INDICATING && !(police)) {
        if (input.lightLevel() > 20) {
            let rear_lights: Kitronik_Move_Motor.MoveMotorZIP = null
            let headlights: Kitronik_Move_Motor.MoveMotorZIP = null
            headlights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
            rear_lights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple))
        } else {
            let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
            moveMotorZIP.clear()
            moveMotorZIP.show()
        }
    }
})
