import customEventDispatcher from "../utils/customEventDispatcher" 

const stepDuration = 1000 //millisecondi
const stepsNumber = 6
let currentStep = 0
const stop = () => clearInterval(step)

const step = setInterval(() => {
    customEventDispatcher.dispatchEvent(
        new CustomEvent('animation-step', {detail:{ currentStep, stepsNumber}})
    )
    currentStep = currentStep +1
    if(stepsNumber < currentStep){
        stop()
    }
}, stepDuration);


const initAnimationManager = { 
    initAnimation: () => step, 
    interceptInitAnimation: (callback) => customEventDispatcher.addEventListener('animation-step', (e) => callback(e.detail)) 
}

export default initAnimationManager