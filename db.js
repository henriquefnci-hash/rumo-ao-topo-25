const DB = {
users: JSON.parse(localStorage.getItem('users') || '[]'),
notas: JSON.parse(localStorage.getItem('notas') || '[]'),
ocorrencias: JSON.parse(localStorage.getItem('ocorrencias') || '[]'),
listas: JSON.parse(localStorage.getItem('listas') || '[]'),
avisos: JSON.parse(localStorage.getItem('avisos') || '[]'),
chat: JSON.parse(localStorage.getItem('chat') || '[]'),
};


function saveDB() {
for (let k in DB) localStorage.setItem(k, JSON.stringify(DB[k]));
}


// Seed admin
if (!DB.users.find(u => u.email === 'henriquefnci@gmail.com')) {
DB.users.push({ id: Date.now(), email: 'henriquefnci@gmail.com', password: 'Henrique@4', role: 'admin' });
saveDB();
}

