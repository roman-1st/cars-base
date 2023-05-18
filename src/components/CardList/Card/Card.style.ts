import styled from "styled-components";

export const Card = styled.div`
    width: 200px;
    height: 220px;
    margin: 20px;
    padding-top: 30px;
    padding-left: 30px;
    border: 1px solid lightgray;
    border-radius: 12px;
    position: relative;

    &:hover {
        margin-top: 15px;
        transition: 0.2s;
        box-shadow: 0 2px 5px rgba(0,0,0, 0.5);
        cursor: pointer;

    }
`

export const cardId = styled.span`
    position: absolute;
    top: 12px;
    left: 15px;
`

export const RemoveCardContainer = styled.div`
    margin-top: 0;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgba(222, 222, 222, 0.5);
    position: absolute;
    top: 5px;
    right: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        position: absolute;
        top: 3px;
        height: 0px;
    }

    &:hover {
        transition: 0.2s;
        background-color: rgba(252, 56, 38, 0.7);
    }
`

export const ChangeCardContainer = styled.div`
    background-image: url('./changeCardIcon.svg');
    background-size: cover;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 5px;
    right: 45px;
    cursor: pointer;

    &:hover {
        transition: 0.2s;
        width: 25px;
        height: 25px;
        background-color: lightgreen;
    }
`

interface CardStyleProps {
    color: string
}

export const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    p {
        margin: auto 0;
    }
`

export const ColorCircle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};

`