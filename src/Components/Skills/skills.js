import React from 'react';
import {skills} from '../../data/constants';
import {Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillItem, SkillList, SkillTitle, SkillImage} from './SkillsStyledComponents';

const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skill Sets</Title>
                <Desc>Technical skills which I have acquired from over past 9 years through work experience and self learning </Desc>
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
