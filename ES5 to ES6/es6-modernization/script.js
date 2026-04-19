const user = {
  firstName: 'Alex',
  lastName: 'Morgan',
  age: 28,
  location: 'Seattle'
};

const { firstName, lastName, age, location } = user;

const createGreeting = (name, city = 'your city') => `Hello, ${name}! Welcome to ${city}.`;

const formatUserDetails = ({ firstName, lastName, age, location }) => {
  const fullName = `${firstName} ${lastName}`;
  return `Name: ${fullName}, Age: ${age}, Location: ${location}`;
};

const showUserInfo = () => {
  const message = createGreeting(firstName, location);
  const details = formatUserDetails(user);
  const output = `${message}\n${details}`;
  document.getElementById('output').innerText = output;
};

const button = document.getElementById('showMessageBtn');
button.addEventListener('click', showUserInfo);
