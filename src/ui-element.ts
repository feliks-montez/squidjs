import { DisplayObject, DisplayObjectContainer } from "./entity"
import { Game } from "./squid"

export interface UIElement extends DisplayObject{}

// export class TextButton implements UIElement {
//     ctx?: CanvasRenderingContext2D
//     updateContinuously = false
//     x: number
//     y: number
//     text: string
//     constructor(x: number, y: number, text: string) {
//         this.x = x
//         this.y = y
//         this.text = text
//     }

//     pointInBounds(x: number, y: number): boolean {
//         return (
//             x > this.x-this.width/2 &&
//             x < this.x+this.width/2 &&
//             y > this.y-this.height/2 &&
//             y < this.y+this.height/2)
//     }

//     update(dt: number) {}

//     draw() {

//     }
// }

export class UIContainer implements DisplayObjectContainer {
    root?: Game
    ctx?: CanvasRenderingContext2D
    updateContinuously = false
    visible = true
    x: number
    y: number
    scale: number = 1
    width: number
    height: number
    key: string
    // children: UIElement[] = []
    mouseinside = false
    onclick?: (evt: MouseEvent) => void
    onmousemove?: (evt: MouseEvent) => void
    onmouseover?: (evt: MouseEvent) => void
    onmouseout?: (evt: MouseEvent) => void
    constructor(x: number, y: number, width: number, height: number, key: string) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.key = key
    }

    pointInBounds(x: number, y: number): boolean {
        return (
            x > this.x-this.width/2 &&
            x < this.x+this.width/2 &&
            y > this.y-this.height/2 &&
            y < this.y+this.height/2)
    }

    update(dt: number) {}

    preDraw() {}
    postDraw() {}

    draw() {
        if (this.root && this.ctx) {
            const img = this.root.images[this.key]
            this.ctx.save()
            this.ctx.translate(this.x, this.y)
            this.preDraw()
            this.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.width, this.height)
            this.postDraw()
            this.ctx.restore()
        }
    }
}