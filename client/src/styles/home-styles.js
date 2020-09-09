import styled from "styled-components";

const A = styled.a`
 color:${props => props.color || "rgb(233, 233, 232)"};
 text-shadow: 0.8px 0.8px ${props => props.TSColor || "rgb(98, 98, 98)"};
`

// Font sizes, types and styles;
const H1 = styled.p`
    font-size: 45px;
    margin:0;
    color:${props => props.color || "rgb(233, 233, 232)"};
    text-shadow: 2px 2px ${props => props.TSColor || "rgb(98, 98, 98)"};
    @media only screen and (max-width: 850px) {
        font-size: 40px;
    };
    @media only screen and (max-width: 600px) {
        font-size: 35px;
    };
`
const H2 = styled.p`
font-size: 25px;
margin:0;
color:${props => props.color || "rgb(23, 23, 23)"};
text-shadow: 0.5px 0.5px ${props => props.TSColor || "rgb(98, 98, 98)"};
@media only screen and (max-width: 850px) {
    font-size: 20px;
};
`
const H3 = styled.p`
font-size: 17px;
margin:0;
color:${props => props.color || "rgb(233, 233, 232)"};
text-shadow: 0.8px 0.8px ${props => props.TSColor || "rgb(98, 98, 98)"};
@media only screen and (max-width: 850px) {
    font-size: 15px;
};
`
const Header = styled.div`
color: rgb(238, 245, 244);
padding:10px 0px;
font-size: 20px;
width:100%;
display:flex;
flex-direction: row;
justify-content: center;
`
const HeaderItem = styled.div`
margin:5px;
`
const IntroBox = styled.div`
background-image: url(${props => props.bgImg || "https://images.unsplash.com/photo-1502137840985-4ec07e8568bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"});
background-repeat: ${props => props.BGR || "no-repeat"};
background-size:${props => props.BGPsize || "cover"};
background-position-x: ${props => props.BGPy || "center"};
background-position-y: ${props => props.BGPx || "center"};
border-bottom: ${props => props.BDcolor || "rgb(115, 162, 175)"}  solid 2px;
` 
const IntroBlock = styled.div`
color: ${props => props.color || "rgb(238, 245, 244)"};
font-size: 20px;
height: 600px;
display: flex;
flex-direction: ${props => props.FlexD || "row"};
justify-content: ${props => props.JustifyC || "space-evenly"};
align-items: ${props => props.AlignI || "center"};
@media only screen and (max-width: 780px) {
    flex-direction: ${props => props.FlexD || "column"};
};
`
const ProTextBox = styled.div`
display: inline-block
margin:10px;
border-radius: ${props => props.BorderRadius || "0px"};
border: ${props => props.BDcolor ||"rgba(180, 180, 180, 0.6)"} solid 2px;
background-color: ${props => props.BGcolor || "rgba(23, 23, 23, 0.5)"};
padding:16px;
text-align: center;
`
const SpDiv = styled.div`
background: ${props => props.BGcolor ||"rgba(0, 0, 0, 0)"};
width:100%;
height:100%;
`

const VFrame = styled.iframe`
    width:640px;
    height:360px;
    margin:10px;
    border:0;
    @media only screen and (max-width: 600px) {
        width:426.666666667px;
        height:240px;
    };
`
const BigBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const BigBlockR = styled.div`
display: flex;
flex-direction: row;
`

const SlideShadowBox = styled.div`
width: 56px;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 10;
margin-left:93.59%;
margin-right:41px;
box-shadow:inset -46px 0px 23px 0px ${props => props.FdColor ||"rgb(227,218,226)"};
@media only screen and (max-width: 1400px) {
    margin-left:93%;
    };
@media only screen and (max-width: 1200px) {
    margin-left:91%;
    };
@media only screen and (max-width: 1010px) {
    margin-left:90%;
    };
@media only screen and (max-width: 860px) {
    margin-left:89%;
    };
@media only screen and (max-width: 800px) {
    margin-left:88%;
    };
@media only screen and (max-width: 780px) {
    margin-left:87.5%;
    };
@media only screen and (max-width: 760px) {
    margin-left:88%;
    };
@media only screen and (max-width: 740px) {
    margin-left:87.5%;
    };
@media only screen and (max-width: 730px) {
    margin-left:87%;
    }
@media only screen and (max-width: 720px) {
    margin-left:86.7%;
    }
@media only screen and (max-width: 710px) {
    margin-left:86.5%;
    }
@media only screen and (max-width: 700px) {
    margin-left:86.2%;
    }
@media only screen and (max-width: 690px) {
    margin-left:85.99%;
    };
@media only screen and (max-width: 600px) {
    margin-left:81.5%;
    box-shadow:none;
    width: 0px;
    }
`
const SpHeaderA = styled(Header)`
color: ${props => props.Color ||"rgb(238, 245, 244)"};
background:${props => props.BGcolor || "linear-gradient(to bottom, rgba(32, 142, 161, 0.999) 5%, rgba(46, 46, 46, 0.999) 100%)"};
text-align: center;
`

const DuoServiceBlock = styled.div`
background-image: url(${props => props.bgImg || ""});
background-repeat: no-repeat;
background-size: Cover;
background-position-x: center;
background-position-y: 20%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
margin:0 23px;
@media only screen and (max-width: 1500px) {
    width: 100%;
    flex-direction: column;
    grid-template-columns: none;
    };
`
const DuoServiceBlockColumn = styled.div`
height: auto;
width:50%;
margin:5px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const ProImgBox = styled.div`
background-image: url(${props => props.bgImg || "https://images.unsplash.com/photo-1502137840985-4ec07e8568bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"});
background-repeat: ${props => props.BGR || "no-repeat"};
background-size:${props => props.BGPsize || "cover"};
background-position-x: ${props => props.BGPy || "center"};
background-position-y: ${props => props.BGPx || "center"};
border-radius: ${props => props.BorderRadius || "0px"};
border: ${props => props.BDcolor ||"rgba(180, 180, 180, 0.6)"} solid 2px;
width:50%;
height:100%;
margin:25px;
padding:0px;
@media only screen and (max-width: 1500px) {
    width: 40%;
    height:50%;
    };
@media only screen and (max-width: 1000px) {
    width: 50%;
    height:50%;
    };
@media only screen and (max-width: 860px) {
    width: 60%;
    height:50%;
    };
@media only screen and (max-width: 750px) {
    width: 80%;
    height:50%;
    };
`


export {A, H1, H2, H3, Header,HeaderItem, IntroBlock, IntroBox, ProTextBox,SpDiv,ProImgBox, SpHeaderA, DuoServiceBlock, DuoServiceBlockColumn, VFrame, SlideShadowBox, BigBlock, BigBlockR}