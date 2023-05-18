import React, { useState } from "react";
import { useActions } from "../../../../hooks/useActions";
import * as S from "./ModalCard.style";

interface ModalCardProps {
  modal: boolean;
  id: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCard = ({modal,setModal,id,}: ModalCardProps) => {
    const {changeCardAction} = useActions()
    const [name, setNewName] = useState<string>('')
    const [price, setNewPrice] = useState<number | ''>('')
    const [model, setNewModal] = useState('')

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filteredValue = event.target.value.replace(/[0-9]/g, '')
        setNewName(filteredValue);
    };

    const handleModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewModal(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = Number(event.target.value);

        if (!isNaN(numericValue)) {
            setNewPrice(numericValue);
        }
        if (numericValue === 0) {
            setNewPrice('')
        }
    };

    const addChange = () => {
        changeCardAction({name, model, price, id})
        setModal(false)
        setNewName('');
        setNewModal('')
        setNewPrice('')
    }

  return (
    <S.CardModalWindow style={{ display: modal ? 'block' : 'none'}} >
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
