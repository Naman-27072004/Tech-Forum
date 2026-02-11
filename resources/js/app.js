import './bootstrap';
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

// Tab switching logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form-container');
    const registerForm = document.getElementById('register-form-container');
    const signinTab = document.getElementById('signin-tab');
    const signupTab = document.getElementById('signup-tab');
    const welcomeTitle = document.getElementById('welcome-title');

    function switchForm(mode) {
        if (mode === 'login') {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            signinTab.classList.add('tab-active');
            signupTab.classList.remove('tab-active');
            welcomeTitle.textContent = 'Welcome Back';
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            signupTab.classList.add('tab-active');
            signinTab.classList.remove('tab-active');
            welcomeTitle.textContent = 'Join Tech Forum';
        }
    }

    signinTab.addEventListener('click', () => switchForm('login'));
    signupTab.addEventListener('click', () => switchForm('register'));
    switchForm('login');
});
