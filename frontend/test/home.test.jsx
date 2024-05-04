import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/home";

describe("Home page", () => {
  it("Renders default error state.", () => {
    render(<Home />);

    expect(screen.getByTestId("moon-image"));
    const moonImage = screen.getByTestId("moon-image");

    // Check if the image is loaded
    expect(moonImage).toBeInTheDocument();
  });

  it("Explore Button check", () => {
    render(<Home />);
    const exploreButton = screen.getByTestId("explore-button");
    expect(exploreButton).toBeInTheDocument();
  });
});
