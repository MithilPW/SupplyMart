// Shared formatting helpers

const INR_FORMATTER = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatINR(value) {
  const numberValue = typeof value === "number" ? value : Number(value);
  return INR_FORMATTER.format(Number.isFinite(numberValue) ? numberValue : 0);
}
