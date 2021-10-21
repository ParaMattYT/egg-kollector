namespace SpriteKind {
    export const TREE = SpriteKind.create()
    export const king = SpriteKind.create()
    export const rock = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.rock, function (sprite, otherSprite) {
    eg.setPosition(randint(0, 153), randint(0, 113))
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.king, function (sprite, otherSprite) {
    eg.setPosition(randint(0, 153), randint(0, 113))
})
info.onLifeZero(function () {
    scene.setBackgroundImage(assets.image`cityscape`)
    animation.runImageAnimation(
    eg,
    assets.animation`blank`,
    200,
    true
    )
    eg.setPosition(10500, 10500)
    animation.runImageAnimation(
    bird,
    assets.animation`blank`,
    200,
    true
    )
    animation.runImageAnimation(
    ROCK,
    assets.animation`blank`,
    200,
    true
    )
    animation.runImageAnimation(
    TREE,
    assets.animation`blank`,
    200,
    true
    )
    animation.runImageAnimation(
    mySprite,
    assets.animation`blank`,
    200,
    true
    )
    animation.runImageAnimation(
    KING,
    assets.animation`blank`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    eg.setPosition(randint(0, 153), randint(0, 113))
    info.changeScoreBy(1)
    music.jumpUp.play()
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.TREE, function (sprite, otherSprite) {
    eg.setPosition(randint(0, 153), randint(0, 113))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let bird: Sprite = null
let ROCK: Sprite = null
let KING: Sprite = null
let eg: Sprite = null
let TREE: Sprite = null
let mySprite: Sprite = null
info.setLife(1)
info.setScore(0)
scene.setBackgroundImage(assets.image`PigBackground`)
mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
animation.runImageAnimation(
mySprite,
assets.animation`pigIdle`,
200,
true
)
mySprite.setPosition(18, 81)
TREE = sprites.create(img`
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
    `, SpriteKind.TREE)
animation.runImageAnimation(
TREE,
assets.animation`T R E E`,
200,
true
)
mySprite.setStayInScreen(true)
TREE.setPosition(117, 48)
eg = sprites.create(img`
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
    `, SpriteKind.Food)
animation.runImageAnimation(
eg,
assets.animation`eg`,
200,
true
)
eg.setStayInScreen(true)
KING = sprites.create(img`
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
    `, SpriteKind.king)
animation.runImageAnimation(
KING,
assets.animation`kingPigIdle`,
200,
true
)
KING.setPosition(10, 102)
ROCK = sprites.create(assets.image`rock`, SpriteKind.rock)
ROCK.setPosition(108, 101)
bird = sprites.create(img`
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
    `, SpriteKind.Enemy)
animation.runImageAnimation(
bird,
assets.animation`redBird`,
200,
true
)
bird.setPosition(300, 15)
bird.follow(mySprite, 30)
