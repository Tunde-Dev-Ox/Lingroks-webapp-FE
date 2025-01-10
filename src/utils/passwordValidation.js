export const validatePassword = (password) => {
    const criteria = {
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      isLongEnough: password.length >= 8,
    };
    return criteria;
  };
  