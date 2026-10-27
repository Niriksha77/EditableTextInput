import {Component} from 'react'
import {
  MainContainer,
  CardContainer,
  Heading,
  InputContainer,
  Input,
  Paragraph,
  Button,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    inputText: '',
    isSaved: false,
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {inputText, isSaved} = this.state
    const buttonText = isSaved ? 'Edit' : 'Save'

    return (
      <MainContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isSaved ? (
              <Paragraph>{inputText}</Paragraph>
            ) : (
              <Input
                type="text"
                value={inputText}
                onChange={this.onChangeInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </InputContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default EditableTextInput
