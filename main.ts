sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setPosition(141, 91)
    sprite.setVelocity(-34, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    gayvity = -75
    for (let index = 0; index < 150; index++) {
        gayvity += 1
        mySprite.setVelocity(0, gayvity)
        pause(10)
    }
    mySprite.setPosition(70, 91)
    mySprite.setVelocity(0, 0)
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    sprite.setPosition(141, 91)
    sprite.setVelocity(-34, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    info.changeScoreBy(1)
    scaling.scaleByPixels(mySprite, 1, ScaleDirection.Horizontally, ScaleAnchor.Middle)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    info.changeScoreBy(-1)
    scaling.scaleByPixels(mySprite, -1, ScaleDirection.Horizontally, ScaleAnchor.Middle)
})
info.onScore(50, function () {
    mySprite.sayText("u chonk")
})
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let FoodTexture = 0
let one = 0
let gayvity = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.setPosition(70, 91)
scene.setBackgroundImage(assets.image`myImage1`)
info.setScore(0)
let MrBeast = -50
forever(function () {
    one = 1
    scroller.scrollBackgroundWithSpeed(MrBeast, 0)
    mySprite.setImage(assets.image`myImage0`)
    pause(100)
    mySprite.setImage(assets.image`myImage`)
    pause(100)
})
forever(function () {
    pause(randint(1000, 5000))
    FoodTexture = randint(2, 1)
    if (FoodTexture == one) {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . 4 4 4 4 4 4 4 4 4 4 4 . . . . 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            4 4 4 2 2 4 4 4 4 4 4 4 4 4 4 4 
            4 4 7 7 2 2 2 2 7 7 7 2 2 2 4 4 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 e e e e e e e e e e e e e e 5 
            4 e e e e e e e e e e e e e e 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
    } else {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 4 . . . . . . 5 4 . . . 
            . . . 5 4 5 4 5 4 5 4 5 4 . . . 
            . . . 5 4 5 4 5 4 5 4 5 4 . . . 
            . . 2 5 4 5 4 5 4 5 4 5 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 5 2 2 5 2 2 5 5 2 2 . . 
            . . 2 2 5 5 2 5 2 5 2 2 5 2 . . 
            . . 2 2 5 5 5 5 2 5 5 5 5 2 . . 
            . . . 2 5 2 5 5 2 5 2 2 5 2 . . 
            . . . 2 5 2 2 5 2 5 2 2 5 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            `, SpriteKind.Food)
    }
})
forever(function () {
    pause(randint(2000, 10000))
    mySprite3 = sprites.create(assets.image`carrot`, SpriteKind.Enemy)
})
