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
    ctx?: CanvasRenderingContext2D
    updateContinuously: boolean
    visible: boolean
    x: number
    y: number

    update(dt: number, parent?: DisplayObject | Layer): void
    draw(): void
    pointInBounds(x: number, y: number): boolean
    onclick?: (evt: MouseEvent) => void
    onmousemove?: (evt: MouseEvent) => void
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



    update(dt: number, parent: DisplayObject | Layer) {

    }

    draw() {

    }
}