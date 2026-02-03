export const INVESTMENT_CATEGORIES = [
  { value: 'All', label: 'All' },
  { value: 'Stocks', label: 'Stocks' },
  { value: 'Bonds', label: 'Bonds' },
  { value: 'Crypto', label: 'Crypto' },
  { value: 'REITs', label: 'REITs' },
  { value: 'Commodities', label: 'Commodities' },
] as const;

export function getRiskColorAndLabel(riskLevel: number): { color: string; label: string } {
  switch (riskLevel) {
    case 1:
      return { color: '#10b981', label: 'Low' };
    case 2:
      return { color: '#f59e0b', label: 'Medium' };
    case 3:
      return { color: '#ef4444', label: 'High' };
    default:
      return { color: '#94a3b8', label: 'Unknown' };
  }
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case 'Stocks':
      return '#295bab';
    case 'Bonds':
      return '#6141aa';
    case 'Crypto':
      return '#ac3470';
    case 'REITs':
      return '#ae7a20';
    case 'Commodities':
      return '#198093';
    default:
      return '#494d55';
  }
}


export type CategoryType = 'All' | 'Stocks' | 'Bonds' | 'Crypto' | 'REITs' | 'Commodities';

export const DEFAULT_CATEGORY: CategoryType = 'All';
