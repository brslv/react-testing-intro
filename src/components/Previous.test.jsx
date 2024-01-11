import { expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Previous from "./Previous";

const onClick = vi.fn();

describe("Previous", () => {
  it('should call "onClick" when a button is clicked', () => {
    render(<Previous onClick={onClick} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
