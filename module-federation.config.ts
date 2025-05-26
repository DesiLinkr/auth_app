export const mfConfig = {
  name: "auth_app",
  exposes: {
    "./sign_up": "./src/SignUp.tsx",
  },
  shared: ["react", "react-dom"],
};
