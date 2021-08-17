class Renderer{
    constructor(){
        this.meshes = []
    }
    drawChunk(chunk){
        this.meshes.push(chunk.mesh)
    }
    render(){
        for(var iMesh in this.meshes){
            const mesh = this.meshes[iMesh]
            var meshX = mesh.position.x
            var meshZ = mesh.position.z
            context.putImageData(mesh.imgData, meshX, meshZ)
        }
    }
}