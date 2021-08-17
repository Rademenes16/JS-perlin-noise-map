const chunk = document.getElementById('chunk')
const context = chunk.getContext('2d')
const title = "Noise map - Simulator"

context.canvas.width = WINDOW_WIDTH
context.canvas.height = WINDOW_HEIGHT

const seed = Math.random() * 10000
var noiseGenerator = new NoiseGenerator(seed)

for (var x = 0; x<10; x++){
    for(var z = 0; z<10; z++){
    console.log(noiseGenerator.perlinNoise(x, z))
}}
var camera = new Camera ({x: 150000, z: 150000})
var renderer = new Renderer()
var app = new Application(title, renderer, noiseGenerator, camera)
app.loadEvents()
app.runLoop()