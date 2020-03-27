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

export class BoxEntity {
    ctx?: CanvasRenderingContext2D
    updateContinuously: boolean
    visible: boolean
    position: vector_i
    velocity: vector_i
    acceleration: vector_i
    constructor(position: vector_i, {
        updateContinuously = true,
        visible = true,
        velocity = {x: 0, y: 0, rot: 0},
        acceleration = {x: 0, y: 0, rot: 0}
    }, devAttrs?: Object) {
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

    update(dt: number) {

    }

    draw() {

    }
}