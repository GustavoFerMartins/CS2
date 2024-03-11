import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Main from ".";

describe("<Main />", () => {
    it("should render the headin", () => {
        const { container } = render(<Main />);

        expect(screen.getByRole("heading", { name: /react avançado/i })).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
