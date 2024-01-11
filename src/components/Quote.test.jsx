import { render } from "@testing-library/react";
import Quote from "./Quote";

describe("Quote", () => {
  it("should render properly", () => {
    render(<Quote quote="What a nice day." />);
  });
});
