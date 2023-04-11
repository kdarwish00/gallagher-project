import {
  LOWER_TAX,
  NI_TAX,
} from "./constants/taxConstants";

export const lowerThresholdTaxNi = (lowerThresholdIncome) => {
  const taxAbleAmount = lowerThresholdIncome - 15000;
  const taxDue = taxAbleAmount * LOWER_TAX;
  const niDue = taxAbleAmount * NI_TAX;
  const netPay = lowerThresholdIncome - taxDue - niDue;
  return { netPay, taxAbleAmount, taxDue, niDue };
};
