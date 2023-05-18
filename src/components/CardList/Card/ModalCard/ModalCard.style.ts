import styled from "styled-components";

export const CardModalWindow = styled.div`
    position: fixed;
    // display: none;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100vw;
    height: 100vh;
    border: 1px solid green;
    background: rgba(60, 60, 60, 0.5);
`

export const CardModalContainer = styled.div`
    position: relative;
    top: calc(50% - 180px);
    left: calc(50% - 300px);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 320px;
    border: 1px solid green;
    border-radius: 12px;

    background: #FFFFFF;

    h2, p, input{
        background: none;
    }


    div {
        background: none;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div:first-child {
        width: 25px;
    }

    input {
        width: 180px;
        padding-left: 20px;
        height: 20px;
        border: 1px solid gray;

        &:focus {
            outline: none;
            border-color: lightgray;
        }
    }

`

export const ChangeCardButton = styled.button`
    margin-top: 30px;
    width: 150px;
    height: 40px;
    font-size: 18px;
    border: 1px solid blue;
    background: rgba(73, 136, 245, 0.5);
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        outline: none;
        transition: 0.2s;
        border: 1px solid blue;
        background: rgba(73, 136, 245);
        color: #fff;
    }

    &:active {
        margin-top: 25px;
        transition: 0.2s;
        outline: none;
    }
`

export const CloseModalWindow = styled.div`
    margin-top: 0;
    cursor: pointer;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgba(222, 222, 222, 0.5);
    position: absolute;
    top: 5px;
    right: 5px;
    box-sizing: border-box;

    span {
        position: absolute;
        top: 3px;
        right: 8px;
        background: none;
        &:hover {
            // background-color: rgb(189, 189, 189, 0.5);

        }
    }

    &:hover {
        transition: 0.2s;
        background-color: rgba(252, 56, 38, 0.7);
    }
`
