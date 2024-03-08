import React from "react";
import styled from "styled-components";

const Document = styled.img`
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    display: none;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow:  hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
  }
  &:hover ${Document}{
    display: flex;
  }

    @media screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 1px solid #306ee8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 4px;
`;

const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;  
`;

const Logo = styled.img`
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 4px;

    @media screen and (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 90};

    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};

    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: 10;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const ExperienceCard = ({ experience }) => {
    return (
    <Card>
        <Top>
            <Logo src={experience.img} />
            <Body>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <Duration>{experience.date}</Duration>
            </Body>
        </Top>
        <Description>{experience.desc}
        {experience?.skills && 
        <>
        <br/>
        <Skills>
            <b>Skills:</b>
            <ItemWrapper>
                {experience.skills.map(( skill ) => (
                    <Skill>• {skill}</Skill>
                ))}
            </ItemWrapper>
            </Skills>
            </>}
        </Description>
        {experience.doc && (
        <a href={experience.doc} target="new">
            <Document src={experience.doc} />
            </a>
            )}
    </Card>
    );
};

export default ExperienceCard;