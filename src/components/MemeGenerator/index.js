import {Component} from 'react'
import {
  GenderatorContainer,
  Heading,
  AppContainer,
  FormContainer,
  CustomText,
  CustomInput,
  CustomContainer,
  CustomSelect,
  CustomOption,
  CustomButton,
  BackgroundImageContainer,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeOptionid: fontSizesOptionsList[0].optionId,
    formsubmitted: false,
  }

  updateUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  updateTopText = event => {
    this.setState({topText: event.target.value})
  }

  updateBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changeOption = event => {
    this.setState({activeOptionid: event.target.value})
  }

  renderMeme = () => {
    const {
      topText,
      imageUrl,
      bottomText,
      formsubmitted,
      activeOptionid,
    } = this.state

    return (
      <BackgroundImageContainer backgroundImage={imageUrl} data-testid="meme">
        <Paragraph fontSize={activeOptionid}>{topText}</Paragraph>
        <Paragraph fontSize={activeOptionid}>{bottomText}</Paragraph>
      </BackgroundImageContainer>
    )
  }

  submitForm = event => {
    event.preventDefault()
    this.setState({formsubmitted: true})
  }

  generateForm = () => {
    const {imageUrl, topText, bottomText, activeOptionid} = this.state

    return (
      <FormContainer onSubmit={this.submitForm}>
        <CustomContainer>
          <CustomText htmlFor="urlText">Image URL</CustomText>
          <CustomInput
            id="urlText"
            onChange={this.updateUrl}
            value={imageUrl}
            placeholder="Enter the Image Url"
          />
        </CustomContainer>
        <CustomContainer>
          <CustomText htmlFor="topText">Top Text</CustomText>
          <CustomInput
            id="topText"
            onChange={this.updateTopText}
            value={topText}
            placeholder="Enter the Top Text"
          />
        </CustomContainer>
        <CustomContainer>
          <CustomText htmlFor="bottomText">Bottom Text</CustomText>
          <CustomInput
            id="bottomText"
            onChange={this.updateBottomText}
            value={bottomText}
            placeholder="Enter the Bottom Text"
          />
        </CustomContainer>
        <CustomContainer>
          <CustomText htmlFor="select">Font Size</CustomText>
          <CustomSelect
            onChange={this.changeOption}
            value={activeOptionid}
            id="select"
          >
            {fontSizesOptionsList.map(eachOption => (
              <CustomOption
                key={eachOption.optionId}
                value={eachOption.optionId}
              >
                {eachOption.displayText}
              </CustomOption>
            ))}
          </CustomSelect>
        </CustomContainer>
        <CustomButton type="submit">Generate</CustomButton>
      </FormContainer>
    )
  }

  render() {
    const {activeOptionid, topText, bottomText, imageUrl} = this.state
    console.log(activeOptionid, imageUrl, topText, bottomText)
    return (
      <AppContainer>
        <GenderatorContainer>
          <Heading>Meme Generator</Heading>
          {this.renderMeme()}
          {this.generateForm()}
        </GenderatorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
