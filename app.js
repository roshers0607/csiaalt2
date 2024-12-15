document.addEventListener('DOMContentLoaded', () => {
    // Page Navigation
    function showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        // Show selected page
        document.getElementById(pageId).classList.add('active');
    }

    // Login Form
    const loginForm = document.getElementById('login-form');
    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        showPage('dashboard-page');
    });

    // Signup Form
    const signupForm = document.getElementById('signup-form');
    signupForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        showPage('dashboard-page');
    });

    // Signup Link
    const signupLink = document.getElementById('signup-link');
    signupLink?.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('signup-page');
    });

    // Dropdown Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownContent = document.getElementById('dropdown-content');
    menuToggle?.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Navigation Links
    const workoutNav = document.getElementById('workout-nav');
    workoutNav?.addEventListener('click', () => {
        showPage('workout-page');
        dropdownContent.style.display = 'none';
    });

    const mealNav = document.getElementById('meal-nav');
    mealNav?.addEventListener('click', () => {
        showPage('meal-page');
        dropdownContent.style.display = 'none';
    });

    const bmiNav = document.getElementById('bmi-nav');
    bmiNav?.addEventListener('click', () => {
        showPage('bmi-page');
        dropdownContent.style.display = 'none';
    });

    // Logout
    const logoutNav = document.getElementById('logout-nav');
    logoutNav?.addEventListener('click', () => {
        showPage('login-page');
        dropdownContent.style.display = 'none';
    });

    // Back to Dashboard Buttons
    const backButtons = [
        'back-to-dashboard', 
        'back-to-dashboard-meal', 
        'back-to-dashboard-bmi'
    ];
    backButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        btn?.addEventListener('click', () => showPage('dashboard-page'));
    });

    // BMI Calculator
    const calculateBmiBtn = document.getElementById('calculate-bmi');
    calculateBmiBtn?.addEventListener('click', () => {
        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;
        
        if (height && weight) {
            const bmi = weight / ((height/100) ** 2);
            const result = document.getElementById('bmi-result');
            
            if (bmi < 18.5) result.textContent = `BMI: ${bmi.toFixed(1)} (Underweight)`;
            else if (bmi < 25) result.textContent = `BMI: ${bmi.toFixed(1)} (Normal)`;
            else if (bmi < 30) result.textContent = `BMI: ${bmi.toFixed(1)} (Overweight)`;
            else result.textContent = `BMI: ${bmi.toFixed(1)} (Obese)`;
        }
    });

    // Quick Action Buttons
    const startWorkoutBtn = document.getElementById('start-workout');
    startWorkoutBtn?.addEventListener('click', () => {
        showPage('workout-page');
    });

    const logMealBtn = document.getElementById('log-meal');
    logMealBtn?.addEventListener('click', () => {
        showPage('meal-page');
    });
});
