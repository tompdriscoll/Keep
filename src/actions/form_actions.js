export const OPEN_FORM = "OPEN_FORM";
export const CLOSE_FORM = "CLOSE_FORM";

export const openForm = form => {
  return {
    type: OPEN_FORM,
    form
  };
};

export const closeForm = () => {
  return {
    type: CLOSE_FORM
  };
};
