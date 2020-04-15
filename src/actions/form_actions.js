export const OPEN_FORM = "OPEN_FORM";
export const CLOSE_FORM = "CLOSE_FORM";

export const openForm = () => {
  return {
    type: OPEN_FORM,
    form: true
  };
};

export const closeForm = () => {
  return {
    type: CLOSE_FORM,
    form: false
  };
};
