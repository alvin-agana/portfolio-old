import './ProjectDescriptions.css';

const desc1 = <div className="project-desc">
    <h1>Memory Game</h1>
    <p className="desc">This is a memory/concentration game featuring one of my favorite cartoon characters, Pusheen. <br/><br/>

    I built this minimalistic game using HTML, CSS, and JavaScript with an object-oriented approach.
    It is one of my first projects, inspired by a card memorization game I play with my little brother.
    I wanted to gain a better understanding of web development, so I followed a tutorial on YouTube
    to help me get started, and then personalized it to my own. <br/>
    </p>
    <h2>Tech Stack: HTML, CSS, JavaScript</h2>
</div>

const desc2 = <div className="project-desc">
    <h1>Discord Bot</h1>
    <p className="desc"> This is a personal Discord Bot simulating a braniac dog, Michi. It's a shiba inu breed. I hope Michi will be my real life pet one day. <br/><br/>

    Michi fetches data from external API's and relays back to the Discord server with embedded chat messages displaying information such as the weather,
    a dictionary word, or even basic information about a Pokemon. I learned about using API's, JSON, and a very brief amount of Node.js as an introduction to frameworks.
    <br/></p>

    <h2>Tech Stack: JavaScript, Node.js, Discord.js</h2>
</div>


const ProjectDescriptions = [desc1, desc2];
const ProjectLinks = ["https://github.com/alvin-agana/Memory-Game", "https://github.com/alvin-agana/PersonalDiscordBot"];

export { ProjectDescriptions };
export { ProjectLinks };