import React from 'react';
import { useState } from 'react';
import { MdCalendarToday } from 'react-icons/md';
import styled from 'styled-components';
import Calendar from '../../Calendar/calendar';

const PIcker = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #dae0e6;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.04);
  border-radius: 5px;
  align-items: center;
  width: fit-content;
  padding: 0 14px;
  position: relative;
  input {
    margin-left: 12px;
    padding: 9px 0;
    border: none;
    outline: none;
  }
`;

const Popup = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  margin-top: 0.5em;
  position: absolute;
  width: 342px;
  /* background-color: #e9e9e9; */
`;
const DateInput = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dateValue, setDateValue] = useState('');
  function handleKeyDown(event) {
    if (
      event.key === 'Backspace' &&
      (event.target.value.length === 3 || event.target.value.length === 6)
    ) {
      setDateValue(dateValue.slice(0, -1));
    }
  }
  const handleDateChange = (event) => {
    const inputValue = event.target.value;
    let formattedValue = inputValue;
    if (inputValue.length === 2) {
      formattedValue = inputValue.replace(/^(\d{2})/, '$1/'); // Добавляем "/" после первых двух символов
    }
    if (inputValue.length === 5) {
      formattedValue = inputValue.replace(/^(\d{2})\/(\d{2})/, '$1/$2/');
    }
    setDateValue(formattedValue);
  };
  return (
    <>
      <PIcker>
        <MdCalendarToday onClick={() => setOpenCalendar((prev) => !prev)} />
        <input
          type='text'
          value={dateValue}
          onKeyDown={handleKeyDown}
          onChange={handleDateChange}
        />
      </PIcker>
      <Popup open={openCalendar}>
        <Calendar />
      </Popup>
    </>
  );
};

export default DateInput;
