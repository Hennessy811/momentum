import { DateTime } from 'luxon';

export const getTimeStr = () => DateTime.local().toLocaleString({ hour: 'numeric', minute: 'numeric', hour12: false });

export const getGreeting = () => {
  const data = [
    [0, 4, 'Good night'],
    [5, 11, 'Good morning'], // Store messages in an array
    [12, 17, 'Good afternoon'],
    [18, 23, 'Good evening'],
    [24, 24, 'Good night'],
  ];
  const hr = new Date().getHours();

  for (let i = 0; i < data.length; i++) {
    if (hr >= data[i][0] && hr <= data[i][1]) {
      return data[i][2];
    }
  }
};

export default getTimeStr;
