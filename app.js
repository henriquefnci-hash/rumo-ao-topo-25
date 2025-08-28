let currentUser = null;
e.preventDefault();
const email = document.getElementById('login-email').value;
const pass = document.getElementById('login-password').value;
const user = DB.users.find(u => u.email === email && u.password === pass);
if (user) {
currentUser = user;
if (user.role === 'admin') showView('admin-dashboard');
else showView('aluno-dashboard');
} else alert('Login inválido');
});


// Adicionar membro
const addForm = document.getElementById('add-member-form');
if (addForm) addForm.addEventListener('submit', e => {
e.preventDefault();
DB.users.push({ id: Date.now(), email: document.getElementById('new-member-email').value, password: document.getElementById('new-member-pass').value, role: 'aluno' });
saveDB();
renderMembers();
});


function renderMembers() {
const list = document.getElementById('member-list');
list.innerHTML = '';
DB.users.filter(u => u.role === 'aluno').forEach(u => {
const li = document.createElement('li');
li.textContent = u.email;
const btn = document.createElement('button');
btn.textContent = 'Remover';
btn.onclick = () => {
DB.users = DB.users.filter(us => us.id !== u.id);
saveDB();
renderMembers();
};
li.appendChild(btn);
list.appendChild(li);
});
}


// Chat
const chatForm = document.getElementById('chat-form');
if (chatForm) chatForm.addEventListener('submit', e => {
e.preventDefault();
DB.chat.push({ id: Date.now(), autor: currentUser.email, texto: document.getElementById('chat-msg').value });
saveDB();
renderChat();
chatForm.reset();
});


function renderChat() {
const box = document.getElementById('chat-box');
if (!box) return;
box.innerHTML = '';
DB.chat.forEach(m => {
const div = document.createElement('div');
div.textContent = m.autor + ': ' + m.texto;
box.appendChild(div);
});
}


renderMembers();
renderChat();
showView('login');
