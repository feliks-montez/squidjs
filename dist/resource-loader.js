"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageLoader {
    constructor(images, onload) {
        this.images = {}; // urls to load
        this.yetToLoad = [];
        images.keys().forEach((key) => {
            this.yetToLoad.push(key);
            const i = new Image();
            i.onload = (() => {
                this.yetToLoad.slice(this.yetToLoad.indexOf(key), 1);
                if (this.yetToLoad.length == 0)
                    onload(this.images);
            }).bind(this);
            i.src = images[key];
            this.images[key] = i;
        });
    }
}
exports.ImageLoader = ImageLoader;
//# sourceMappingURL=resource-loader.js.map