import customEventDispatcher from "../utils/customEventDispatcher" 

const changeLocationEvent = {
    trigger: ({payload, before, after}) => {
        // console.log('chage-current-location TRIGGERED', payload);
        if((typeof before) === 'function')before()
        customEventDispatcher.dispatchEvent(
            new CustomEvent('chage-current-location', {detail: payload})
        )
        if((typeof after) === 'function')after()
    },
    intercept: (callback) => {
        customEventDispatcher.addEventListener('chage-current-location', e => callback(e))
    }
} 

export default changeLocationEvent