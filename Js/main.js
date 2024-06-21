export const getAllPersonas = async () => {
    try {
        let res = await fetch('https://6674179975872d0e0a950e53.mockapi.io/user');
        let data = await res.json();
        displayUsers(data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};
function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('persona1');

        userElement.innerHTML = `
            <div class="image">
                <img src="${user.avatar}" alt="${user.name}">
            </div>
            <div class="info_persona">
                <div class="info_persona1">
                    <b>${user.name_full}</b>
                </div>
                <div class="country">
                    <p>${user.description}</p>
                </div>
            </div>
        `;

        userList.appendChild(userElement);
    });
}
function filterUsers() {
    const searchValue = document.getElementById('input__search').value.toLowerCase();
    const users = document.querySelectorAll('.persona1');

    users.forEach(user => {
        const name = user.querySelector('b').textContent.toLowerCase();
        const location = user.querySelector('.country p').textContent.toLowerCase();

        if (name.includes(searchValue) || location.includes(searchValue)) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    });
}

document.getElementById('input__search').addEventListener('input', filterUsers);

window.addEventListener('DOMContentLoaded', getAllPersonas);