import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
    it("should be a header element", () => {
        getRenderer();
        expect(screen.getByRole("banner")).toBeInTheDocument();
    });
});

function getRenderer() {
    return render(<App />);
}
