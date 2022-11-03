import React from "react"
import Card from 'react-bootstrap/Card';
import pwdimg from '../../../public/Images/pwdgen.png';

export default function Projects() {
    return (
        <div>
            <h2>My Work</h2>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img src={pwdimg} variant="top" alt="a password generator application" />
                    <Card.Body>
                        <Card.Text>A password generator that can apply a number of different parameters.</Card.Text>
                        <Card.Link href="https://rosethorn10.github.io/password-gen/" target="_blank">Password Generator</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            {/* <div class="card" style="width: 18rem;">
                <img src="./assets/images/weather-page.png" class="card-img-top"
                    alt="a weather dashboard web application" />
                <div class="card-body">
                    <p class="card-text">A website which uses a data API to update weather conditions and a forecast.</p>
                    <Card.Link href="https://rosethorn10.github.io/weather-dashboard/" target="_blank" class="card-link">Weather Dashboard</Card.Link>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="./assets/images/AAIC.png" alt="the painting American Gothic on a web site" />
                <div class="card-body">
                    <p class="card-text">A group project demonstrating a variety of front-end web development skills.</p>
                    <a href="https://marianellag1.github.io/Explore-Art-Chicago/" target="_blank">Explore Art Chicago</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="./assets/images/joypainting.png" alt="opening theme from Joy of Painting" />
                <div class="card-body">
                    <p class="card-text">A group project building a complete full-stack web application</p>
                    <a href="https://warm-castle-73528.herokuapp.com/" target="_blank">Happy Little Trees</a>
                </div>
            </div> 
*/}
        </div>
    )
}