import React from 'react';
import styled from 'styled-components';
import { Section } from '../common/section';
import { Buttons } from './buttons';
import Header from './header';
import Month from './month';

const CalendarSection = styled(Section)`
  padding: 24px;
  margin: 1em;
`;

const Calendar = () => {
  return (
    <CalendarSection>
      <Header>March</Header>
      <Month />
      <Buttons />
    </CalendarSection>
  );
};

export default Calendar;
