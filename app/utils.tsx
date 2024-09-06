const getMonthString = (monthNumber: number): string => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  return monthNames[monthNumber]; 
};

const getTimestamp = ():string => {
const currentTime = new Date();
let hours = currentTime.getHours(); 
const minutes = currentTime.getMinutes();
const amOrPm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12 || 12; // If hours is 0, set to 12 (midnight)

// Example output: 3:30 PM
return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`
}

export {getMonthString, getTimestamp}
