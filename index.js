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
  },

  camelCaseToSnakeCase(string) {
    if (this.isCamelCase(string)) {
      position = [];
      inputAsArray = string.split("");
      inputAsArray.forEach((item, index) => {
        if (
          index + 1 != inputAsArray.length &&
          inputAsArray[index + 1] == inputAsArray[index + 1].toUpperCase()
        ) {
          inputAsArray[index + 1] = inputAsArray[index + 1].toLowerCase();
          position.push(item);
          position.push("_");
          // return item;
        } else {
          position.push(item);
        }
      });
      console.log(position.join(""));
    } else {
      console.log("Not in CamelCase Format");
    }
  },

  kebabCaseToSnakeCase(string) {
    if (this.isKebabCase(string)) {
      const regex = /-/g;
      snakecase = string.replace(regex, "_");
      return snakecase;
    } else {
      return "Not in Kebab Format";
    }
  },

  snakeCaseToCamelCase(string) {
    if (this.isSnakeCase(string)) {
      stringWithSpaces = string.replace(/-/g, " ");
      camelCase = [];
      stringAsArray = stringWithSpaces.split("");
      stringAsArray.forEach((item, index) => {
        if (item == "_") {
          toUpper = stringAsArray[index + 1].toUpperCase();
          camelCase.push(toUpper);
        } else if (
          camelCase.length > 1 &&
          camelCase[index - 1].toLowerCase() == item
        ) {
          camelCase.push("");
        } else {
          camelCase.push(item);
        }
      });
      return camelCase.join("").trim();
    } else {
      return "Not in Snake Format";
    }
  }
};
