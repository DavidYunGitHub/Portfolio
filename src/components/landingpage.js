import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '../images/profile.jpg';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={img}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1> Full Stack Web Developer</h1>

                        <hr/>

                            <p>HTML/CSS | Javascript | React | NodeJS | Express | Postgres | PostgreSQL | Postico</p>

                        <div className="social-links">
                            {/* LinkenIn */}
                            <a href="https://www.linkedin.com/in/davidcyun/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/DavidYunGitHub" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                        </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing; 