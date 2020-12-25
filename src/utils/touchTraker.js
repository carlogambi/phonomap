const touchTraker = (callback) => {
    document.ontouchmove = (e) => callback({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
    })
}

export default touchTraker