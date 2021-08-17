const chunk = document.getElementById('chunk')
const context = chunk.getContext('2d')
const title = "Noise map - Simulator"

context.canvas.width = WINDOW_WIDTH
context.canvas.height = WINDOW_HEIGHT

var renderer = new Renderer()
var app = new Application(title, renderer)
app.runLoop()