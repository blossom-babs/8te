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

const getDate = () => {
const options:Intl.DateTimeFormatOptions ={ year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date();
const formattedDate = date.toLocaleDateString('en-US', options);

return formattedDate
}

export {getMonthString, getTimestamp, getDate}
