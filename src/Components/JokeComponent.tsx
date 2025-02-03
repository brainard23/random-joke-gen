import type React from "react"
import { useEffect, useState } from "react"
import { Button, ButtonContainer, JokeContainer, JokeText, JokeTitle, PunchlineText } from "./styles"

interface Joke {
  setup: string
  punchline: string
}

const JokeComponent: React.FC = () => {
  const [showPunchline, setShowPunchline] = useState(false)
  const [joke, setJoke] = useState<Joke | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  
  const fetchJoke = async () => {
    setIsLoading(true)
    setShowPunchline(false)
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke")
      const data = await response.json()
      setJoke({ setup: data.setup, punchline: data.punchline })
    } catch (error) {
      console.error("Error fetching joke:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchJoke()
  }, []) 

  if (isLoading) {
    return <JokeContainer>Loading joke...</JokeContainer>
  }

  if (!joke) {
    return <JokeContainer>Failed to load joke. Please try again.</JokeContainer>
  }

  return (
    <JokeContainer>
      <JokeTitle>Random Joke</JokeTitle>
      <JokeText>{joke.setup}</JokeText>
      <ButtonContainer>
        {
        !showPunchline ? 
        (<Button onClick={() => setShowPunchline(!showPunchline)}>
          Show Punchline
        </Button>) : 
        (<Button onClick={fetchJoke}>Get New Joke</Button>)
        }
      </ButtonContainer>
      {showPunchline && <PunchlineText>{joke.punchline}</PunchlineText>}
    </JokeContainer>
  )
}

export default JokeComponent

