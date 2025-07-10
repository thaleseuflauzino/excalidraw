import { getSwitchableArrowTypes } from "./getSwitchableArrowTypes";

describe("Alternância de tipos de seta - seta não vinculada", () => {
  it("deve permitir todos os tipos, incluindo 'line'", () => {
    const arrow = { isBound: false, label: null };
    const types = getSwitchableArrowTypes(arrow);

    expect(types).toContain("line");
    expect(types).toContain("sharp");
    expect(types).toContain("curved");
    expect(types).toContain("angled");
  });
});

describe("Alternância com seta vinculada", () => {
  it("não deve incluir 'line'", () => {
    const arrow = { isBound: true, label: null };
    const types = getSwitchableArrowTypes(arrow);

    expect(types).not.toContain("line");
  });
});

describe("Alternância com seta que possui label", () => {
  it("não deve incluir 'line'", () => {
    const arrow = { isBound: false, label: "Exemplo" };
    const types = getSwitchableArrowTypes(arrow);

    expect(types).not.toContain("line");
  });
});

describe("Exibição visual", () => {
  it("não deve mostrar 'line' na UI se seta estiver vinculada", () => {
    const arrow = { isBound: true, label: null };
    const options = getSwitchableArrowTypes(arrow);
    const uiRendered = options.includes("line");

    expect(uiRendered).toBe(false);
  });
});
