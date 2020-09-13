import React, { useState, useEffect} from "react";
import { BigBlock,LookBtn,SlideShadowBox,LookBox,LookHostBox, SpHeaderA, H2, HeaderItem, DivWBorder} from "../styles/home-styles";
import { Redirect } from "react-router-dom";
import Carousel from '@brainhubeu/react-carousel';
import '../styles/Carousel.css';
import Filler from "./slide-show-filler"
import SliderFiller from "./slide-show-body"

import useMediaQuery from '@material-ui/core/useMediaQuery';

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

function SlideShowBase (props){
    const matches = useMediaQuery('(min-width:800px)');
    const num = matches ? 3 : 1.25
    const scNum = matches ? 2 : 1
    console.log(`Filler data: ${JSON.stringify(Filler[1])}`)
    return(
        <div>
            <BigBlock>
                <DivWBorder>
                    <SpHeaderA>
                        <HeaderItem>
                            <H2>
                                Projects
                            </H2>
                        </HeaderItem>
                    </SpHeaderA>
                </DivWBorder>
                <br/>
                <LookHostBox>
                    <SlideShadowBox/>
                    <LookBtn>
                        <div>
                            <Carousel
                                // autoPlay={5000}
                                animationSpeed={1500}
                                slidesPerPage={num}
                                offset={50}
                                slidesPerScroll={scNum}
                                arrows
                                // infinite
                            >
                                {Filler.map((Item, key) => (
                                    <SliderFiller
                                        key={key} id={Item.id} Name={Item.Name}
                                        About={Item.About} MyRole={Item.MyRole} LangUsed={Item.LangUsed}
                                        LibApiUsed={Item.LibApiUsed} GHRepo={Item.GHRepo}
                                        LiveSite={Item.LiveSite} FrontE={Item.FrontE} BackE={Item.BackE}
                                        DataBase={Item.DataBase} Img={Item.Img} VLink={Item.VLink} WebLink={Item.WebLink}
                                        StartDate={Item.StartDate} EndDate={Item.EndDate}
                                    />
                                ))}
                            </Carousel>
                        </div>
                    </LookBtn>
                </LookHostBox>
            </BigBlock>
        </div>
    )
}

export default SlideShowBase;