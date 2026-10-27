import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Heading = styled.h1`
  color: #000000;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 25px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Input = styled.input`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 14px;
  height: 40px;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
  padding: 8px 12px;
  outline: none;
  flex-grow: 1;
  margin-right: 12px;
`

export const Paragraph = styled.p`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0;
  margin-right: 16px;
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  padding: 10px 18px;
  cursor: pointer;
  outline: none;
`
