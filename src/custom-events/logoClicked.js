import customEventDispatcher from "../utils/customEventDispatcher" 

const logoClickedEvent = {
    trigger: () => {
        customEventDispatcher.dispatchEvent(
            new CustomEvent('logo-clicked')
        )
    },
    intercept: (callback) => {
        customEventDispatcher.addEventListener('logo-clicked', e => callback(e))
    }
} 

export default logoClickedEvent