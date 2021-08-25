/**
 * Access token
 */
export interface AccessToken {
  created: Date;
  access_token: string;
  expires_in?: number;
  refresh_token?: string;
  refresh_expires_in?: number;
  firstName?: string;
  lastName?: string;
  userId?: string;
  roles?: string[];
}

/**
 * Configuration
 */
export interface Configuration {
  auth: {
    url: string;
    realm: string;
    clientId: string;
  };
  api: {
    baseUrl: string;
  };
}

/**
 * Interface for error context type
 */
export interface ErrorContextType {
  error?: string;
  setError: (message: string, error?: any) => void;
}