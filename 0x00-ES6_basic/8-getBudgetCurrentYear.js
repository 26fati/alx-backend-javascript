function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const date = getCurrentYear();

  budget[`income-${date}`] = income;
  budget[`gdp-${date}`] = gdp;
  budget[`capita-${date}`] = capita;

  return budget;
}
