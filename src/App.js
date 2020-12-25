import React, {useEffect, useState} from 'react'
import BGmap from './components/BGmap'
import LogoPhonomap from './components/LogoPhonomap'
import PhonoContainer from './components/PhonoContainer'
import initAnimationManager from  './custom-events/initAnimationStep'
import positionQuery from './custom-events/positionsQuery'
import exampleDataPositions from './utils/example-data.json'


const logoStyle = {
  width: '150px',
  position: 'absolute',
  left: '50%',
  top: '88%',
  transition: 'left 1s ease-in-out, top 1s ease-in-out, width 1s ease-in-out'
}

const initLogoStyle = {
  width: '400px',
  position: 'absolute',
  left: '50%',
  top: '50%',
}

const App = () => {
  const [animationSteps, setAnimationSteps] = useState({})
  const [positions, setPositions] = useState(exampleDataPositions)
  const authorList = [...new Set(exampleDataPositions.map(p => p.author))]
  useEffect(() => {
    initAnimationManager.interceptInitAnimation((e) => e !== animationSteps && setAnimationSteps(e))
    positionQuery.intercept((e) => {
      switch (e.detail.field) {
        case 'author':
            if(e.detail.query === 'ALL AUTHORS'){
              setPositions(exampleDataPositions)
            }else{
            const filtered = exampleDataPositions.filter(p => p.author === e.detail.query)
            setPositions(filtered)
            }
          break
        default:
          break
      }
    })
  }, [animationSteps, positions])
  return (<>
      {false && <div style={{position:'absolute',zIndex:100,top:'10px',left:'50px', backgroundColor:'yellow', padding:'10px',fontFamily:'sans-serif'}}>
        {animationSteps.currentStep}/{animationSteps.stepsNumber}
      </div>}
      {animationSteps.currentStep >= 0 && 
        <LogoPhonomap 
            style={(animationSteps.currentStep >= 3 )?logoStyle:initLogoStyle} 
            showInfo={false} 
            setDeviation={(prev) => prev}
        />
        }
      <BGmap animationSteps={animationSteps} positions={positions}/>
      {animationSteps.currentStep > 2 && <PhonoContainer authorList={authorList}/>}
  </>
  )
}

export default App