const csk = {
  isCamelCase(string) {
    // format : first letter of each word in capital
    //condition:
    // Check for no spaces
    // Check for special character

    inputAsArray = string.split("");
    result = inputAsArray
      .map((item, index) => {
        if (index == 0) {
          if (!isNaN(item) || item != item.toLowerCase()) {
            return false;
          } else {
            return true;
          }
        } else if (inputAsArray.length == index + 1) {
          if (item == item.toUpperCase()) {
            return false;
          } else {
            return true;
          }
        } else if (item == item.toUpperCase()) {
          if (
            inputAsArray[index + 1] == inputAsArray[index + 1].toUpperCase()
          ) {
            return false;
          } else {
            return true;
          }
        } else if (isNaN(item) && item.toLowerCase() != item.toUpperCase()) {
          return true;
        } else {
          return false;
        }
      })
      .every(item => item == true);

    return result;
  },

  isSnakeCase(string) {
    inputAsArray = string.split("");
    result = inputAsArray
      .map((item, index) => {
        if (item == "_") {
          return true;
        } else if (item) {
          if (item.toLowerCase() != item.toUpperCase()) return true;
          else return false;
        } else if (item == item.toLowerCase() && item != " ") {
          return true;
        } else {
          return false;
        }
      })
      .every(item => item == true);
    return result;
  },

  isKebabCase(string) {
    inputAsArray = string.split("");
    result = inputAsArray
      .map((item, index) => {
        if (item == "-") {
          return true;
        } else if (item) {
          if (item.toLowerCase() != item.toUpperCase()) return true;
          else return false;
        } else if (item == item.toLowerCase() && item != " ") {
          return true;
        } else {
          return false;
        }
      })
      .every(item => item == true);
    return result;
  }
};
