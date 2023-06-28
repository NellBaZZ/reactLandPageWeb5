import React, { useState } from 'react';
import './index.css';

// Компонент заголовка
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

// Компонент формы бронирования
const ReservationForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [bookingSubmitted, setBookingSubmitted] = useState(false);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Отправка данных бронирования на сервер
      console.log('Отправлено бронирование:', { name, date, time });
      setBookingSubmitted(true);
    };
  
    return (
      <div>
        {bookingSubmitted ? (
          <div>
            <p>Отправлено бронирование</p>
            <p>Имя: {name}</p>
            <p>Дата: {date}</p>
            <p>Время: {time}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Ваше имя" />
            <input type="date" value={date} onChange={handleDateChange} />
            <input type="time" value={time} onChange={handleTimeChange} />
            <button type="submit">Забронировать</button>
          </form>
        )}
      </div>
    );
  };

// Компонент списка меню
const MenuList = () => {
    const menuItems = ['Рис', 'Лапша', 'Курица', 'Свинина','Говядина','Утка по пекински','Гедза'];
    const [selectedItems, setSelectedItems] = useState([]);
  
    const handleItemClick = (item) => {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    };
  
    return (
      <div>
        <h1>Меню</h1>
        <h3></h3>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
              {item} {selectedItems.includes(item) && <span>✓</span>}
            </li>
          ))}
        </ul>
        <div>
          <h3>Выбранные блюда:</h3>
          {selectedItems.length === 0 ? (
            <li>Ничего не выбрано</li>
          ) : (
            <ul>
              {selectedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

// Основной компонент страницы
const LandingPage = () => {
  return (
    <div>
      <Header title="Добро пожаловать в наш ресторан!" />
      <ReservationForm />
      <MenuList />
    </div>
  );
};

export default LandingPage;