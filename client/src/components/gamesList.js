// TODO IMAGES not showing up unless externial link
import { Link } from "react-router-dom"; 
const games = [
    {
        title: "Rock Paper Scissors",
        img: "https://placekitten.com",
        tech: "Tech: HTML/CSS/JavaScript, ReactJs",
        description: "Basic good 'ol game of Rock Paper Scissors.",
        play: <Link to='/RockPaperScissors'></Link>,
        id:"1",
    },
    {
        title: "Tic Tac Toe",
        img: "https://placekitten.com",
        tech: "Tech: HTML/CSS/JavaScript, ReactJs",
        description: "Tic, Tac, Toe, or Naughts and Crosses, Xs and Os... you get it.",
        play: "./ticTacToe",
        id:"2",
    },
    {
        title: "Connect Four",
        img: "Placeholder",
        tech: "PlaceHolder",
        description: "PlaceHolder PlaceHolder PlaceHolder PlaceHolder PlaceHolder PlaceHolder",
        play: "./rockPaperScissor",
        id:"3",
    },
    {
        title: "Placeholder",
        img: "Placeholder",
        tech: "Placeholder",
        description: "Placeholder",
        play: "./rockPaperScissor",
        id:"4",
    },
    {
        title: "Placeholder",
        img: "Placeholder",
        tech: "Placeholder",
        description: "Placeholder.",
        play: "./rockPaperScissor",
        id:"5",
    },
    {
        title: "Placeholder",
        img: "Placeholder",
        tech: "Placeholder",
        description: "Placeholder.",
        play: "./rockPaperScissor",
        id:"6",
    },
]

export default games;