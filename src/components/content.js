import React from 'react'
import styled from 'styled-components'
import Modal from './modal'
import InstaModal from './instaModal';
import Rnd from "react-rnd";


const defaultIuFiles = [
  // {
  //   type:'song',
  //   name:'IU-Song',
  //   img:<svg className="song" xmlns="http://www.w3.org/2000/svg" width="32" height="19.86"><path className="st0" d="M31.45.55H32v18.76h-.55zM30.34 18.21h.55v.55h-.55zM30.34 1.1h.55v.55h-.55zM25.93 7.72v-1.1h-.55v4.97h.55v-1.1h3.86v4.41h.55V1.65h-.55v6.07h-3.86zm3.86 2.21h-3.86V8.28h3.86v1.65z"/><path className="st0" d="M28.69 2.76h.55v1.66h-.55zM3.31 4.41h25.38v.55H3.31zM26.48 16.55h.55v1.66h-.55zM27.59 18.21h-.56v1.1H4.97v-1.1h-.56v1.1H.55v.55h30.9v-.55h-3.86zM24.83 17.65h.55v.55h-.55z"/><path className="st0" d="M24.28 18.21h.55v.55h-.55zM24.28 17.1h.55v.55h-.55zM6.62 11.59h18.76v.55H6.62zM24.28 8.28h.55v1.66h-.55zM23.72 17.65h.55v.55h-.55zM23.72 9.93h.55v.55h-.55zM23.72 7.72h.55v.55h-.55zM22.07 10.48h1.65v.55h-1.65zM22.07 7.17h1.65v.55h-1.65zM21.52 17.1h.55v1.1h-.55zM21.52 9.93h.55v.55h-.55zM21.52 7.72h.55v.55h-.55zM20.41 16.55h1.1v.55h-1.1zM20.97 8.28h.55v1.66h-.55zM20.41 18.21h1.1v.55h-1.1zM19.86 17.1h.55v1.1h-.55zM12.14 11.03h7.72V7.17h-7.72v3.86zm.55-3.31h1.1v.55h.55v-.55h3.31v.55h.55v-.55h1.1v2.76h-1.1v-.55h-.55v.55h-3.31v-.55h-.55v.55h-1.1V7.72z"/><path className="st0" d="M17.1 8.28h.55v1.66h-.55zM14.34 8.28h.55v1.66h-.55zM11.59 17.1h.55v1.1h-.55zM10.48 16.55h1.1v.55h-1.1zM10.48 18.21h1.1v.55h-1.1zM10.48 8.28h.55v1.66h-.55zM9.93 17.1h.55v1.1h-.55zM9.93 9.93h.55v.55h-.55zM9.93 7.72h.55v.55h-.55zM8.28 10.48h1.65v.55H8.28zM8.28 7.17h1.65v.55H8.28zM7.72 17.65h.55v.55h-.55zM7.72 9.93h.55v.55h-.55zM7.72 7.72h.55v.55h-.55zM7.17 18.21h.55v.55h-.55zM7.17 17.1h.55v.55h-.55zM7.17 8.28h.55v1.66h-.55zM6.62 6.07h18.76v.55H6.62zM6.62 17.65h.55v.55h-.55zM6.07 3.31h19.86v.55H6.07zM6.07 15.45h19.86v1.1h.55v-1.1h3.31v-.55H2.21v.55h3.31v1.1h.55zM4.97 16.55h.55v1.66h-.55zM3.31 2.21h25.38v.55H3.31zM2.76 2.76h.55v1.66h-.55zM29.24 1.65h.55V1.1H2.21v.55h.55z"/><path className="st0" d="M6.07 10.48v1.1h.55V6.62h-.55v1.1H2.21V1.65h-.55V14.9h.55v-4.41h3.86zm-3.86-2.2h3.86v1.66H2.21V8.28zM1.1 18.21h.55v.55H1.1zM1.1 1.1h.55v.55H1.1zM.55 0h30.9v.55H.55zM0 .55h.55v18.76H0z"/><g><path className="st1" d="M18.21 7.72v.56h-.55v1.65h.55v.55h1.1V7.72zM13.79 7.72h-1.1v2.76h1.1v-.55h.55V8.28h-.55z"/></g><g><path className="st2" d="M14.34 7.72v.56h.56v1.65h-.56v.55h3.32v-.55h-.56V8.28h.56v-.56zM24.28 8.28h-.56v-.56h-1.65v.56h-.55v1.65h.55v.55h1.65v-.55h.56z"/><path className="st3" d="M20.41 17.1h1.1v1.1h-1.1zM10.48 17.1h1.1v1.1h-1.1z"/><path className="st2" d="M10.48 8.28h-.55v-.56H8.28v.56h-.56v1.65h.56v.55h1.65v-.55h.55z"/></g><g><path className="st2" d="M28.69 4.41V2.76H3.31v1.66h25.38zM6.07 3.86v-.55h19.86v.55H6.07zM24.28 17.65h.55v.55h-.55zM7.17 17.65h.55v.55h-.55z"/></g><g><path className="st4" d="M25.93 9.38h3.86v.55h-3.86zM2.21 9.38h3.86v.55H2.21z"/></g><g><path className="st5" d="M25.93 8.83h3.86v.55h-3.86zM2.21 8.83h3.86v.55H2.21z"/></g><g><path className="st4" d="M2.21 1.65v6.07h3.86v-1.1h.55v-.55h18.76v.55h.55v1.1h3.86V1.65H2.21zm27.03 2.76h-.55v.55H3.31v-.55h-.55V2.76h.55v-.55h25.38v.55h.55v1.65zM25.93 10.48v1.11h-.55v.55H6.62v-.55h-.55v-1.11H2.21v4.42h27.58v-4.42z"/></g><g><path className="st6" d="M25.93 8.28h3.86v.55h-3.86zM6.62 6.62v4.97h18.76V6.62H6.62zm1.66 4.41v-.55h-.56v-.55h-.55V8.28h.55v-.56h.55v-.55h1.65v.55h.55v.55h.55v1.66h-.55v.55h-.54v.55H8.28zm3.86 0V7.17h7.72v3.86h-7.72zm12.69-1.1h-.55v.55h-.55v.55h-1.65v-.55h-.55v-.55h-.55V8.28h.55v-.56h.55v-.55h1.65v.55h.55v.55h.55v1.66z"/><path className="st7" d="M27.03 19.31v-1.1h-.55v-1.66h-.55v-1.1H6.07v1.1h-.55v1.66h-.55v1.1h22.06zm-2.75-.55v-.55h-.55v-.55h.55v-.56h.55v.55h.55v.55h-.55v.55h-.55zm-17.11 0v-.55h-.55v-.55h.55v-.56h.55v.55h.55v.55h-.55v.55h-.55zm3.31 0v-.55h-.55v-1.1h.55v-.55h1.1v.55h.55v1.1h-.55v.55h-1.1zm9.93 0v-.55h-.55v-1.1h.55v-.55h1.1v.55h.55v1.1h-.55v.55h-1.1z"/><path className="st6" d="M2.21 8.28h3.86v.55H2.21z"/><path className="st7" d="M4.97 16.55h.55v-1.1H2.21v-.55h-.55V1.65H1.1V1.1h.55v.55h.55V1.1h27.59v.55h.55V1.1h.55v.55h-.55V14.9h-.55v.55h-3.31v1.1h.55v1.66h.55v1.1H31.44V.55H.55v18.76h3.86v-1.1h.55v-1.66zm25.93 2.21h-.55v-.55h.55v.55zm-29.8 0v-.55h.55v.55H1.1z"/></g></svg>,
  //   modalSize:'xl',
  //   xPosition:'0',
  //   yPostiion:'20'
  // },
  // {
  //   type:'gif',
  //   name:'IU-움짤',
  //   img:'',
  //   modalSize:'l',
  //   xPosition:'0',
  //   yPostiion:'400'
  // },
  {
    type:'youtube',
    name:'Youtube',
    img:<svg className="youtube" xmlns="http://www.w3.org/2000/svg" width="32" height="22.41"><path d="M31.34 3.51A4.01 4.01 0 0 0 28.52.69C26.02 0 16 0 16 0S5.98 0 3.48.66A4.1 4.1 0 0 0 .66 3.51C0 6.01 0 11.2 0 11.2s0 5.22.66 7.7a4.01 4.01 0 0 0 2.82 2.82c2.53.69 12.52.69 12.52.69s10.02 0 12.52-.66a4.01 4.01 0 0 0 2.82-2.82c.66-2.5.66-7.7.66-7.7s.03-5.22-.66-7.72z" fill="red"/><path d="M12.81 16l8.33-4.8-8.33-4.8V16z" fill="#fff"/></svg>,
    modalSize:'',
    xPosition:'0',
    yPostiion:'20'
  },
  {
    type:'daum',
    name:'CAFE',
    img:<svg className="daum" xmlns="http://www.w3.org/2000/svg" width="32" height="32.4"><g id="다음Cafe_1_"><path fill="#e43d29" d="M0 0h32v32.4H0z"/><path className="st1" d="M12.49 16.61h.98l-.49-1.09z"/><path className="st1" d="M26.61 14.16h-1.25a11.1 11.1 0 1 0 0 4.08h1.25a2.04 2.04 0 1 0 0-4.08m-16.54 3.82c-.38.27-.82.41-1.31.41-.59 0-1.11-.21-1.56-.64a2.05 2.05 0 0 1-.67-1.54c0-.6.22-1.12.67-1.54.45-.43.97-.64 1.56-.64.49 0 .93.14 1.31.41.38.27.64.63.77 1.08H9.7a1.04 1.04 0 0 0-.94-.55c-.69 0-1.08.69-1.08 1.23 0 .65.47 1.29 1.1 1.29.59 0 .82-.41.92-.59h1.14c-.13.45-.39.81-.77 1.08m4.01.41l-.25-.64h-1.71l-.25.64h-1.03l1.87-4.18h.53l1.87 4.18h-1.03zm4.42-3.55h-2.09v.99h1.74v.73h-1.74v1.83h-1.03v-4.38h3.13v.83zm3.73 3.55h-3.18v-4.18h3.13v.73h-2.19v.99h1.84v.73h-1.84v.99h2.25v.74z"/></g></svg>,
    modalSize:'960',
    xPosition:'0',
    yPostiion:'110'
  },
  {
    type:'dc',
    name:'Dc Gallery ',
    img:<svg className='dc' version="1" xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 180 180"><path d="M0 90v90h180V0H0v90zm78.4-46.4c6.6 3.2 12.6 6.1 13.1 6.6.6.6.9 14 .6 37.7l-.3 36.7 4.8 1.9c2.7 1.1 7 2.2 9.7 2.5l4.7.5-8.6 6.6-8.7 6.6-12.7-5.9c-11.6-5.5-12.9-6.3-13.4-9.1-.6-2.9-.7-3-2.6-1.2-1.9 1.7-2.4 1.6-14.7-4.1-15.8-7.4-19-9.7-22.8-16.5l-3-5.4V78.8c0-20.4.1-21.8 2.1-24.5 3.6-4.9 8.1-4.4 22.6 2.5 8.8 4.1 13.2 6.9 15.2 9.3l2.7 3.4-.4-14c-.2-7.7-.7-14.8-1.2-15.8-.4-.9-.4-1.7 0-1.7s6.2 2.5 12.9 5.6zm63.1 33.7c11.6 5.4 21.3 10.2 21.7 10.5.6.6-15.3 14.2-16.7 14.2-.3 0-.5-.8-.5-1.8 0-2.7-2.3-4.4-13.7-9.7-8.2-3.8-10.8-4.6-13.5-4.1-2 .4-7.3 3.8-13.8 9.1-5.8 4.6-10.7 8.4-11 8.5-.3 0-.4-6.3-.2-13.9l.3-13.9 5.2-4c6.7-5.1 7-5.2 14.7-4.9 5.9.2 8.5 1.2 27.5 10z"/><path d="M50.7 71.7c-.4.3-.7 8.9-.7 18.9V109l4 2 3.9 2 1.1-3.8c.5-2.2 2.3-5.9 4-8.3 2.8-4.1 3-5 3-13.6V78l-7-3.5c-7.7-3.9-7.4-3.8-8.3-2.8z"/></svg>,
    modalSize:'',
    xPosition:'0',
    yPostiion:'200'
  },
  // {
  //   type:'jieun',
  //   name:'Jieun In Us',
  //   img:<svg className="jieun" version="1" xmlns="http://www.w3.org/2000/svg" width="133.333" height="133.333" viewBox="0 0 100 100"><path d="M0 50v50h100V0H0v50zm65.8-33.6c4.9 2.5 8.2 8.1 8.2 13.9 0 4.7-1.9 9.7-4.6 12.5-.8.7-1.4 1-1.4.5 0-.4-.6-.1-1.3.8-1.2 1.6-1.8 1.9-3.7 1.9-.5 0-1 .6-1 1.3 0 1.1-7.4 13.3-9.9 16.3-.5.7-.7 1.5-.4 1.8.4.3.2.6-.3.6-.6 0-2.1 1.9-3.4 4.2-1.3 2.4-2.6 4.5-3 4.8-.4.3-1.9 2.9-3.5 5.8-1.5 2.8-3.2 5.2-3.6 5.2-.5 0-3.3-1.2-6.4-2.7-5.1-2.5-6.7-4.4-4.6-5.7.5-.3 1.9-3.8 3.2-7.8 1.3-4 3.1-8.7 4.1-10.3 1-1.7 1.8-3.7 1.8-4.5 0-.8.9-3.2 2-5.3 1.1-2 1.8-3.7 1.6-3.7-.3 0 .4-1.9 1.4-4.3 1.1-2.3 2-6.4 2-9.2 0-7 1.5-11.3 4.7-14.1 1.5-1.3 3-2.4 3.3-2.5 2.7-.4 4.3-.9 4.8-1.4 1-1 6.4.1 10 1.9z"/><path d="M57.4 19.1c-.3.5-.9.7-1.3.4-1-.5-7.3 3.5-7.8 5-.2.6 4.4 3.4 10.1 6.2C69.8 36.4 70 36.4 70 29c0-2.9-.7-4.6-2.5-6.5-1.4-1.4-2.7-2.5-2.8-2.5-.1 0-1.7-.4-3.4-.9-2-.6-3.5-.6-3.9 0zM46.6 31.3c.3.8 4.1 3.3 8.4 5.6 6 3.2 8.4 4 9.7 3.3 1.4-.8-.1-1.9-7.5-5.6-9.7-4.9-11.4-5.4-10.6-3.3zM46.6 37.7c-.3.4-.6 1.6-.6 2.7 0 1.2-.9 3.6-2 5.3-1.1 1.8-1.7 3.3-1.5 3.3.3 0-.1 1.3-.9 2.9-.8 1.5-1.7 4.1-2 5.6-.3 1.5-1.2 3.7-2 4.9-2.7 4.2-2.4 6.8 1.1 8.8l3.1 1.9 2.6-5c1.4-2.8 3-5.7 3.6-6.3 3.4-4.2 11.5-17.7 10.8-18.2-2-1.6-11.8-6.3-12.2-5.9zm5.4 8.9c0 .2-.7 1.9-1.6 3.8-1.7 3.5-4.4 4-4.4.7 0-2.6 2.9-6.1 4.5-5.5.8.4 1.5.8 1.5 1zM32.4 76.4c-.9 2.9-.8 3.4 1.3 4.3 2 1 2.6.8 4-1.3 1.2-1.9 1.3-2.8.4-3.7-.6-.6-1.1-.7-1.1-.2 0 .4-.8.1-1.8-.8-1.6-1.5-1.8-1.4-2.8 1.7z"/></svg>,
  //   modalSize:'',
  //   xPosition:'270',
  //   yPostiion:'90'
  // },
  {
    type:'insta',
    name:'Instagram',
    img:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551.034 551.034"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"><stop offset="0" stopColor="#e09b3d"/><stop offset=".3" stopColor="#c74c4d"/><stop offset=".6" stopColor="#c21975"/><stop offset="1" stopColor="#7024c4"/></linearGradient><path d="M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156C551.033 73.64 477.393 0 386.878 0zM495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722c60.045 0 108.722 48.676 108.722 108.722v222.722z" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"><stop offset="0" stopColor="#e09b3d"/><stop offset=".3" stopColor="#c74c4d"/><stop offset=".6" stopColor="#c21975"/><stop offset="1" stopColor="#7024c4"/></linearGradient><path d="M275.517 133C196.933 133 133 196.933 133 275.516s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516 354.101 133 275.517 133zm0 229.6c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083c48.095 0 87.083 38.988 87.083 87.083 0 48.094-38.989 87.083-87.083 87.083z" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="418.31" y1="4.57" x2="418.31" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)"><stop offset="0" stopColor="#e09b3d"/><stop offset=".3" stopColor="#c74c4d"/><stop offset=".6" stopColor="#c21975"/><stop offset="1" stopColor="#7024c4"/></linearGradient><circle cx="418.31" cy="134.07" r="34.15" fill="url(#c)"/></svg>,
    modalSize:'',
    xPosition:'0',
    yPostiion:'290'
  },
]

export default class Content extends React.Component{

  state = {
    gifModal:false,
    gifContent:null,
    songModal:false,
    songContent:null,
    youtubeModal:false,
    youtubeContent:null,
    daumModal:false,
    daumContent:null,
    dcModal:false,
    dcContent:null,
    instaModal:false,
    instaContent:null,
    jieunModal:false,
    jieunContent:null,
    zIndex:null,
    youZindex:null,
    cafeZindex:null,
    dcZindex:null,
    instaZindex:null,
  }

  handleClick = file => () => {
    let zzindex = this.zzindex + 1
    if(file.type === 'song'){
      this.setState({
        songModal:true,
        songContent:file
      });
    }else if(file.type === 'youtube'){
      this.setState({
        youtubeModal:true,
        youtubeContent:file,
        youZindex:zzindex
      });
    }else if(file.type === 'gif'){
      this.setState({
        gifModal:true,
        gifContent:file
      });
    }else if(file.type === 'daum'){
      this.setState({
        daumModal:true,
        daumContent:file,
        cafeZindex:zzindex
      });
    }else if(file.type === 'dc'){
      this.setState({
        dcModal:true,
        dcContent:file,
        dcZindex:zzindex
      });
    }else if(file.type === 'jieun'){
      this.setState({
        jieunModal:true,
        jieunContent:file
      });
    }else if(file.type === 'insta'){
      this.setState({
        instaModal:true,
        instaContent:file,
        instaZindex:zzindex
      })
    }
  }

  closeSongModal = () =>{
    this.setState({
      songModal:false
    });
  }
  closeYoutubeModal = () =>{
    this.setState({
      youtubeModal:false
    });
  }
  closeGifModal = () =>{
    this.setState({
      gifModal:false
    });
  }
  closeDaumModal = () =>{
    this.setState({
      daumModal:false
    });
  }
  closeDcModal = () =>{
    this.setState({
      dcModal:false
    });
  }
  closeJieunModal = () =>{
    this.setState({
      jieunModal:false
    });
  }
  closeInstaModal = () =>{
    this.setState({
      instaModal:false
    });
  }

  render(){
    const iuFile = defaultIuFiles.map((file, index) => (
      <Rnd key={index} default={{x: parseInt(file.xPosition), y: parseInt(file.yPostiion)}} enableResizing={{top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }} bounds="body">
        <File onDoubleClick={this.handleClick(file)}>
          {file.img}
          <div>{file.name}</div>
        </File>
      </Rnd>
    ));

    return(
      <ContentBox>
        {iuFile}
        {/* {this.state.songModal && <Rnd default={{x: 150, y: 205, width: 400, height:300}}bounds="body"><Modal content={this.state.songContent} close={this.closeSongModal}/></Rnd>} */}
        {this.state.youtubeModal && <Rnd style={{zIndex:this.state.youZindex}} default={{x: 100, y: 105, width: 746, height:446}}bounds="body"><Modal content={this.state.youtubeContent} close={this.closeYoutubeModal}/></Rnd>}
        {/* {this.state.gifModal && <Rnd default={{x: 150, y: 205, width: 400, height:300}}bounds="body"><Modal content={this.state.gifContent} close={this.closeGifModal}/></Rnd>} */}
        {this.state.daumModal && <Rnd style={{zIndex:this.state.cafeZindex}} default={{x: 250, y: 200, width: 999, height:600}}bounds="body"><Modal content={this.state.daumContent} close={this.closeDaumModal}/></Rnd>}
        {this.state.dcModal && <Rnd style={{zIndex:this.state.dcZindex}} default={{x: 350, y: 225, width: 400, height:300}}bounds="body"><Modal content={this.state.dcContent} close={this.closeDcModal}/></Rnd>}
        {/* {this.state.jieunModal && <Rnd style={{zIndex:this.state.zIndex}} default={{x: 150, y: 205, width: 400, height:300}}bounds="body"><Modal content={this.state.jieunContent} close={this.closeJieunModal}/></Rnd>} */}
        {this.state.instaModal && <Rnd style={{zIndex:this.state.instaZindex}} default={{x: 150, y: 170, width: 375, height:560}}bounds="body" enableResizing={{top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}><InstaModal content={this.state.instaContent} close={this.closeInstaModal}/></Rnd>}
      </ContentBox>
      // <Draggable>
      //   <div className="box">I can be dragged anywhere</div>
      //   <div className="box">I can be dragged anywhere</div>
      // </Draggable>
    )
  }
}

const File = styled.button`
  display:inline-block;
  width:90px;
  background:none;
  border:0;
  >div{
    padding:3px 0px;
    background:rgba(255,255,255,0.7);
    border:1px solid rgba(255,255,255,0.7);
    user-select:none;
  }
  >svg{
    display:block;
    margin:0 auto 10px;
    width:32px;
    height:auto;
    &.jieun{
      fill: #8572ee;
    }
    &.dc{
      fill:#3c4790;
    }
    &.daum{
      .st1{fill:#fff}
    }
    &.song{
      .st0{fill:#231f20}.st2{fill:#fff}.st4{fill:#fef55a}.st6{fill:#673ab7}.st7{fill:#7f7f7f}
    }
    &.youtube{
      padding:5px 0;
    }
  }
  &:focus{
    outline:none;
    >div{
      border:1px dotted rgba(255,255,255,1);
      background:rgba(0,0,0,1);
      color:#fff;
    }
  }
`

const ContentBox = styled.div`
  position: absolute;
  left: 0;
  top: 26px;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  border-top: 1px solid #010200;
`