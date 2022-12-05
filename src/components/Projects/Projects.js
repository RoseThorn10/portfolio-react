import React from "react"
import Card from 'react-bootstrap/Card';
import pwdimg from '../../Images/pwdgen.png';
import wthrimg from '../../Images/weather-page.png';
import AAIC from '../../Images/AAIC.png';
import joy from '../../Images/joypainting.png';


export default function Projects() {
    return (
        <div>
            <h2>My Work</h2>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img src={pwdimg} variant="top" alt="a password generator application" />
                    <Card.Body>
                        <Card.Text className="card-text">A password generator that can apply a number of different parameters.</Card.Text>
                        <Card.Link href="https://rosethorn10.github.io/password-gen/" target="_blank">Password Generator</Card.Link>
                        <Card.Link href="https://github.com/RoseThorn10/password-gen" target="_blank">Source Code</Card.Link>
                    </Card.Body>
                </Card>
                {/* </div> */}
                <Card style={{ maxWidth: '18rem' }}>
                    <Card.Img src={wthrimg} variant="top" alt="weather application" />
                    <Card.Body>
                        <Card.Text class="card-text">A website which uses a data API to update weather conditions and a forecast.</Card.Text>
                        <Card.Link href="https://rosethorn10.github.io/weather-dashboard/" target="_blank" class="card-link">Weather Dashboard</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ maxWidth: '18rem' }}>
                    <Card.Img src={AAIC} variant="top" alt="the painting American Gothic" />
                    <Card.Body>
                        <Card.Text class="card-text">A group project demonstrating a variety of front-end web development skills.</Card.Text>
                        <Card.Link href="https://marianellag1.github.io/Explore-Art-Chicago/" target="_blank">Explore Art Chicago</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ maxWidth: '18rem' }}>
                    <Card.Img src={joy} variant="top" alt="Joy of Painting theme" />
                    <Card.Body>
                        <Card.Text class="card-text">A group project building a complete full-stack web application</Card.Text>
                        <Card.Link href="https://warm-castle-73528.herokuapp.com/" target="_blank">Happy Little Trees</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>    
    )    
            
}