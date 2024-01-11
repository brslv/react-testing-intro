import { expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Next from "./Next";

const onClick = vi.fn();

describe("Next", () => {
  it('should call "onClick" when a button is clicked', () => {
    render(<Next onClick={onClick} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
