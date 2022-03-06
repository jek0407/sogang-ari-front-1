const LOCAL_STORAGE_TOKEN_KEY_NAME = "accessToken";

export default class AccessTokenService {
  public static get(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
  }
  public static set(token: string): void {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY_NAME, token);
  }
  public static remove(): void {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
  }
}