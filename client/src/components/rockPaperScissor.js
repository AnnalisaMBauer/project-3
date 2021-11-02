import { useEffect, useState } from 'react'

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
          setResult('YOU WIN!')
          break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          setResult('YOU LOSE!')
          break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
          setResult('ITS A DRAW!')
          break
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div className="d-flex col-12 justify-content-center align-items-center mt-5">
      <div className="p-5">
        <div className='' >
          <h1>user choice is: {userChoice}</h1>
          <h1>computer choice is: {computerChoice}</h1>
        </div>
        <div className=''>
          {choices.map((choice, index) =>
        <button className="m-2" key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      )}
      </div>
      <h1>{result}</h1>
    </div>
    </div>
  )
}

export default RockPaperScissors