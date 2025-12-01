export const mfConfig = {
  name: "auth_app",
  filename: "remoteEntry.js",
  exposes: {
    "./styles": "./src/styles/StyleEntry.ts", // ✅ Now valid
    "./sign_up": "./src/pages/SignUp.tsx",
    "./sign_in": "./src/pages/SignIn.tsx",
    "./forgot_password": "./src/pages/ForgotPassword.tsx",
    "./restpassword": "./src/pages/RestPassword.tsx",
    "./secureAccount": "./src/pages/SecureAccount.tsx",
    "./github": "./src/pages/GithubCallback.tsx",
    "./linkedin": "./src/pages/LinkedinCallback.tsx",
  },

  shared: ["react", "react-dom"],
};
