import { Code } from "lucide-react";
import { WebService } from "./web.service";

export class AuthService {
  private readonly web: WebService;

  constructor() {
    this.web = new WebService();
  }

  register = async (email: string, password: string) => {
    let name = null;
    function generateNameFromEmail(email: string) {
      name = email.split("@")[0];

      return name
        .replace(/\d+/g, "")
        .replace(/[\.\_\-]+/g, " ")
        .split(" ")
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .filter(Boolean)
        .join(" ");
    }
    await this.web.post("/auth/register", {
      name: generateNameFromEmail(email),
      email,
      password,
    });
  };

  google = async (credential: string) => {
    await this.web.post("/auth/google", {
      code: credential,
    });
  };
  github = async (code: string) => {
    await this.web.post("/auth/github/callback", {
      code,
    });
  };
  linkedin = async (code: string) => {
    await this.web.post("/auth/linkedin/callback", {
      code,
    });
  };
  login = async (email: string, password: string) => {
    await this.web.post("/auth/login", {
      email,
      password,
    });
  };
  forgotPassword = async (email: string) => {
    await this.web.post("/auth/forgot-password", {
      email,
    });
  };
  verifyResetToken = async (token: string) => {
    await this.web.post("/auth/verify_reset_token", { token });
  };
  resetPassword = async (token: string, password: string) => {
    await this.web.post("/reset-password", { token, password });
  };
  secureAccount = async (
    token: string,
    oldPassword: string,
    newPassword: string
  ) => {
    await this.web.post("/auth/secure/account", {
      token,
      oldPassword,
      newPassword,
    });
  };
  verifySecureToken = async (token: string) => {
    await this.web.post("/auth/secure/verify", {
      token,
    });
  };
}
