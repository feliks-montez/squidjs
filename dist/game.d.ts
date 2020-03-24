import { Layer } from "./layer";
import { image_urls, image_dict } from "./image-loader";
/**
 * @param layers an object with layer names as keys and their corresponding canvas IDs
 */
export declare class Game {
    layers: {
        [name: string]: Layer;
    };
    lastTime: number;
    images: image_dict;
    width: number;
    height: number;
    constructor(width: number, height: number, layers: {
        [name: string]: string;
    }, imageUrls: image_urls);
    set dims(d: number[]);
    update(dt: number): void;
    draw(): void;
    gameLoop(): void;
}
