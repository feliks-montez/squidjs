import { Layer } from "./layer"
import { Game } from "./squid"

export interface vector_i {
    x: number
    y: number
    rot: number
}

export const zeroVector: vector_i = {x: 0, y: 0, rot: 0}

export interface DisplayObject {
    root?: Game
    layer?: Layer
    updateContinuously: boolean
    visible: boolean
    mouseinside: boolean
    x: number
    y: number
    scale: number

    update(dt: number): void
    draw(): void
    pointInBounds(x: number, y: number): boolean
    onclick?: (evt: MouseEvent) => void
    onmousemove?: (evt: MouseEvent) => void
    onmouseover?: (evt: MouseEvent) => void
    onmouseout?: (evt: MouseEvent) => void
}

export interface DisplayObjectContainer extends DisplayObject {

}

export class BoxEntity implements DisplayObject {
    ctx?: CanvasRenderingContext2D
    layer?: Layer
    updateContinuously: boolean
    visible: boolean
    position: vector_i
    velocity: vector_i
    acceleration: vector_i
    mouseinside = false
    scale = 1
    width: number
    height: number

    constructor(position: vector_i, w: number, h: number, {
        updateContinuously = true,
        visible = true,
        velocity = {x: 0, y: 0, rot: 0},
        acceleration = {x: 0, y: 0, rot: 0}
    }, devAttrs?: Object) {
        this.width = w;
        this.height = h;
        this.updateContinuously = updateContinuously
        this.visible = visible
        this.position = position
        this.velocity = velocity
        this.acceleration = acceleration
        Object.assign(this, arguments[2])
    }

    get x() {
        return this.position.x
    }

    get y() {
        return this.position.y
    }

    pointInBounds(x: number, y: number): boolean {
        return (
            x > this.x-this.width/2 &&
            x < this.x+this.width/2 &&
            y > this.y-this.height/2 &&
            y < this.y+this.height/2)
    }

    update(dt: number) {
        this.position.x += this.velocity.x * dt
        this.position.y += this.velocity.y * dt
        this.position.rot += this.velocity.rot * dt
        this.velocity.x += this.acceleration.x * dt
        this.velocity.y += this.acceleration.y * dt
        this.velocity.rot += this.acceleration.rot * dt
    }

    draw() {

    }
}
