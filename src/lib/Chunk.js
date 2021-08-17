class Chunk{
    constructor(position){
        this.pixels = new Array(CHUNK_SIZE * CHUNK_SIZE)
        this.mesh = new Mesh(position)
        this.isLoaded = false
    }

    load(){
        if(!this.isLoaded){
            for(var x = 0; x < CHUNK_SIZE; x++){
                for(var z = 0; z < CHUNK_SIZE; z++){
                    this.setPixel(x, z, PixelType.Water)
                }
            }
            this.isLoaded = true
        }
    }
    setPixel(x, z, type, heightMap = 1){
        if(!this.pixels[z * CHUNK_SIZE + x]){
            this.pixels[z * CHUNK_SIZE + x] = new Pixel()
        }
        this.pixels[z * CHUNK_SIZE + x].type = type
        this.pixels[z * CHUNK_SIZE + x].heightMap = heightMap
    }
    draw(renderer){
        renderer.drawChunk(this)
    }
}