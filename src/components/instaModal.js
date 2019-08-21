import React from 'react'
import styled from 'styled-components'
import axios from 'axios';

export default class InstaModal extends React.Component{
  _isMounted = false;

  state={
    zIndex:'3',
    instaData:[],
    instaProfil:[],
    posts:'',
    follower:'',
    following:'',
  }

  componentDidMount() {
    this._isMounted = true;

    axios.get('https://www.instagram.com/dlwlrma/')
    .then((res)=> {
      if(this._isMounted){
        const jsonObject = res.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
        const userInfo = JSON.parse(jsonObject)
        const profileInfo = userInfo.entry_data.ProfilePage[0].graphql.user
        const posts = profileInfo.edge_owner_to_timeline_media.count
        const follower = profileInfo.edge_followed_by.count
        const following = profileInfo.edge_follow.count
        const mediaArray = profileInfo.edge_owner_to_timeline_media.edges.splice(0, 15)
        
        this.setState({
          instaData:mediaArray,
          instaProfil:profileInfo,
          posts:posts,
          follower:follower,
          following:following
        })
        console.log(this.state.instaData);
        console.log(String(this.state.instaProfil.edge_followed_by.count));
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render(){

    const {instaData, instaProfil, follower, following, posts} = this.state

    const instImg = instaData.map((data) => (
      <li key={data.node.id}>
        <a href={`https://www.instagram.com/p/${data.node.shortcode}`} target="_blank">
          <InstaImg background={data.node.thumbnail_src}>
            <Blind>
              {data.node.accessibility_caption}
            </Blind>
          </InstaImg>
        </a>
      </li>
    ))
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
        <InstaBox>
          <InstaProfile>
            <InstaProfileImg background={instaProfil.profile_pic_url}>
            </InstaProfileImg>
            <ul>
              <li>{posts}<br />posts</li>
              <li>{follower}<br />followers</li>
              <li>{following}<br />following</li> 
            </ul>
            <ProgileTitle>{instaProfil.username}</ProgileTitle>
            <FollowLink href="https://www.instagram.com/dlwlrma/" target="_blank">Follow</FollowLink>
          </InstaProfile>
          <InstaImgBox>
            <ul>
              {instImg}
            </ul>
          </InstaImgBox>
        </InstaBox>
      </ModalBox>
    )
  }
}

const InstaImg = styled.div`
  background-image:url(${props => props.background});  
  background-size:cover;
  background-position:center;
  width:100%;
  height:102.66px;
`

const Blind = styled.p`
  text-indent:-99999px;
  position:absolute;
`

const InstaImgBox = styled.div`
  border-top: 1px solid #000;
  padding: 20px 14px;
  height: calc(100% - 192px);
  overflow-y: scroll;
  >ul{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px 3px;
    >li{
      border:1px solid #000;
      >a{
        display:block;
      }
    }
  }
`

const ProgileTitle = styled.span`
  position: absolute;
  top: 40px;
  left: 160px;
  color: #551a8a;
  text-shadow: 1px 1px 2px rgba(255,255,255,1);
`

const FollowLink = styled.a`
  width: 188px;
  position: absolute;
  top: 106px;
  border: 1px solid #000;
  right: 25px;
  text-align: center;
  padding: 4px 0;
  background: #fff;
`

const InstaBox = styled.div`
  position:relative;
  padding:6px;
  background:#cdc7f6;
  height:calc(100% - 39px);
`

const InstaProfileImg = styled.div`
  width:114px;
  height:114px;
  background:#000;
  background-image:url(${props => props.background});
  border-radius:50%;
  color:#fff;
  border:1px solid #000;
  background-size:cover;
  background-position:center;
`

const InstaProfile = styled.div`
  flex:1;
  display:flex;
  padding:20px 14px;
  border-bottom:1px solid #614de2;
  >ul{
    width:calc(100% - 136px);
    display:flex;
    margin-left:20px;
    justify-content: space-around;
    margin-top:36px;
    >li{
      text-align:center;
    }
  }
`

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