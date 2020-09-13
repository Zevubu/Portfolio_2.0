import styled from "styled-components";

const A = styled.a`
 color:${props => props.color || "rgb(23, 23, 23)"};
`
const P = styled.p`
font-size: 18px;
margin:0;
color:${props => props.color || "rgb(23, 23, 23)"};
text-shadow: 0.8px 0.8px ${props => props.TSColor || "rgb(98, 98, 98)"};
`
// Font sizes, types and styles;
const H1 = styled.p`
    font-size: 45px;
    margin:0;
    color:${props => props.color || "rgb(23, 23, 23)"};
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
color:${props => props.color || "rgb(23, 23, 23)"};
text-shadow: 0.8px 0.8px ${props => props.TSColor || "rgb(98, 98, 98)"};
@media only screen and (max-width: 850px) {
    font-size: 15px;
};
`
const PB = styled(P)`
color: rgb(23, 23, 23);
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
background-image: url(${props => props.bgImg || "https://images.unsplash.com/photo-1494783435443-c15feee0a80a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"});
background-repeat: ${props => props.BGR || "no-repeat"};
background-size:${props => props.BGPsize || "cover"};
background-position-x: ${props => props.BGPy || "center"};
background-position-y: ${props => props.BGPx || "center"};
border-bottom: ${props => props.BDcolor || "rgb(115, 162, 175)"}  solid 2px;
` 
const IntroBlock = styled.div`
color: ${props => props.color || "rgb(238, 245, 244)"};
font-size: 20px;
height: 620px;
display: flex;
flex-direction: ${props => props.FlexD || "row"};
justify-content: ${props => props.JustifyC || "space-evenly"};
align-items: ${props => props.AlignI || "center"};
@media only screen and (max-width: 780px) {
    flex-direction: ${props => props.FlexD || "column"};
};
`
const ProTextBox = styled.div`
display: inline-block;
border-radius: ${props => props.BorderRadius || "0.5px"};
border: ${props => props.BDcolor ||"rgba(180, 180, 180, 0.6)"} solid 2px;
background-color: ${props => props.BGcolor || "rgba(23, 23, 23, 0.05)"};
padding:16px;
text-align: center;
@media only screen and (max-width: 800px) {
    padding:0 auto;
    margin:0 auto;
};
`
const ProTextBoxUnC = styled.div`
display: inline-block;
border-radius: ${props => props.BorderRadius || "0.5px"};
border: ${props => props.BDcolor ||"rgba(180, 180, 180, 0.6)"} solid 2px;
background-color: ${props => props.BGcolor || "rgba(23, 23, 23, 0.05)"};
padding:16px;
`
const SpDiv = styled.div`
background: ${props => props.BGcolor ||"rgba(0, 0, 0, 0)"};
width:100%;
height:100%;
`
const VFrameL = styled.iframe`
    width:640px;
    height:360px;
    margin:10px;
    border:0;
    @media only screen and (max-width: 1550px) {
        width:426.666666667px;
        height:240px;
    };
`
const VFrameS = styled.iframe`
    width:480px;
    height:322px;
    border:0;
    @media only screen and (max-width:1550px) {
        width:426.666666667px;
        height:240px;
    };
    @media only screen and (max-width:800px) {
        width:325px;
        height:200px;
    };
    @media only screen and (max-width:500px) {
        width:250px;
        height:180px;
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
const LookHostBox = styled.div`
width: 100%;
height: 759.13px;
border-top: ${props => props.BDcolor ||"rgb(23, 23, 23)"} solid 2px;
position: relative;
margin-bottom:23px;
`
const LookBox = styled.div`
width: 100%;
height: 196.7px;
position: relative;
margin-bottom:23px;
`
const LookBtn = styled.div`
width: 100%;
height: auto;
position: absolute;
top: 0;
left: 0;
z-index: 1;
`
const IconArea = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const IconSwitcher = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        }
`

const Icon = styled.img`
    height: 100px;
`
const IconDarker = styled.img`
 background-color: rgba(23, 23, 23, 0.644);
 height: 100px;
`
const DivWBorder = styled.div`
border-top: ${props => props.BDcolor ||"rgb(28, 108, 121)"} solid 2.5px;
margin: ${props => props.Margin ||"0px"};
@media only screen and (max-width: 600px) {
    width: 100%;
    }

`
const DuoServiceBlockRow = styled.div`
height: auto;
width:50%;
margin:5px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`
const TextBox = styled.div`
width:100%;
height:100%;
text-align:center;
`
const TextBoxUnC = styled.div`
width:100%;
height:100%;

`
const SlideShadowBox = styled.div`
width: 56px;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 10;
margin-left:95%;
margin-right:41px;
box-shadow:inset -46px 0px 23px 0px ${props => props.FdColor ||"rgb(221, 215, 229)"};
@media only screen and (max-width: 1600px) {
    margin-left:93.59%;
    };
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
background:${props => props.BGcolor || "linear-gradient(to bottom, rgba(32, 142, 161, 0.9) 5%, rgba(46, 46, 46, 0.05) 100%)"};
text-align: center;
`
const Logo = styled.h2`
font-size: 40px;
@media only screen and (max-width: 600px) {
    font-size: 30px;
    }
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
@media only screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    grid-template-columns: none;
    margin:0 auto;
    };
`
const DuoServiceBlockColumn = styled.div`
width:100%;
margin:0px;
align-items: center;
display: grid;
grid-template-rows: 60px 60px auto 100px 80px 30px 30px;
justify-self: center;
@media only screen and (max-width: 800px) {
    width: 240px;
    };
`
const FlexBoxCentered = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const FlexBoxColumn = styled.div`
display: flex;
height: auto;
flex-direction: column;
justify-content: space-evenly;
align-items: initial;
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
const ShowSlide = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${props => props.bgImg || ""});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: ${props => props.BorderRadius || "2px 2px"};
    border: ${props => props.BDcolor ||"rgba(23, 23, 23)"} solid 2px;
    padding:7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2%;
    @media only screen and (max-width: 800px) {
        border-radius: ${props => props.BorderRadius || "0px 0px"};
        border: ${props => props.BDcolor ||"rgba(23, 23, 23)"} solid 0px;
        padding:0 auto;
        margin: 0%;
        };
`
const SlideBuffer = styled.div`
height: 100%;
width: 100%;
display: flex;
padding:20px;
flex-direction: row;
justify-content: center;
align-items: center;
@media only screen and (max-width: 800px) {
    padding:0 auto;
    };
`


export {A,P,IconArea,Icon,Logo, IconDarker,IconSwitcher,FlexBoxColumn,FlexBoxCentered, H1, H2, H3,PB,Header, HeaderItem, IntroBlock,TextBoxUnC,ProTextBoxUnC, IntroBox, ProTextBox, SpDiv, DuoServiceBlockRow, TextBox, ProImgBox, DivWBorder, SpHeaderA, DuoServiceBlock, DuoServiceBlockColumn, VFrameL,VFrameS, LookBtn,LookBox, LookHostBox, SlideShadowBox, BigBlock, BigBlockR, ShowSlide, SlideBuffer}