const SESSION_KEY = "financePlanner:isAuthenticated";

export function setMockSession(isAuthenticated: boolean) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ isAuthenticated }));
  } catch {
    // ignore storage errors in mock mode
  }
}

export function clearMockSession() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore storage errors in mock mode
  }
}

export function mockLogout() {
  clearMockSession();
}

export function mockLogin() {
  setMockSession(true);
}

export function isMockAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return Boolean(parsed?.isAuthenticated);
  } catch {
    return false;
  }
}

