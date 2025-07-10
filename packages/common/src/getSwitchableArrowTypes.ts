export function getSwitchableArrowTypes(arrowElement: {
  isBound: boolean;
  label: any;
}) {
  const allTypes = ["line", "sharp", "curved", "angled"];
  if (arrowElement.isBound || arrowElement.label) {
    return allTypes.filter((type) => type !== "line");
  }
  return allTypes;
}
