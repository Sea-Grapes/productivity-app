
import { v2 } from "./math"


/*
Note to self:
- implement Body2D origin
- if there is no origin it should be calculated as half width/height
- also, 

*/

class Body2D {
    constructor({
        pos = v2(),
        scale,
        angle
    } = {}, callback) {
        this.pos = pos
        if(scale) this.scale = scale
        if(angle) this.angle = angle
        World.bodies.push(this)
        if(callback) callback(this)
    }
}

class EmojiSprite extends Body2D {
    constructor() {
        super()
    }

    draw() {

    }
}

const renderLoop = requestAnimationFrame

export default new class World {
    
    #canvas
    get canvas() { return this.#canvas }
    set canvas(canvas) {
        this.#canvas = canvas
        if(!canvas) location.reload()
        this.ctx = canvas.getContext('2d')
        window.World = this

        this.bodies = []
    
        renderLoop(this.render)
    }

    render() {
        let now = Date.now()
        this.dt = now - this.lastUpdate
        this.lastUpdate = now

        this.bodies.forEach(body => body.update?.())
        this.bodies.forEach(body => {
            this.ctx.resetTransform()
            this.ctx.translate(body.pos.x, body.pos.y)
            body.draw?.()
        })

        renderLoop(this.render)
    }
}