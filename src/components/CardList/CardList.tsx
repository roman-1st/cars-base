import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Card from "./Card/Card";

import * as S from './CardList.style'

const CardList = () => {
    const {isLoading, base} = useTypedSelector( state => state.cars)
    const {getCarsBase} = useActions()
    console.log(base);

    useEffect ( () => {
        getCarsBase()
    }, [])

    if (isLoading) return (
        <>
            <p> Is loading... </p>
        </>
    )

    return (
        <S.CardList>
            { base.map ( (el) => 
                <Card 
                key={el.id} 
                id={el.id} 
                name={el.name}
                model={el.model}
                year={el.year}
                color={el.color}
                price={el.price}
                latitude={el.latitude}
                longitude={el.longitude}
                />
            )}
        </S.CardList>
    )
}

export default CardList