import React from 'react';
import {skills} from '../../data/constants';
import {Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillItem, SkillList, SkillTitle, SkillImage} from './SkillsStyledComponents';

const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skill Sets</Title>
                <Desc>The technical skills which I have acquired from past 9 years </Desc>
                <SkillsContainer>
                    {skills.map((skill) =>(
                        <Skill>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item)=>(
                                    <SkillItem>
                                        <SkillImage src={item.image}/>
                                        <span>{item.name}</span>
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
};

export default Skills;
