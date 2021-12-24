import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
    it("should have a logo", () => {
        getRenderer();
        expect(screen.getByRole("img", { name: "Logo Tech People" })).toBeInTheDocument();
    });

    it("should have discord icon", () => {
        getRenderer();
        expect(screen.getByRole("img", { name: "Discord Tech People" })).toBeInTheDocument();
    });

    it("should be a header element", () => {
        getRenderer();
        expect(screen.getByRole("banner")).toBeInTheDocument();
    });
});

function getRenderer() {
    return render(<Header />);
}
