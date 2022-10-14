export const isToken = () => {
  const auth =
    !!sessionStorage.getItem("SCHOOL_ACCESS_TOKEN") ||
    !!localStorage.getItem("SCHOOL_ACCESS_TOKEN");
  return auth;
};
