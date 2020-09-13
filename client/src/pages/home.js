import React from "react";
import SlideShow from "../componets/slide-show-base"

import {A,Icon, H1, IconArea,IconDarker,FlexBoxColumn,TextBoxUnC,TextBox, ProTextBoxUnC, H2, H3, Header,DivWBorder, HeaderItem, IntroBlock, IntroBox, ProTextBox,SpDiv,ProImgBox, SpHeaderA, DuoServiceBlock, DuoServiceBlockColumn, VFrame, SlideShadowBox, BigBlock, BigBlockR, DuoServiceBlockRow} from "../styles/home-styles"

function Home(){

    return(
      <SpDiv>
            <IntroBox>
                <IntroBlock bgImg={"https://images.unsplash.com/photo-1494783435443-c15feee0a80a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"}> 
                    {/* <IntroTxTDiv> */}
                    {/* <VFrame src="https://player.vimeo.com/video/412924050" frameborder="0px" allow="autoplay; fullscreen" allowfullscreen></VFrame> */}
                    <div>
                        <ProTextBox>
                        <H1>Zev Ubu Hoffman</H1>
                            {/* <H2>A place for immersive experience makers, circus folk, musicians, puppeteers, clowns, carnies, and healers, to name a few.</H2> */}
                            {/* <H2>To entertain, share their skills, and tell their stories.</H2>
                            <H2>All while selling their own content. </H2> */}
                            {/* <H3>Logged out</H3>
                            <H3>This is how the world starts,</H3>
                            <H2>This is how the world starts,</H2>
                            <H1 color="rgb(23, 283, 232)">This is how the world starts,</H1>
                            <H2> Not with a bang but with a whimsy...</H2> */}
                        </ProTextBox>
                    </div>  
                </IntroBlock>
                <div>
                    <H3>Image by <A href="https://unsplash.com/@diegojimenez">Diego Jimenez</A></H3>
                </div>
            </IntroBox>
            <BigBlock>
                <DivWBorder>
                    <SpHeaderA>
                        <HeaderItem>
                            <H2>Full Stack Web Development</H2>
                        </HeaderItem>
                    </SpHeaderA>
                </DivWBorder>
                <DuoServiceBlock>
                    <FlexBoxColumn>
                        <ProTextBox>
                            <H2 color="rgb(23, 23, 23)">Full Stack Web Developer with experience with React.js, JavaScript, Express, Node.js, Python, Mongodb, MySQL, and others.</H2>
                            <H2> As well an extensive background in design, color theory, social engineering and working on teams in both leadership roles and hands on positions.</H2> 
                            <br/>
                            <H2> Known among colleagues as charismatic, productive, task oriented, and creative. With an attention to detail no matter the complexity of the project.</H2>
                            <IconArea>
                                <IconDarker src="https://www.fullstacklabs.co/img/developersReact/React@2x.png" alt="React"/>
                                <IconDarker class="icon darker" src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="Javascript"/>
                                <Icon class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML5"/>
                                <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS3"/>
                            </IconArea>
                            <IconArea>
                                <Icon src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" alt="Node"/>
                                <Icon src="https://hangtenseo.com/wp-content/uploads/2019/10/Python-Logo.png" alt="Python"/>
                                <Icon src="https://www.innocreate.com/wp-content/uploads/2017/07/jsonlogo-300x300.png" alt="Json"/>
                                <Icon src="http://pngimg.com/uploads/mysql/mysql_PNG9.png" alt="MySQL"/>
                                <Icon src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt="MongoDB"/>
                            </IconArea>
                        </ProTextBox>
                        <TextBox>
                            <div> 
                                <H2>Find Me Here:</H2>
                                <a href="https://github.com/Zevubu"><Icon class="icon" src="https://cdn0.iconfinder.com/data/icons/social-circle/595/github-512.png" alt="GitHub"/></a>
                                <a href="https://www.linkedin.com/in/zev-hoffman-b5770532/"><Icon class="icon" src="https://pndblog.typepad.com/.a/6a00e0099631d0883301bb09d01edf970d-800wi" alt="CSS3"/></a>
                                <a href="https://stackoverflow.com/users/11111018/zev-hoffman"><Icon class="icon" src="https://www.shareicon.net/data/512x512/2015/08/30/93392_stackoverflow_512x512.png" alt="Javascript"/></a>
                            </div>
                        </TextBox>
                    </FlexBoxColumn>
                    <ProImgBox BGPx="0px" bgImg="https://adventreon-img-bucket.s3-us-west-1.amazonaws.com/20191018675742504477207294.jpg">
                        <IntroBlock/>
                        <H3>Image by</H3>  
                    </ProImgBox>
                </DuoServiceBlock>
                <DivWBorder>
                    <SpHeaderA>
                        <HeaderItem>
                            <H2>Experience</H2>
                        </HeaderItem>
                    </SpHeaderA>
                </DivWBorder>
                <DuoServiceBlock>
                    <ProImgBox BGPx="1%" bgImg="https://adventreon-img-bucket.s3-us-west-1.amazonaws.com/screencapture-localhost-3000-2020-09-12-18_08_45.png">
                        <IntroBlock/>
                    </ProImgBox>
                    <FlexBoxColumn>
                        <ProTextBoxUnC>
                            <DuoServiceBlock>
                                <TextBoxUnC BGcolor="rgba(0,0,0,0)">
                                    <H1>Adventreon</H1>
                                    <H2>CEO, founder, lead developer</H2>
                                </TextBoxUnC>
                                <TextBoxUnC BGcolor="rgba(0,0,0,0)">
                                    <H2>March 2020 - present</H2>
                                    <H2>Oakland CA</H2>
                                </TextBoxUnC>
                            </DuoServiceBlock>
                            <br/>
                            <TextBoxUnC BGcolor="rgba(0,0,0,0)">
                                <H2 color="rgb(23, 23, 23)">A steaming site with a focused on performance, and immersive art.</H2>
                            </TextBoxUnC>
                            <br/>
                            <TextBoxUnC BGcolor="rgba(0,0,0,0)">
                                <H2 color="rgb(23, 23, 23)">Experience includes: Working with a small team to build out the website, from the ground up. Built with a React front-end, Node.js server, and CloudSQL database.</H2>
                                <H2> I also managed the team, and wrote out a comprehensive finacial plan.</H2>
                            </TextBoxUnC>
                            <br/>
                            <H2>Key Accomplishments:</H2>
                            <ul>
                                <li>White boarding and designing the webpage.</li>
                                <li>Built a dynamic front-end in React with Hooks. Which included, login, Role-based access control(RBAC), interactive slideshows, customizable profiles, and video streaming (through Vimeo api), to name a few. </li>
                                <li>Built with a RESTful JavaScript API, using Node, Express, Axios, MySQL, JWT, and Passport.</li>
                                <li>The strange joy that comes from building something you came up with. Like some mad scientist! </li>
                            </ul>
                            <br></br>
                            <IconArea>
                                <IconDarker src="https://www.fullstacklabs.co/img/developersReact/React@2x.png" alt="React"/>
                                <IconDarker class="icon darker" src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="Javascript"/>
                                <Icon src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" alt="Node"/>
                                <Icon src="https://miro.medium.com/max/370/0*PSZC5NvmEZ9TY8Eb" alt="CloudSQL"/>
                                <Icon src="https://www.logolynx.com/images/logolynx/8c/8c8381f2fb4676b89af494b79dc68374.png" alt="CloudSQL"/>
                                <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS3"/>
                            </IconArea>
                        </ProTextBoxUnC>
                    </FlexBoxColumn>
                </DuoServiceBlock>
                <br/>
                <DuoServiceBlock>
                    <FlexBoxColumn>
                        <ProTextBoxUnC>
                            <DuoServiceBlock>
                                <TextBoxUnC BGcolor="rgba(0,0,0,0)">
                                    <H1>Cool Magdelene</H1>
                                    <H2>Freelance Web Developer</H2>
                                </TextBoxUnC>
                                <TextBoxUnC BGcolor="rgba(0,0,0,0)">
                                    <H2>Feb 2020 – Apr 2020</H2>
                                    <H2>Oakland CA</H2>
                                </TextBoxUnC>
                            </DuoServiceBlock>
                            <br/>
                            <TextBoxUnC BGcolor="rgba(0,0,0,0)">
                                <H2 color="rgb(23, 23, 23)">A booking web-page for an in person coaching location.</H2>
                            </TextBoxUnC>
                            <br/>
                            <TextBoxUnC BGcolor="rgba(0,0,0,0)">
                                <H2 color="rgb(23, 23, 23)">Experience includes: Working with client and ux/ui designer, to build a website, from the ground up. Built with a React front-end, Node.js server, and MySQL database.</H2>
                            </TextBoxUnC>
                            <br/>
                            <H2>Key Accomplishments:</H2>
                            <ul>
                                <li>Used notes and sketches from the client, to draft a comprehensive plan, white board, and design the webpage.</li>
                                <li>Built a dynamic front-end in React, including but not limited to, login, RBAC, and an interactive slideshow..</li>
                                <li>Built with a RESTful JavaScript API, using Node, Express, Axios, MySQL, JWT, and Passport.</li>
                                <li>Built a RESTful JavaScript API, using Node, Express, Axios, MySQL, JWT, and Passport.</li>
                            </ul>
                            <br/>
                            <IconArea>
                                <IconDarker src="https://www.fullstacklabs.co/img/developersReact/React@2x.png" alt="React"/>
                                <IconDarker class="icon darker" src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="Javascript"/>
                                <Icon src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" alt="Node"/>
                                <Icon src="http://pngimg.com/uploads/mysql/mysql_PNG9.png" alt="MySQL"/>
                                <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS3"/>
                            </IconArea>
                        </ProTextBoxUnC>
                    </FlexBoxColumn>
                    <ProImgBox BGPx="1%" bgImg="https://adventreon-img-bucket.s3-us-west-1.amazonaws.com/screencapture-localhost-3000-2020-09-12-20_34_24.png">
                        <IntroBlock/>
                         
                    </ProImgBox>

                </DuoServiceBlock>
                <SlideShow></SlideShow>
                <DivWBorder>
                    <SpHeaderA>
                        <HeaderItem>
                            <H2></H2>
                        </HeaderItem>
                    </SpHeaderA>
                </DivWBorder>
                {/* <DivWBorder>
                    <SpHeaderA>
                        <HeaderItem>
                            <H2>Contact</H2>
                        </HeaderItem>
                    </SpHeaderA>
                </DivWBorder> */}
                
                {/* <DuoServiceBlock>
                    <ProTextBox>
                        <H2 color="rgb(23, 23, 23)">In a sociaty that consitantly devalues labor, and a culture that's obsesesed with screaming "Get a real job!".</H2>
                        <H2 color="rgb(23, 23, 23)"> We’re here to scream back. Our jobs are as real as they get, And we deserve to get paid for them!</H2>
                    </ProTextBox>
                    <ProImgBox bgImg="https://images.unsplash.com/photo-1597355404305-7112c26fda49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
                        <IntroBlock/>
                        <H3>Image by <A href="https://unsplash.com/@intense_sunshine">Olivia Connell</A></H3>  
                    </ProImgBox>
                </DuoServiceBlock> */}
            </BigBlock>
      </SpDiv>
    )
}

export default Home;