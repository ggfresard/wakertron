let container: HTMLDivElement
import "./index.css"

const setColor = async () => {
    const res = await fetch("http://localhost:8080/get-cursor-color")
    const color = await res.json()
    container.style.backgroundColor = `#${color.color}`
    container.innerHTML = `#${color.color}<br /> ${color.x}, ${color.y}`
    requestAnimationFrame(setColor)
}

document.addEventListener("DOMContentLoaded", () => {
    container = document.getElementById("container") as HTMLDivElement
    requestAnimationFrame(setColor)
})
