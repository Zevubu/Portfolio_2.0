import React, {useState} from 'react';
import {A,ShowSlide,ProTextBox,H2,FlexBoxCentered,VFrameS, PB, SlideBuffer, DuoServiceBlockColumn, TextBox} from '../styles/home-styles';

// id:1,
// Name:
// About:
// MyRole:
// LangUsed:
// LibApiUsed:
// GHRepo:"",
// LiveSite:"",
// FrontE:,
// BackE:,
// DataBase:,
// Img:,
// VLink:,
// WebLink:,
// StartDate:,
// EndDate:

function SlideFiller(props){
    // const [vis, setVis] = useState(1);
    const [bgC, setbgC] = useState();
    const [Click, setClick] = useState(false);

    // if(Click){
    //     return <Redirect to={"/shows/" + props.id} />
    // }   
    // opacity: vis ,
    return(
        <ShowSlide id={props.id} onClick={i=>setClick(true)} >
            <SlideBuffer style={{backgroundColor: bgC}} onMouseEnter={(e)=> setbgC('rgba(175, 193, 202, 0.356)')} onMouseLeave={(e)=> setbgC('rgba(175, 193, 202, 0)')}>
                {/* <DuoServiceBlockColumn>
                    <Image src={props.imgP} alt={props.showName}/>
                </DuoServiceBlockColumn> */}
                <DuoServiceBlockColumn>
                    <ProTextBox>
                        <H2>{props.Name}</H2>
                    </ProTextBox> 
                    <TextBox>
                        <br/>
                        <PB>{props.About}</PB>
                    </TextBox>
                    <FlexBoxCentered>
                    <VFrameS 
                        src={props.VLink} 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen 
                    />
                    </FlexBoxCentered>
                    <TextBox>
                        <H2>Experience Includes:</H2>
                        <PB>{props.MyRole}</PB>
                    </TextBox>
                    <TextBox>
                        <H2>Languages & Libraries:</H2>
                        <PB>{props.LangUsed}</PB>
                        <PB>{props.LibApiUsed}</PB>
                    </TextBox>
                    {props.LiveSite &&(
                        <TextBox>
                            <A href={props.LiveSite}>Visit Site Here</A>
                        </TextBox>
                    )}
                   {props.GHRepo &&(
                        <TextBox>
                            <A href={props.GHRepo}>View Github Here</A>
                        </TextBox>
                   )}
                </DuoServiceBlockColumn>
            </SlideBuffer>       
        </ShowSlide>   
    )
}
export default SlideFiller
