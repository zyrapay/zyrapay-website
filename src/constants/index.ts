// App Information
export const APP_NAME = "Zyra";
export const APP_DESCRIPTION = "Application description";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
export const API_TIMEOUT = 30000;

// Routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
} as const;

// Navigation
export const NAV_LINKS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Contact", href: ROUTES.CONTACT },
] as const;

// Authentication
export const AUTH = {
  TOKEN_KEY: "auth_token",
  USER_KEY: "current_user",
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// UI Configuration
export const UI = {
  TOAST_DURATION: 3000,
  DEBOUNCE_DELAY: 500,
  ANIMATION_DURATION: 300,
} as const;

// Date Formats
export const DATE_FORMATS = {
  SHORT: "dd/MM/yyyy",
  LONG: "MMMM dd, yyyy",
  DATETIME: "dd/MM/yyyy HH:mm",
} as const;

// Status Constants
export const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
} as const;

// Validation
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 255,
} as const;