const CATEGORY_COLORS = new Map([
  ["Product Reviews", "orange"],
  ["Tech News", "green"],
  ["Industry Insights", "purple"],
]);

const getCategoryColor = (title) => {
  return CATEGORY_COLORS.get(title) || "#000000";
};

export default getCategoryColor;
