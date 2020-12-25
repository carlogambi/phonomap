const mouseTraker = (callback) => {
    document.onmousemove = (e) => callback({
        x: e.clientX,
        y: e.clientY
    })
}

export default mouseTraker