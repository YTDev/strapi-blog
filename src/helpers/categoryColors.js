// Create a Map of category titles to their corresponding colors
const CATEGORY_COLORS = new Map([
  ["Product Reviews", "orange"],
  ["Tech News", "green"],

  ["Industry Insights", "purple"],
]);

export const getCategoryColor = (title) => {
  return CATEGORY_COLORS.get(title) || "#000000";
};
