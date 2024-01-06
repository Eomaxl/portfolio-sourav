import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`

export const Wrapper = styled.div`
  display:flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme})=> theme.text_primary};
  @media (max-width: 768px) {
    font-size:32px;
    margin-top: 12px;
  }
`

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 1000px;
  color: ${({theme}) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 30px;
    justify-content: center;
`

export const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({theme}) => theme.skill_card_bg};
  border: 0.1px solid #F5F5F5;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`

export const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
`

export const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

export const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

export const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`
