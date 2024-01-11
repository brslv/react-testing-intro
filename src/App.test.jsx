import { render, fireEvent, screen } from "@testing-library/react";
import { quotes } from "./quotes";
import App from "./App";

describe("App", () => {
  it("shows first quote on app load", () => {
    render(<App quotes={quotes} />);
    const firstQuote = quotes[0];
    const quote = screen.getByTestId("quote");

    expect(quote.textContent).toBe(firstQuote);
  });

  it("shows next quote on `Next` button click", () => {
    render(<App quotes={quotes} />);
    const secondQuote = quotes[1];
    const quote = screen.getByTestId("quote");
    const nextButton = screen.getByTestId("next-button");

    fireEvent.click(nextButton);

    expect(quote.textContent).toBe(secondQuote);
  });

  it("shows previous quote on `Previous` button click", () => {
    render(<App quotes={quotes} />);
    const firstQuote = quotes[0];
    const quote = screen.getByTestId("quote");
    const nextButton = screen.getByTestId("next-button");
    const prevButton = screen.getByTestId("prev-button");

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    expect(quote.textContent).toBe(firstQuote);
  });

  it("shows the first quote when on the last quote and `Next` button is clicked", () => {
    const twoQuotesArray = [quotes[0], quotes[1]];
    render(<App quotes={twoQuotesArray} />);
    const firstQuote = twoQuotesArray[0];
    const quote = screen.getByTestId("quote");
    const nextButton = screen.getByTestId("next-button");

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(quote.textContent).toBe(firstQuote);
  });

  it("shows the last quote when on the first quote and `Previous` button is clicked", () => {
    const twoQuotesArray = [quotes[0], quotes[1]];
    render(<App quotes={twoQuotesArray} />);
    const firstQuote = twoQuotesArray[1];
    const quote = screen.getByTestId("quote");
    const prevButton = screen.getByTestId("prev-button");

    fireEvent.click(prevButton);

    expect(quote.textContent).toBe(firstQuote);
  });
});
