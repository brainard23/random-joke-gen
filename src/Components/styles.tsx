import styled from "styled-components"

export const JokeContainer = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const JokeTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`

export const JokeText = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 16px;
`

export const PunchlineText = styled.p`
  font-size: 18px;
  color: #4caf50;
  font-weight: bold;
  margin-top: 16px;
`

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`