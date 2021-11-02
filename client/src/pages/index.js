import RockPaperScissors from "./RockPaperScissor";
import Contact from "./Contact";
import TicTacToe from "./TicTacToe";
import Home from "./Home";

const pages = [
  {
    Component: Home,
    path: "/",
    exact: true,
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
  },
  {
    Component: TicTacToe,
    path: "/tic-tac-toe",
    exact: true,
  },
];

export default pages;
