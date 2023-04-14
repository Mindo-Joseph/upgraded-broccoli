const getCurrentUser = async () => {
  try {
    const response = await fetch("/api/v1/users/current", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { getCurrentUser };
