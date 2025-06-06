export const mfConfig = {
  name: "auth_app",
  filename: "remoteEntry.js",
  exposes: {
    "./styles": "./src/styles/StyleEntry.ts", // ✅ Now valid
    "./sign_up": "./src/SignUp.tsx",
    "./sign_in": "./src/SignIn.tsx",
    "./forgot_password": "./src/ForgotPassword.tsx",
  },

  shared: ["react", "react-dom"],
};
