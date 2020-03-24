import './entity'
import { vector_i, DisplayObject } from './entity'
import { Game } from './game'

export type sprite_states = {
    default: number[] | number[][]
    [name: string]: number[] | number[][]
}

export type sprite_data = {
    states: sprite_states
}

export class Sprite implements DisplayObject {
    root?: Game
    ctx?: CanvasRenderingContext2D
    position: vector_i
    velocity: vector_i = {x: 0, y: 0, rot: 0}
    acceleration: vector_i = {x: 0, y: 0, rot: 0}
    key: string
    numrows: number
    numcols: number
    frame: number | number[]
    fps: number
    dtSum: number = 0
    updateContinuously: boolean = true
    visible: boolean = true
    scale: number = 1
    onclick?: (evt: MouseEvent) => void
    onmousemove?: (evt: MouseEvent) => void
    spriteData: sprite_data = {
        states: {
            default: [0]
        }
    }
    animIndex = 0
    constructor(x: number, y: number, key: string, numcols=1, numrows=1, fps=0) {
        this.position = {x: x, y: y, rot: 0}
        this.key = key
        this.numcols = numcols
        this.numrows = numrows
        this.frame = this.spriteData.states["default"][0]
        this.fps = fps
        console.log("Sprite()")
    }

    get x() {
        return this.position.x
    }
    set x(n: number) {
        this.position.x = n
    }

    get y() {
        return this.position.y
    }
    set y(n: number) {
        this.position.y = n
    }

    get rotation() {
        return this.position.rot
    }
    set rotation(rad: number) {
        this.position.rot = rad
    }

    get angle() {
        return this.position.rot * 180/2/Math.PI
    }
    set angle(ang: number) {
        this.position.rot = ang * 2*Math.PI/180
    }

    get swidth() {
        return this.image.width / this.numcols
    }
    get sheight() {
        return this.image.height / this.numrows
    }

    get width() {
        return this.swidth * this.scale
    }
    get height() {
        return this.sheight * this.scale
    }

    get image() {
        return this.root!.images[this.key]
    }
    getSRow(frame: number) {
        return Math.floor(frame / this.numcols)
    }
    getSCol(frame: number) {
        return frame % this.numcols
    }

    get curState(): keyof sprite_states {
        return "default"
    }

    pointInBounds(x: number, y: number): boolean {
        return (
            x > this.x-this.width/2 &&
            x < this.x+this.width/2 &&
            y > this.y-this.height/2 &&
            y < this.y+this.height/2)
    }

    setNextFrame() {
        const frameList = this.spriteData.states[this.curState]
        this.animIndex = (this.animIndex + 1) % frameList.length
        this.frame = frameList[this.animIndex]
    }

    calculateFrame(dt: number) {
        this.dtSum = this.dtSum + dt
        if (this.dtSum >= 1/this.fps) {
            this.setNextFrame()
            this.dtSum -= 1/this.fps
        }
    }

    update(dt: number) {
        this.position.x += this.velocity.x * dt
        this.position.y += this.velocity.y * dt
        this.position.rot += this.velocity.rot * dt
        this.velocity.x += this.acceleration.x * dt
        this.velocity.y += this.acceleration.y * dt
        this.velocity.rot += this.acceleration.rot * dt
        this.calculateFrame(dt)
    }

    preDraw() {}

    postDraw() {}

    draw() {
        console.log("draw()")
        if (this.ctx) {
            this.ctx.save()
            this.ctx.translate(this.x, this.y)
            this.ctx.rotate(this.rotation)
            this.preDraw()
            if (this.frame instanceof Array) {
                this.frame.forEach(frame => {
                    this.ctx!.drawImage(this.root?.images[this.key]!, this.swidth*this.getSCol(frame), this.sheight*this.getSRow(frame), this.swidth, this.sheight, 
                    -this.width/2, -this.height/2, this.width, this.height)
                })
            } else {
                this.ctx.drawImage(this.root?.images[this.key]!, this.swidth*this.getSCol(this.frame), this.sheight*this.getSRow(this.frame), this.swidth, this.sheight, 
                    -this.width/2, -this.height/2, this.width, this.height)
            }
            this.postDraw()
            this.ctx.restore()
        }
    }
}

export class AnimationSprite extends Sprite {
    numrows: number
    numcols: number
    frame: number
    constructor(x: number, y: number, key: string, numrows: number, numcols: number, frame=0) {
        super(x, y, key)
        this.numrows = numrows
        this.numcols = numcols
        this.frame = frame
    }


}