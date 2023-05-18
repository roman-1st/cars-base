import React, { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { CarsBase } from "../../../types/cars";
import * as S from './Card.style'
import ModalCard from "./ModalCard/ModalCard";

const Card = ( {id, name, model, year, color, price, latitude, longitude} : CarsBase) => {

    const {removeCardAction} = useActions()
    const [modal, setModal] = useState(false)



    const removeCard = () => {
        removeCardAction(id)
    }
    return (
        <S.Card>
            <ModalCard 
            modal={modal} 
            setModal={setModal} 
            id={id}
            // newTitle={newTitle}
            // setNewTitle={setNewTitle}
            // newPrice={newPrice}
            // setNewPrice={setNewPrice}
            // setNewModel={setNewModal}
            // newModel={newModel}
            />
            <S.cardId> {id} </S.cardId>
            <S.RemoveCardContainer onClick={() => removeCard()}>
                <span aria-label="удалить" role="button">&times;</span>
            </S.RemoveCardContainer>
            <S.ChangeCardContainer onClick={ () => setModal(true)} />
            <p> {name}&nbsp;{model} </p>
            <p> Год выпуска : {year} </p>
            <S.ColorContainer> <p> Цвет</p> &nbsp; <S.ColorCircle color={color} /></S.ColorContainer>
            <p> Цена : {price}$ </p>
        </S.Card>
    )
}

export default Card