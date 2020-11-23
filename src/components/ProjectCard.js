import React from 'react';
import './Header.css';

function ProjectCard(props) {
    return(
        <div class="card project-card">
            <h3 class="card-title">Not ESPN</h3>
            <img src="https://user-images.githubusercontent.com/69565347/95638775-b4ac9900-0a4a-11eb-812d-b6ed876e8249.png" class="card-img-top" alt="NotESPN" />
            <div class="card-body">
                <p class="card-text">Using multiple API's, you can search and receive data for players and teams. Currently search is restricted to the NBA and 900+ Leagues in soccer.</p>
                <a href="https://npcoding25.github.io/Project-1/" class="card-text">{props.link}</a>
                <br/>
                <a href="https://github.com/npcoding25/Project-1" class="card-text">Go to Github Repository</a>
            </div>
        </div>
    )
}

export default ProjectCard;