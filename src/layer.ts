import { DisplayObject } from "./entity"
import { Sprite } from "./squid"
import { Game } from "./game"

// layer canvas should occupy full screen

function matrix_2x3_create() {
    // [a, b, c, d, e, f]
    // equals:
    // [ a c e ]
    // [ b d f ]
    return new Float32Array([1, 0,  0, 1,  0, 0]);
}

function matrix_2x3_equals(a: Float32Array, b: Float32Array) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;
}

export class Layer {
    name: string
    canvas: HTMLCanvasElement
    ctx?: CanvasRenderingContext2D
    root?: Game
    updateContinuously: boolean = true
    visible: boolean = true
    children: DisplayObject[] = []
    redraw = true

    _viewMatrix: Float32Array = matrix_2x3_create()

    // unused, but implement Drawable
    // position = {x: 0, y: 0, rot: 0}
    // velocity = {x: 0, y: 0, rot: 0}
    // acceleration = {x: 0, y: 0, rot: 0}
    constructor(name: string, canvas: HTMLCanvasElement, updateContinuously=true, visible=true) {
        this.name = name
        this.canvas = canvas
        const ctx = this.canvas.getContext('2d')
        ctx ? this.ctx = ctx : console.log("failed to get 2D context for Layer:", this.name)
        this.updateContinuously = updateContinuously
        this.visible = visible

        this.canvas.onclick = (evt) => {
            if (this.onclick) this.onclick(evt)
            this.children.forEach(child => {
                // if (evt.offsetX > child.x-child.width/2 &&
                //     evt.offsetX < child.x+child.width/2 &&
                //     evt.offsetY > child.y-child.height/2 &&
                //     evt.offsetY < child.y+child.height/2) {
                //     if (child.onclick) child.onclick()
                // }
                if (child.onclick && child.pointInBounds(evt.offsetX, evt.offsetY)) child.onclick(evt)
            })
        }

        this.canvas.onmousemove = (evt) => {
            if (this.onmousemove) this.onmousemove(evt)
            this.children.forEach(child => {
                if (child.onmousemove && child.pointInBounds(evt.offsetX, evt.offsetY)) child.onmousemove(evt)
            })
        }
    }

    get width() {
        return this.canvas.width
    }

    get height() {
        return this.canvas.height
    }

    setViewMatrix(m: Float32Array) {
        // only update if matrix values have changed
        if (matrix_2x3_equals(this._viewMatrix, m) == false) {
            this._viewMatrix = m;
            this.redraw = true;
        }
    }

    setTranslation(x: number, y: number) {
        const m = new Float32Array(this._viewMatrix);
        m[4] = x; // e
        m[5] = y; // f
        this.setViewMatrix(m);
    }

    setScaling(x: number, y: number) {
        const m = this._viewMatrix;
        m[0] = x; // a
        m[3] = y; // d
        this.setViewMatrix(m);
    }

    update(dt: number) {
        const m = this._viewMatrix;
        this.ctx!.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
        // this.ctx?.setTransform(1, 0, 0, 0, 1, 0);

        // this.position.x += this.velocity.x * dt
        // this.position.y += this.velocity.y * dt
        // this.position.rot += this.velocity.rot * dt
        // this.velocity.x += this.acceleration.x * dt
        // this.velocity.y += this.acceleration.y * dt
        // this.velocity.rot += this.acceleration.rot * dt
        this.children.forEach(child => {
            if (child.updateContinuously) child.update(dt)
        })
    }

    draw() {
        if (this.ctx) {
            this.ctx.save()
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
            this.children.forEach(child => {
                if (child.visible) child.draw()
            })
            this.ctx.restore()
        }

        console.log("REDRAW")
        // this.redraw = false;
    }

    onclick(evt: MouseEvent) {
        this.children.forEach(child => {
            if (child.onclick && child.pointInBounds(evt.offsetX, evt.offsetY)) child.onclick(evt)
        })
    }

    onmousemove(evt: MouseEvent) {
        this.children.forEach(child => {
            if (child.onmousemove && child.pointInBounds(evt.offsetX, evt.offsetY)) child.onmousemove(evt)
            if (child.mouseinside && !child.pointInBounds(evt.offsetX, evt.offsetY)) {
                if (child.onmouseout) child.onmouseout(evt)
                child.mouseinside = false
            } else if (!child.mouseinside && child.pointInBounds(evt.offsetX, evt.offsetY)) {
                if (child.onmouseover) child.onmouseover(evt)
                child.mouseinside = true
            }
        })
    }

    add(obj: DisplayObject) {
        obj.root = this.root
        obj.layer = this;
        this.children.push(obj)
    }
}