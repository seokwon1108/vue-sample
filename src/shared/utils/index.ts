import { isEmpty } from "lodash";

export const checkNumAndEng = (str: string) => {
  if (!isEmpty(str)) {
    return str.replace(/[^a-z0-9A-Z]/g, "");
  } else {
    return "";
  }
};
