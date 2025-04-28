// Você pode adicionar funcionalidades aqui, como manipulação do clique do botão de login.
const loginButton = document.getElementById('login-btn');

if (loginButton) {
    loginButton.addEventListener('click', () => {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        if (usernameInput && passwordInput) {
            const username = usernameInput.value;
            const password = passwordInput.value;

            console.log('Usuário:', username);
            console.log('Senha:', password);
            // Aqui você adicionaria a lógica de autenticação real.
            alert('Botão de login clicado!');
        }
    });
}
