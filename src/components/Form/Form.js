import { useState } from "react";

const Form = () => {
    const [cargo, setCargo] = useState("");

    return (
        <div>
            <input aria-label="Cargo *" placeholder="Ex: Desenvolvedor Back-end" onChange={onChange} value={cargo} />
            <input aria-label="Experiência mínima exigida *" placeholder="Ex: Iniciante, Júnior, Pleno" />
        </div>
    );

    function onChange(event) {
        const { value } = event.target;

        setCargo(value);
    }
};

export default Form;
