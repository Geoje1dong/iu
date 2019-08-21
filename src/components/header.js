import React from 'react'
import styled from 'styled-components'
import Logo from '../logo.png'

export default class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {timer: new Date()}
  }
  clock = () => {
    this.setState({timer: new Date()})
  }

  componentDidMount(){
    setInterval(() => {
      this.clock();
    }, 1000);
  }
  render(){
    return(
      <StyledHeader>
        <ul>
          <li><img src={Logo}/></li>
          {/* <li>About</li> */}
          {/* <li>스피커</li> */}
          <li>{this.state.timer.toLocaleTimeString()}</li>
        </ul>
      </StyledHeader>
    )
  }
}

const StyledHeader = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  display:flex;
  height:24px;
  color:#010103;
  background:#cdc7f6;
  border-top:1px solid #fefeff;
  border-bottom:1px solid #614de2;
  align-items:center;
  > ul {
    display:flex;
    width:100%;
    align-items:center;
    >li{
      padding:0 16px;
      line-height:1em;
      >img{
        width:auto;
        height:20px;
      }
      &:last-child{
        margin-left:auto;
      }
    }
  }
`