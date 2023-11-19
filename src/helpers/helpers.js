export const createSlug = (str) => {
  // Remove leading and trailing whitespaces
  let slug = str.trim().toLowerCase();

  // Replace spaces with hyphens
  slug = slug.replace(/\s+/g, "-");

  // Remove special characters
  slug = slug.replace(/[^\w\-]+/g, "");

  return slug;
};
