import React, { Component} from 'react';
import Pdf from "../resume/David Yun Resume.pdf";
import Screenshoot from "../images/resume.png";
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { pathToFileURL } from 'url';


class Resume extends Component {

    
    render() {
        return (
        <div className="resumecard">
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '500px', background: 'url(' +Screenshoot + ')  center / cover'}}></CardTitle>
                <CardActions border>
                    <Button colored><a href={Pdf} rel="noopener noreferrer" target="_blank">Download Resume</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        </div>
       
        )
    }
}

export default Resume; 