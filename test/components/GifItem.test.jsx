import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {
  const title = "Saitama";
  const url = "https://saitama.com/"

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el titulo en el componente', () =>{
    render(<GifItem title={title} url={url} /> );
    expect(screen.getByText(title)).toBeTruthy();
  })
})
