import React from 'react';
import { Logo, A, H3, FlexBoxColumn} from "../../styles/home-styles";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    position: "relitive",
    left: "0",
    bottom: "0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <ExpansionPanel style={{backgroundColor: 'rgba(238,245,244,0.867)', borderBottom: 'rgb(115,162,175) solid 2px', borderTop: 'rgb(115,162,175) solid 2px'}}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <Logo style={{fontSize: '15px'}}>Zev Ubu Hoffman &copy; 2020</Logo>
            <Typography>Expand for Picture credits:</Typography>
          </Typography>
          {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                    <input type="hidden" name="cmd" value="_s-xclick"/>
                                    <input type="hidden" name="hosted_button_id" value="92TZKHPM5****"/>
                                    <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online."/>
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                                </form> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FlexBoxColumn>
            <Typography>
              <H3>Small and hidden pictures/credits:</H3>
            </Typography>
            <Typography> <H3>Carnival at night Image by <A href="https://unsplash.com/@ethanchoover">Ethan Hoovers </A></H3></Typography>
            <Typography> <H3>Fabulous queens at trans rally Image by <A href="https://unsplash.com/@karlbewick">Karl Bewick</A></H3></Typography>
            <Typography> <H3>Ox Image by <A href="https://unsplash.com/@azybeatlemania">Jason An</A></H3></Typography>
            <Typography> <H3>PennyGaff Stage Image by <A href="https://unsplash.com/@cys_escapes">Cyrus Crossan</A></H3></Typography>
          </FlexBoxColumn>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
    </div>
  );
}