class ChunkManager {
    constructor(){
        this.chunks = []
    }
    getChunkAt(x, z){
        return this.chunks.find((element) => element.x === x && element.z === z)
    }
    getChunk(x, z){
        const chunk = this.getChunkAt(x, z)
        if(!chunk){
            const element = new Chunk({x, z})
            this.chunks.push({x, z, element})
        }
        return this.getChunkAt(x, z).element
    }
    load(x, z){
        var chunk = this.getChunk(x, z)
        chunk.load()
    }
}