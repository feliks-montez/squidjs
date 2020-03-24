declare type image_urls = {
    [key: string]: string;
};
export declare type image_dict = {
    [key: string]: HTMLImageElement;
};
export declare class ImageLoader {
    images: image_dict;
    yetToLoad: string[];
    constructor(images: image_urls, onload: (images: image_dict) => void);
}
export {};
