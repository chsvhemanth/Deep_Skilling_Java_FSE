import Trainer from "./Trainer.js";

const trainersMock = [
  new Trainer('t-venkat',
    'Venkat',
    'venkat@example.com',
    '9000000001',
    'Java',
    ['Java', 'Spring', 'Hibernate']),

  new Trainer('t-sai',
    'Sai',
    'sai@example.com',
    '9000000002',
    'Python',
    ['Python', 'Django', 'Flask']),

  new Trainer('t-ram',
    'Ram',
    'ram@example.com',
    '9000000003',
    'JavaScript',
    ['JavaScript', 'React', 'Node.js'])
];

export default trainersMock;