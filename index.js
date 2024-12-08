const btnGroups = document.querySelectorAll(".button-group");
const optionListContainer = document.querySelector(".selected-options-list");

btnGroups.forEach((btnGroup) => {
  btnGroup.addEventListener("click", (e) => {
    if (e.target.matches(`label`)) {
      e.preventDefault();
      const targetParent = e.target.parentNode;
      const allElementsOfParent =
        targetParent.querySelectorAll(`label > input`);
      allElementsOfParent.forEach((el) => {
        el.checked = el.parentNode === e.target;
      });

      const selectedOptions = getAllSelectedOptions();
      addOptionsToEl(selectedOptions, "li", optionListContainer);
    }
  });
}, true);

const getAllSelectedOptions = () => {
  const allSelectedOptions = document.querySelectorAll(
    `.button-group > label > input:checked`
  );

  const optionNodesArrayForm = Array.from(allSelectedOptions);
  const selectedValues = optionNodesArrayForm.map(
    (optionNode) => optionNode.value
  );
  return selectedValues;
};

const addOptionsToEl = (options, el, parentNode) => {
  //   parentNode.querySelectorAll("*").forEach((el) => {
  //     el.remove();
  //   });

  parentNode.innerHTML = "";

  //   both works

  options.forEach((option) => {
    const createdElement = document.createElement(el);
    createdElement.textContent = option;
    parentNode.append(createdElement);
  });
};
