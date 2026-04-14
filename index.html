<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Forum Authentication</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom styles for the 3D aesthetic on the right side */
        .right-panel-bg {
            background: linear-gradient(135deg, #ffe5e0 0%, #ffb3a0 50%, #ff8c66 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            min-height: 400px;
        }
        .safe-icon {
            width: 250px;
            height: 250px;
            background: #FF4B2B; /* Main theme */
            border-radius: 20px;
            box-shadow: 0 40px 60px rgba(0, 0, 0, 0.2), 0 0 100px rgba(255, 75, 43, 0.5);
            transform: rotateY(15deg) rotateX(10deg);
            position: relative;
            animation: float 5s ease-in-out infinite alternate;
        }
        .dial {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #cc3a21; /* Darker shade */
            border: 8px solid #ff7b5a; /* Lighter ring */
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
        }
        .handle {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 10px;
            background: #f0e5e0; /* Grayish handle */
            transform: translate(-50%, -50%) rotate(45deg);
            border-radius: 5px;
        }
        @keyframes float {
            0% { transform: translate(0, 0) rotateY(15deg) rotateX(10deg); }
            100% { transform: translate(10px, -10px) rotateY(15deg) rotateX(10deg); }
        }
        
        #app-container {
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
            background-color: white;
        }

        .custom-input {
            border-color: #e5e7eb;
        }
        .custom-input:focus {
            border-color: #FF4B2B;
            box-shadow: 0 0 0 1px #FF4B2B;
            outline: none;
        }

        .tab-active {
            background-color: white;
            color: #FF4B2B;
            box-shadow: 0 2px 6px rgba(255,75,43,0.3);
        }

        .button-primary {
            background-color: #FF4B2B;
        }
        .button-primary:hover {
            background-color: #e63f20;
        }
    </style>
</head>
<body>
    <div id="app-container" class="lg:flex">
        <!-- LEFT PANEL -->
        <div class="lg:w-1/2 p-6 sm:p-12 flex flex-col justify-between">
            <div class="mb-10 lg:mb-0">
                <div class="flex items-center space-x-2 text-xl font-bold text-gray-900">
                    <span>Tech Forum</span>
                </div>

                <h1 class="text-4xl font-extrabold text-gray-900 mt-20 mb-2">
                    <span id="welcome-title">Welcome Back</span>
                </h1>
                <p class="text-gray-500 mb-8">Please enter your details</p>

                <div class="flex bg-gray-100 rounded-xl p-1 max-w-sm mb-8 font-semibold text-sm">
                    <button id="signin-tab" class="w-1/2 py-2 px-4 rounded-lg tab-active transition-colors duration-200" onclick="switchForm('login')">Sign In</button>
                    <button id="signup-tab" class="w-1/2 py-2 px-4 rounded-lg text-gray-500 hover:text-gray-900 transition-colors duration-200" onclick="switchForm('register')">Signup</button>
                </div>
            </div>

            <!-- LOGIN FORM -->
            <div id="login-form-container" class="w-full max-w-sm transition-opacity duration-300">
                <form method="POST" action="/login">
                    <div class="mb-4">
                        <label for="login_email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div class="relative">
                            <input id="login_email" class="custom-input block w-full pl-10 pr-12 py-2 border rounded-xl placeholder-gray-400 text-gray-900" type="email" name="email" value="lialirezamp@gmail.com" required autofocus autocomplete="username" />
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="login_password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div class="relative">
                            <input id="login_password" class="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900" type="password" name="password" required autocomplete="current-password" placeholder="••••••••" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between text-sm mt-6">
                        <label for="remember_me" class="inline-flex items-center">
                            <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-FF4B2B shadow-sm focus:ring-FF4B2B" name="remember">
                            <span class="ms-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <a href="#" class="text-sm text-gray-600 hover:text-gray-900 underline">Forgot your password?</a>
                    </div>

                    <button type="submit" class="w-full mt-6 py-3 px-4 button-primary text-white font-bold rounded-xl transition duration-150 shadow-lg">Continue</button>
                </form>
            </div>

            <!-- REGISTER FORM -->
            <div id="register-form-container" class="w-full max-w-sm transition-opacity duration-300 hidden">
                <form method="POST" action="/register">
                    <div class="mb-4">
                        <label for="register_name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input id="register_name" class="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900" type="text" name="name" required autofocus autocomplete="name" />
                    </div>

                    <div class="mb-4">
                        <label for="register_email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input id="register_email" class="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900" type="email" name="email" required autocomplete="username" />
                    </div>

                    <div class="mb-4">
                        <label for="register_password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input id="register_password" class="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900" type="password" name="password" required autocomplete="new-password" placeholder="••••••••" />
                    </div>

                    <div class="mb-6">
                        <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input id="password_confirmation" class="custom-input block w-full pl-4 py-2 border rounded-xl placeholder-gray-400 text-gray-900" type="password" name="password_confirmation" required autocomplete="new-password" placeholder="••••••••" />
                    </div>

                    <button type="submit" class="w-full py-3 px-4 button-primary text-white font-bold rounded-xl transition duration-150 shadow-lg">Register</button>
                </form>
            </div>

            <div class="w-full max-w-sm mt-6">
                <p class="text-xs text-center text-gray-400 mt-20 max-w-xs mx-auto">
                    Join thousands of curious minds on our campus Tech Forum. Log in to ask questions, share insights, and collaborate with fellow students to solve problems and grow together.
                </p>
            </div>
        </div>

        <!-- RIGHT PANEL -->
        <div class="right-panel-bg lg:w-1/2 hidden lg:flex">
            <div class="safe-icon">
                <div class="dial"></div>
                <div class="handle"></div>
            </div>
        </div>
    </div>

    <script>
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
               signupTab.classList.add('text-gray-500');
               welcomeTitle.textContent = 'Welcome Back';
           } else if (mode === 'register') {
               loginForm.classList.add('hidden');
               registerForm.classList.remove('hidden');
               signupTab.classList.add('tab-active');
               signinTab.classList.remove('tab-active');
               signinTab.classList.add('text-gray-500');
               welcomeTitle.textContent = 'Join Tech Forum';
           }
        }

        window.onload = () => {
            document.querySelector('#login-form-container form').addEventListener('submit', (e) => e.preventDefault());
            document.querySelector('#register-form-container form').addEventListener('submit', (e) => e.preventDefault());
            switchForm('login');
        };
    </script>
</body>
</html>
