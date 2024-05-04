import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../src/components/ui/navbar";

describe("Check Navbar elements", () => {
  it("Renders default", () => {
    render(<Navbar />);

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
