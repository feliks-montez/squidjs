export type image_urls = { [key: string]: string }
export type image_dict = { [key: string]: HTMLImageElement }

export class ImageLoader {
    images: image_dict = {} // urls to load
    yetToLoad: string[]  = []
    constructor(images: image_urls, onload: (images: image_dict) => void) {
        Object.keys(images).forEach((key: string) => {
            this.yetToLoad.push(key)
            const i = new Image()
            i.onload = (() => {
                this.yetToLoad.splice(this.yetToLoad.indexOf(key), 1)
                if (this.yetToLoad.length == 0) onload(this.images)
            }).bind(this)
            i.src = images[key]
            this.images[key] = i
        })
    }
}