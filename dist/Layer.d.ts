import { DisplayObject } from "./entity";
export declare class Layer {
    name: string;
    canvas: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    updateContinuously: boolean;
    visible: boolean;
    children: DisplayObject[];
    constructor(name: string, canvas: HTMLCanvasElement, updateContinuously?: boolean, visible?: boolean);
    get width(): number;
    get height(): number;
    update(dt: number): void;
    draw(): void;
}
