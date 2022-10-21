function createElement(tag, attribute, ...children) {
  const element = document.createElement(tag);

  for (const key in attribute) {
    element.setAttribute(key, attribute[key]);
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

export default createElement;
