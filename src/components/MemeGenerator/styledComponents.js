import styled from 'styled-components'

export const GenderatorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-size: 45px;
  color: #35469c;

  @media (max-width: 767px) {
    font-size: 35px;
  }
`
export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const CustomText = styled.label`
  color: #7e858e;
  margin-bottom: 3px;
`
export const CustomInput = styled.input`
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  color: #5a7184;
  padding: 5px;
  outline: none;
`
export const CustomContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`

export const CustomSelect = styled.select`
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  color: #5a7184;
  padding: 5px;
  outline: none;
`

export const CustomOption = styled.option`
  color: #1e293b;
`

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: white;
  cursor: pointer;
  border: none;
  padding: 5px;
  border-radius: 5px;
  align-self: flex-start;
  width: 150px;
`

export const BackgroundImageContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  height: 300px;
  background-size: cover;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Paragraph = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`
