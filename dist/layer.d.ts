import { DisplayObject } from "./entity";
import { Game } from "./game";
export declare class Layer {
    name: string;
    canvas: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    root?: Game;
    updateContinuously: boolean;
    visible: boolean;
    children: DisplayObject[];
    onclick?: (evt: MouseEvent) => void;
    onmousemove?: (evt: MouseEvent) => void;
    constructor(name: string, canvas: HTMLCanvasElement, updateContinuously?: boolean, visible?: boolean);
    get width(): number;
    get height(): number;
    update(dt: number): void;
    draw(): void;
    add(obj: DisplayObject): void;
}
