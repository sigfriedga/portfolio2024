import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 12px;
    color: ${({ theme }) => theme.text_primary};

    @media screen and (max-width: 768px) {
        font-size: 12px;
        margin-top: 32px;
    }
`;

const Description = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
    gap: 30px;
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: rgba(255, 255, 255, 0.06);
    -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
    -webkit-box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
            box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
    z-index: 10;
    color: whitesmoke;
    border-radius: 1rem;
    border: 0.1px solid #73fda8;
    border-radius: 16px;
    padding: 18px 36px;

    @media screen and (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }

    @media screen and (max-width: 500px) {
        max-width: 300px;
        padding: 10px 36px;
    }
`;

const SkillTitle = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 20px;
    text-align: center;
`;

const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    padding: 12px 16px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
    }

    @media screen and (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;



const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Description>Below are the skills I've developed over the past 2 years.</Description>
                <SkillsContainer>
                    {skills.map((skill, index) => (
                    <Skill key={index}>
                        <SkillTitle>{skill.title}</SkillTitle>
                        <SkillList>
                            {skill.skills.map((item, itemIndex) => (
                                <SkillItem key={itemIndex}>
                                    <SkillImage src={item.image} />
                                    {item.name}
                                </SkillItem>
                            ))}
                        </SkillList>
                    </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
)};

export default Skills;