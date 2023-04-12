const MOCK_URL = "http://www.mocky.io/v2/5ba8efb23100007200c2750c";

const getUsers = async () => {
  const response = await fetch(MOCK_URL);
  const result = await response.json();
  return result;
};

export const userService = {
  getUsers,
};
