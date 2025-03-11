import { render, fireEvent } from "@testing-library/vue";
import Button from "../../src/components/Button.vue";

describe("Button Component", () => {
  it("renders a button with primary class", () => {
    const { getByText } = render(Button, {
      props: { primary: true },
      slots: { default: "Click Me" },
    });

    const button = getByText("Click Me");
    expect(button.classList.contains("q-btn-primary")).toBe(true);
  });

  it("renders a button without primary class", () => {
    const { getByText } = render(Button, {
      props: { primary: false },
      slots: { default: "Click Me" },
    });

    const button = getByText("Click Me");
    expect(button.classList.contains("q-btn-primary")).toBe(false);
  });

  it("renders a button with secondary class", () => {
    const { getByText } = render(Button, {
      props: { secondary: true },
      slots: { default: "Click Me" },
    });

    const button = getByText("Click Me");
    expect(button.classList.contains("q-btn-secondary")).toBe(true);
  });

  it("handles disabled state correctly", () => {
    const { getByText } = render(Button, {
      props: { disabled: true },
      slots: { default: "Click Me" },
    });

    const button = getByText("Click Me");
    expect(button.disabled).toBe(true);
  });

  it("emits a click event when clicked", async () => {
    const { getByText, emitted } = render(Button, {
      slots: { default: "Click Me" },
    });

    const button = getByText("Click Me");
    await fireEvent.click(button);

    expect(emitted().click).toBeTruthy();
  });
});