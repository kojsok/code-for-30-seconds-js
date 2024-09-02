import { useRef, useState } from 'react';
import './SquareColorChanger.css'; // Подключаем файл стилей


export function SquareColorChanger() {
    const squareRef = useRef(null);
    const buttonRef = useRef(null); //хотел сделать ссылку на кнопку

    const [color, setColor] = useState('white'); // состояние для цвета

    const changeColor = () => {
        const newColor = color === 'red' ? 'white' : 'red';
        setColor(newColor);
        squareRef.current.classList.remove('red', 'white');
        squareRef.current.classList.add(newColor);
      };

    return (
        <div className='wrapper'>
          <div ref={squareRef} className="square white"></div>
          <button ref={buttonRef} onClick={changeColor} className="button">Смена цвета</button>
        </div>
      );
}