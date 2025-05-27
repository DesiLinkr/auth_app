export const mfConfig = {
  name: "auth_app",
  exposes: {
    "./sign_up": "./src/SignUp.tsx",
    "./sign_in": "./src/SignIn.tsx",
  },
  shared: ["react", "react-dom"],
};
