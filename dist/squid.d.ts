import { UIElement, UIContainer } from "./ui-element";
import { Sprite } from "./sprite";
import { Game } from "./game";
import { ImageLoader } from "./image-loader";
export { ImageLoader, Game, Sprite, UIElement, UIContainer };
declare const Squid: {
    ImageLoader: typeof ImageLoader;
    Game: typeof Game;
    Sprite: typeof Sprite;
    UIContainer: typeof UIContainer;
};
export default Squid;
