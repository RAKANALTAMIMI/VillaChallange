import type { ToasterProps } from 'react-hot-toast';

export const TOAST_POSITION: ToasterProps['position'] = 'top-right';

export const toastOptions: ToasterProps['toastOptions'] = {
  style: {
    background: '#1e293b',
    color: '#e2e8f0',
    border: '1px solid #334155',
    borderRadius: '8px',
    padding: '12px 16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  success: {
    iconTheme: {
      primary: '#10b981',
      secondary: '#1e293b',
    },
  },
  error: {
    iconTheme: {
      primary: '#ef4444',
      secondary: '#1e293b',
    },
  },
  duration: 3000,
};
