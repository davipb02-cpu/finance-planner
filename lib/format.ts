/**
 * Formats a number as Brazilian Real (BRL) currency.
 * Uses pt-BR locale formatting: R$ 1.234,56
 * 
 * @param value - The numeric value to format
 * @returns Formatted currency string (e.g., "R$ 1.234,56")
 */
export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

