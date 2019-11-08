import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Nasa from "../images/NASA_Project.png";
import Chat from "../images/groupproject2.jpg";
import Super from "../images/heroesvsvillans.jpg";
import Gardenia from "../images/gardenia.png";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' +Nasa + ') center / cover'}} >NASA Project</CardTitle>
            <CardText>
              NASA photo of the day web application, allows users to input date and view photos of the day from NASA. Built with React.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/DavidYunGitHub/nasaproject.git" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              <Button colored><a href="https://nasaproject.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' +Chat + ') center / cover'}} >Chat Application</CardTitle>
            <CardText>
              Chat application, allows users to enter specific chatrooms based on category selection, build with NodeJS, Socket.io and PostgreSQL
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/DavidYunGitHub/ChatApp.git" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' +Super + ') center / cover'}} >SuperHero Project</CardTitle>
            <CardText>
              API project used to compare different superheroes and villans, also showcases movies, built with HTML/CSS, Javascript
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/DavidYunGitHub/superheroapiproject.git" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              <Button colored><a href="https://davidyungithub.github.io/superheroapiproject/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' +Gardenia + ') center / cover'}} >Capstone Project</CardTitle>
            <CardText>
              Home garden monitoring application, allows user to track health of plants, built with React, NodeJS, Express, Postico and PostgreSQL
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/DavidYunGitHub/gardenia2.git" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
              <Button colored><a href="https://drive.google.com/open?id=1z_gcBlMEFkolejzxaPdzpK7sv8M6Agpg" rel="noopener noreferrer" target="_blank">Video Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    // } else if(this.state.activeTab === 1) {
    //   return (
    //     <div><h1>This is Angular</h1></div>
    //   )
    // } else if(this.state.activeTab === 2) {
    //   return (
    //     <div><h1>This is VueJS</h1></div>
    //   )
    // } else if(this.state.activeTab === 3) {
    //   return (
    //     <div><h1>This is MongoDB</h1></div>
    //   )
    // }
      }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          {/* <Tab>NodeJS</Tab>
          <Tab>API Projects</Tab>
          <Tab>Cap Stone Project</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
