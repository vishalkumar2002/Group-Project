const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
     ,'image':'https://th.bing.com/th/id/OIP._h7s27M_cYLoJ7SzE7XRZQHaEK?w=282&h=180&c=7&o=5&pid=1.7'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
     ,'image':'https://th.bing.com/th/id/OIP._h7s27M_cYLoJ7SzE7XRZQHaEK?w=282&h=180&c=7&o=5&pid=1.7'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
     ,'image':'https://th.bing.com/th/id/OIP._h7s27M_cYLoJ7SzE7XRZQHaEK?w=282&h=180&c=7&o=5&pid=1.7'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
     ,'image':'https://th.bing.com/th/id/OIP._h7s27M_cYLoJ7SzE7XRZQHaEK?w=282&h=180&c=7&o=5&pid=1.7'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
     ,'image':'https://th.bing.com/th/id/OIP._h7s27M_cYLoJ7SzE7XRZQHaEK?w=282&h=180&c=7&o=5&pid=1.7'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
     ,'image':'https://th.bing.com/th/id/OIP._h7s27M_cYLoJ7SzE7XRZQHaEK?w=282&h=180&c=7&o=5&pid=1.7'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}