import React from 'react'
import styled from 'styled-components'

export default class Modal extends React.Component{
  state={
    zIndex:'3'
  }

  handleClcik = () => {
  }



  render(){
    let ContentBox = null
    const {content,data} = this.props;
    if(content.type === 'youtube'){
      ContentBox = <iframe src="https://www.youtube.com/embed/videoseries?list=PLGhOCcpfhWjf_EGjeaWqOqR9xz1M4WnTD&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen />
    }else if(content.type === 'jieun'){
      ContentBox = <iframe src="https://jieuninus.com/" frameBorder="0"/>
    }else if(content.type === 'dc'){
      ContentBox = <iframe src="https://m.dcinside.com/board/iu_new" frameBorder="0"/>
    }else if(content.type === 'daum'){
      ContentBox = <iframe src="http://cafe.daum.net/IU" frameBorder="0"/>
    }else if(content.type === 'insta'){
      ContentBox = (
        <React.Fragment>
        <div>
          123
        </div>
        <span>
          glglgl
        </span>
        </React.Fragment>
      )
    }

    return(
      
      <ModalBox size={this.props.modalSize} onClick={this.handleClcik} zIndex={this.state.zIndex} position={this.props.content.type}>
        <ModalHead>
          <CloseButton onClick={this.props.close}/>
          <span>{this.props.content.name}</span>
          <Line position="5"/>
          <Line position="9"/>
          <Line position="13"/>
          <Line position="17"/>
          <Line position="21"/>
        </ModalHead>        
        {ContentBox}
      </ModalBox>
    )
  }
}

const CloseButton = styled.button`
  position:absolute;
  top:6px;
  left:12px;
  background:#fff;
  border:1px solid #000;
  width:15px;
  height:15px;
  z-index:2;
  &:before{
    content:'';
    background:#000;
  }
  &:focus{
    outline:none;
  }
`

const Line = styled.hr`
  top:${props => props.position}px;
  position:absolute;
  width:100%;
  height:1px;
  background:#000;
  margin:0;
  border:0;
`

// position:absolute;
//   z-index:${props => props.zIndex};
//   top:${props => {
//     switch(props.position){
//       case 'song':return 100;
//       case 'gif' : return 200;
//       case 'youtube' : return 300;
//       case 'daum' : return 400;
//       case 'dc' : return 500;
//       case 'jieun' : return 600;
//       case 'insta' : return 700;
//       default : return 42;
//     }
//   }}px;
  
//   left:200px;

const ModalBox = styled.div`
  background:#fff;
  border:1px solid #000;
  box-shadow:6px 6px 0px rgba(0,0,0,0.7);
  width:100%;
  height:100%;
  >iframe{
    width:100%;
    height:calc(100% - 26px);
  }
`

const ModalHead = styled.div`
  position:relative;
  height:26px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-bottom:1px solid #614de2;
  background:#cdc7f6;
  >span{
    padding:5px 6px;
    background:#fff;
    position:relative;
    z-index:2;
  }
  &:after{
    content: '';
    background: #cdc7f6;
    position: absolute;
    width: 22px;
    height: 22px;
    top: 0;
    left: 9px;
  }
`