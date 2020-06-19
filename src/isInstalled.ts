export default (packageName: string): boolean => {
  try {
    require.resolve(packageName);

    return true;
  } catch (err) {
    return false;
  }
};
