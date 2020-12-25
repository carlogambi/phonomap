import customEventDispatcher from "../utils/customEventDispatcher" 

const positionQuery = {
    trigger: (query) => {
        customEventDispatcher.dispatchEvent(
            new CustomEvent('query-positions', {detail: query})
        )
    },
    intercept: (callback) => {
        customEventDispatcher.addEventListener('query-positions', e => callback(e))
    }
} 

export default positionQuery