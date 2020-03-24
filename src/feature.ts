
interface Feature {
    depencencies: Feature[]
    attrs: {
        [attr: string]: any
    }
}
let Features: {[name: string]: Feature} = {}

Features.SpacialBody = {
    depencencies: [],
    attrs: {
        position: {
            x: 0,
            y: 0,
            rotation: 0
        }
    }
}