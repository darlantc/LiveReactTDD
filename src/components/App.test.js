import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
    it("should have a header element", () => {
        getRenderer();
        expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("should have a main element", () => {
        getRenderer();
        expect(screen.getByRole("main")).toBeInTheDocument();
    });
});

function getRenderer() {
    return render(<App />);
}
