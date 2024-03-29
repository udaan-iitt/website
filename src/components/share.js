import React from 'react'
import styled from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaShareAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  function doneCopy(){
    if(window.getComputedStyle(document.body).getPropertyValue('--dark-obj')=='none'){
      toast('Copied Link to Clipboard !', {
        className: "l_toast",
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else{
      toast.dark('Copied Link to Clipboard !', {
        className: "d_toast",
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }
    return(
        <ShareWrapper>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        <ul className="float onlyPC">
            <li><FacebookShareButton url={url} ><i className="fa fa-facebook"></i></FacebookShareButton><span>Facebook</span></li>
            <li><TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={[tags]}><i className="fa fa-twitter"></i></TwitterShareButton><span>Twitter</span></li>
            <li><LinkedinShareButton url={url} ><i className="fa fa-linkedin"></i></LinkedinShareButton><span>LinkedIn</span></li>
            <li><WhatsappShareButton url={url} title={title}><i className="fa fa-whatsapp"></i></WhatsappShareButton><span>WhatsApp</span></li>
            <CopyToClipboard text={url} onCopy={() => doneCopy()}>
            <li><i className="fa fa-share-alt"></i><span>Link</span></li>
            </CopyToClipboard>
        </ul>
        <div className="onlyPhone">
          <FacebookShareButton url={url} >
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={[tags]}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={40} round={true}/>
          </LinkedinShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={40} round={true}/>
           </WhatsappShareButton>
          
          <CopyToClipboard text={url} onCopy={() => doneCopy()}>
          <button aria-label="copy" className="react-share__ShareButton" style={{backgroundColor: "transparent", border: "none", padding: "0px", font: "inherit", color: "inherit", cursor: "pointer"}}>
              <FaShareAlt size={40} style={{padding:"10px", backgroundColor:"#ea4c89", borderRadius:"50%"}}/>
          </button>
          </CopyToClipboard>
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
.onlyPhone{
  display:none;
}
.d_toast{
  display:var(--dark-obj) !important;
}
.l_toast{
  display:var(--light-obj)
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
  ul li:hover i.fa-share-alt {
    color: #ea4c89 !important;
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
@media (max-width: 900px) {
  .onlyPC{
    display:none !important;
  }
  .onlyPhone{
    display:block !important;
  }
}
  .react-share__ShareButton {
    margin-right: 1rem;
  }

  .react-share__ShareButton a svg:hover rect {
    fill: var(--link-color) !important;
  }
`;