import React, { useState } from "react";
import { useActions } from "../../../../hooks/useActions";
import * as S from "./ModalCard.style";

interface ModalCardProps {
  modal: boolean;
  id: number;
//   newPrice: string;
//   newTitle: string ;
//   newModel: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
//   setNewTitle: React.Dispatch<React.SetStateAction<string>>;
//   setNewPrice: React.Dispatch<React.SetStateAction<string>>;
//   setNewModel: React.Dispatch<React.SetStateAction<string>>;
}

const ModalCard = ({
  modal,
  setModal,
  id,
//   newTitle,
//   setNewTitle,
//   newModel,
//   setNewModel,
//   newPrice,
//   setNewPrice,
}: ModalCardProps) => {

    const {changeCardAction} = useActions()
    const [name, setNewName] = useState('')
    const [price, setNewPrice] = useState('')
    const [model, setNewModal] = useState('')

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentTitle = event.target.value
        currentTitle.replace(/[^0-9]/g, '')
        setNewName(currentTitle);
    };
    const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewModal(event.target.value);
    };
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPrice(event.target.value);
    };

    const addChange = () => {
        changeCardAction({name, model, price, id})
        setModal(false)
    }

  return (
    <S.CardModalWindow style={{ display: modal ? "block" : "none" }}>
      <S.CardModalContainer>
        <S.CloseModalWindow onClick={() => setModal(false)}>
          <span aria-label="закрыть" role="button">
            &times;
          </span>
        </S.CloseModalWindow>
        <h2> Изменение марки, модели и стоимости </h2>
        <div>
          <p> Изменение марки </p> 
          <input 
          type='text'
          onChange={handleNameChange}
          value={name}
          />
        </div>
        <div>
          <p> Изменение модели </p> 
          <input 
          type='text'
          onChange={handleModelChange}
          value={model}
          />
        </div>
        <div>
          <p> Изменение стоимости </p>
          <input 
          type='text'
          onChange={handlePriceChange}
          value={price}
          />
        </div>
        <S.ChangeCardButton onClick={addChange}> Изменить </S.ChangeCardButton>
      </S.CardModalContainer>
    </S.CardModalWindow>
  );
};

export default ModalCard;
