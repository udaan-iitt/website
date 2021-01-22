import React from 'react'
import styled from 'styled-components';

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags}) => {

    return(
        <ShareWrapper>
        <ul class="float onlyPC">
            <li><i class="fa fa-facebook"></i><span>Facebook</span></li>
            <li><i class="fa fa-twitter"></i><span>Twitter</span></li>
            <li><i class="fa fa-linkedin"></i><span>LinkedIn</span></li>
            <li><i class="fa fa-whatsapp"></i><span>WhatsApp</span></li>
            <li><i class="fa fa-share-alt"></i><span>Link</span></li>
        </ul>
        <div>
          <FacebookShareButton url={url} >
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={40} round={true}/>
          </LinkedinShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={40} round={true}/>
           </WhatsappShareButton>
        </div>
        </ShareWrapper>
      )

}
export default ShareButtons

const ShareWrapper = styled.section`
text-align:center;
left:0;
right:0;
margin:auto;
padding: 0 var(--padding-sm);
margin-bottom: var(--sizing-sm);
* {
    box-sizing: border-box;
    transition: all 0.18s ease-out;
  }
ul {
    position: fixed;
    top: 50%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    transform: translateY(-50%);
    z-index: 10;
  }
  ul li {
    position: relative;
    display: inline-flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    margin: 0 0 8px 0;
    color: #222 !important;
    cursor: pointer;
    height: 36px;
    overflow: hidden;
    box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.2);
  }
  ul li i.fa {
    font-size: 1.2rem;
    width: 36px;
    text-align: center;
    position: relative;
    top: 0.04em;
  }
  ul li i.fa.fa-dribbble {
    font-size: 1.3em;
  }
  ul li i.fa.fa-linkedin {
    font-size: 1.1em;
  }
  ul li i.fa.fa-github {
    font-size: 1.45em;
  }
  ul li span {
    font-size: 16px;
    transform: translate(0, -50%);
    top: 50%;
    left: 36px;
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }
  ul li:hover {
    background: #fff;
    box-shadow: 0 2px 10px -1px rgba(0, 0, 0, 0.1);
  }
  ul li:hover span {
    visibility: visible;
    opacity: 1;
    transition-delay: 90ms;
    color: #222 !important;
  }
  ul li:hover i {
    opacity: 1;
  }
  ul li:hover i.fa-twitter {
    color: #00aced !important;
  }
  ul li:hover i.fa-facebook {
    color: #00aced !important;
  }
  ul li:hover i.fa-linkedin {
    color: #0077b5 !important;
  }
  ul li:hover i.fa-whatsapp {
    color: #075e54 !important;
  }
  ul.float {
    left: 7%;
  }
  ul.float li {
    width: 36px;
    border-radius: 22px;
  }
  ul.float li:hover {
    width: 124px;
  }

@media (max-width: ${({ theme }) => theme.device.sm}) {
  width: auto;
}

  .react-share__ShareButton {
    margin-right: 1rem;
  }

  .react-share__ShareButton a svg:hover rect {
    fill: var(--link-color) !important;
  }
`;