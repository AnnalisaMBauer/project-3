import RockPaperScissors from "./RockPaperScissors/RockPaperScissor";
import Contact from "./contact";
import TicTacToe from "./TicTacToe";
import Snake from "./Snake";
import Home from "./Home";
import Login from "./Login";

const pages = [
  {
    Component: Home,
    path: "/",
    exact: true,
    isProtected: true,
  },
  {
    Component: Contact,
    path: "/contact",
    exact: true,
  },
  {
    Component: RockPaperScissors,
    path: "/rock-paper-scissors",
    exact: true,
    isProtected: true,
  },
  {
    Component: TicTacToe,
    path: "/tic-tac-toe",
    exact: true,
    isProtected: true,
  },
  {
    Component: Snake,
    path: "/snake",
    exact: true,
    isProtected: true,
  },
  {
    Component: Login,
    path: "/login",
    exact: true,
  },
];

export default pages;
