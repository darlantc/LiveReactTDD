import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Form from "./Form";

describe("<Form />", () => {
    it.each(["Cargo *", "Experiência mínima exigida *"])("should have a %p input", (expected) => {
        getRenderer();
        expect(screen.getByRole("textbox", { name: expected })).toBeInTheDocument();
    });

    it("should have placeholder", () => {
        getRenderer();
        expect(screen.getByPlaceholderText("Ex: Desenvolvedor Back-end")).toBeInTheDocument();
    });

    it("should receive user input", () => {
        getRenderer();

        const input = screen.getByRole("textbox", { name: "Cargo *" });

        userEvent.type(input, "new value");
        expect(input).toHaveDisplayValue("new value");
    });
});

function getRenderer() {
    return render(<Form />);
}
