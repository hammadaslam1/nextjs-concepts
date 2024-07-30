'use client'

const names = [
    'John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Charlie Davis',
    'Eve Wilson', 'Frank Harris', 'Grace Lee', 'Henry Clark', 'Ivy Lewis',
    'Jack Walker', 'Kathy Young', 'Larry Hall', 'Mary Allen', 'Nancy Scott',
    'Oscar Adams', 'Patricia Baker', 'Quincy Turner', 'Rachel Nelson', 'Steve Hill',
    'Tina White', 'Uma King', 'Victor Wright', 'Wendy Green', 'Xander Thompson',
    'Yvonne Martinez', 'Zachary Perez', 'Ann Roberts', 'Ben Carter', 'Cathy Phillips',
    'David Evans', 'Elena Collins', 'George Stewart', 'Hannah Morris', 'Ian Rogers',
    'Julia Cook', 'Kevin Edwards', 'Lily Patterson', 'Michael Hughes', 'Nina Flores',
    'Oliver Sanders', 'Paula Ramirez', 'Quinn Price', 'Rose Bell', 'Sam Ward',
    'Tara Butler', 'Ursula James', 'Vince Morgan', 'Will Watson', 'Xena Brooks',
    'Yuri Wood', 'Zoe Bennett', 'Aaron Barnes', 'Betty Ross', 'Carl Henderson',
    'Donna Coleman', 'Ethan Russell', 'Fiona Perry', 'Gabe Simmons', 'Holly Foster',
    'Isaac Gonzales', 'Judy Bryant', 'Kyle Alexander', 'Linda Hayes', 'Mark Shaw',
    'Nora Ford', 'Oscar Kelly', 'Penny Cruz', 'Quinn Reynolds', 'Rita Griffin',
    'Sean Campbell', 'Tina Ortiz', 'Uma Jordan', 'Vince Patterson', 'Willa Jenkins',
    'Xander Harper', 'Yara Warren', 'Zane Hunter', 'Amy Kim', 'Brad Miller',
    'Chris Rivera', 'Diana Ramirez', 'Evan Murphy', 'Faye Powell', 'Gary Jenkins',
    'Helen Ross', 'Ivy Bailey', 'Jack Edwards', 'Kara Martin', 'Liam Thompson',
    'Maya Anderson', 'Nick Brooks', 'Olivia Carter', 'Paul Evans', 'Quincy Ford'
];

export const data = names.map((name, index) => ({
    id: index + 1,
    name: name,
    age: 30 + (index % 10)  // Example: varying ages between 30 and 39
}));
