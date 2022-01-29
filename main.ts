let 今の明るさ = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        今の明るさ = input.lightLevel()
        if (今の明るさ < 40) {
            music.ringTone(262)
        } else if (今の明るさ < 60) {
            music.ringTone(294)
        } else if (今の明るさ < 80) {
            music.ringTone(330)
        } else if (今の明るさ < 100) {
            music.ringTone(349)
        } else if (今の明るさ < 120) {
            music.ringTone(392)
        } else if (今の明るさ < 140) {
            music.ringTone(440)
        } else if (今の明るさ < 160) {
            music.ringTone(494)
        } else {
            music.ringTone(523)
        }
    } else {
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
