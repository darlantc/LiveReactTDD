import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Main from "./Main";

describe("<Main />", () => {
    it("should be a header element", () => {
        getRenderer();
        expect(screen.getByRole("heading", { name: "Tem uma vaguinha aí?" })).toBeInTheDocument();
    });

    it("should have subtitle text", () => {
        getRenderer();
        expect(
            screen.getByText(
                "Nosso servidor Pessoas de Tech tem mais de 1.000 desenvolvedores júniores querendo uma oportunidade."
            )
        ).toBeInTheDocument();
    });

    it("should have a paragraph", () => {
        getRenderer();
        expect(
            screen.getByText(
                "Tanto que alguns deles criaram esta plataforma para automatizar a inserção de vagas lá no discord. Tem uma oportunidade? Preencha o formulário abaixo."
            )
        ).toBeInTheDocument();
    });

    it("should have the image", () => {
        getRenderer();
        expect(screen.getByRole("img", { name: "Pessoas programadoras" })).toBeInTheDocument();
    });

    it("should have the button", () => {
        getRenderer();
        expect(screen.getByRole("button", { name: "Opa, vamos lá" })).toBeInTheDocument();
    });

    it("should call the onClick callback", () => {
        const onClick = jest.fn();

        getRenderer(onClick);
        expect(onClick).not.toBeCalled();

        userEvent.click(screen.getByRole("button"));
        userEvent.click(screen.getByRole("button"));
        expect(onClick).toBeCalledTimes(2);
    });

    it("should have main", () => {
        getRenderer();
        expect(screen.getByRole("main")).toBeInTheDocument();
    });
});

function getRenderer(onClick) {
    return render(<Main onClick={onClick} />);
}
