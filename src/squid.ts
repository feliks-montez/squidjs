import { DisplayObject } from "./entity";
import { UIElement, UIContainer } from "./ui-element"
import { Sprite } from "./sprite";
import { Game } from "./game"
import { ImageLoader } from "./image-loader"

export { ImageLoader, Game, Sprite, UIElement, UIContainer }

const Squid = {
    ImageLoader: ImageLoader,
    Game: Game,
    Sprite: Sprite,
    UIContainer: UIContainer
}
export default Squid