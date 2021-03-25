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

const desc3 = <div className="project-desc">
    <h1>HackDavis 2021</h1>
    <p className="desc">At my first hackathon at HackDavis, I collaborated with another peer on developing a web application that provides healthy food recipes and encourages grocery shopping at local farmer's markets.<br/><br/>

    I utilized external API's such as the Spoonacular and USDA Farmer's Markets to relay info to users. I used Python and the web framework Flask, which I learned during the hackathon, to connect with our front-end.
    <br/></p>

    <h2>Tech Stack: Python, Flask, HTML, CSS</h2>
</div>

const desc4 = <div className="project-desc">
    <h1>2021 Daily Goal App</h1>
    <p className="desc">I built an app that I use every day to keep track of my daily food intake, exercise, and my engagement with my hobbies. <br/><br/>

    I took a Udemy class about MySQL and learned how to write SQL queries and integrate it into web applicatons. I applied my knowledge by building my own MySQL database, writing the schema, and building a web app to manage it!
    <br/></p>

    <h2>Tech Stack: MySQL, Node.js, Express.js, HTML, CSS, JavaScript</h2>
</div>

const ProjectDescriptions = [desc1, desc2, desc3, desc4];
const ProjectLinks = ["https://github.com/alvin-agana/Memory-Game", "https://github.com/alvin-agana/PersonalDiscordBot", "https://devpost.com/software/healthy-food-eoqnch", "https://github.com/alvin-agana/2021-daily-goal-app"];

export { ProjectDescriptions };
export { ProjectLinks };