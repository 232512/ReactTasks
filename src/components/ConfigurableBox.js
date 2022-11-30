import React from "react"
import Styled from 'styled-components'
const ConfigBox=Styled.div`
 border: ${props => `${props.thickness}px solid black`};
 background-color: ${props => `${props.color}`};
 width: ${props => `${props.width}`};
`
function ConfigurableBox(props){
    return <div>
       <ConfigBox thickness={props.thickness} color={props.color} width={props.width}>
           <b>configurable Box</b>
       </ConfigBox>
    </div>
}
export default ConfigurableBox