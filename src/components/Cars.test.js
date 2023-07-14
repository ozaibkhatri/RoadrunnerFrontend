import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Car from './Car';

// Mock car data
const car = {
  id: 1,
  image: 'https://github.com/jeff-lent/roadrunnercars/blob/main/PorscheMissionX.png?raw=true',
  name: 'Porsche Mission X  ',
  shortdescription: 'Short description',
  rentalfeeperday: 200000,
};

describe('Car component', () => {
  test('renders car details correctly', () => {
    const { getByAltText, getByText } = render(
      <Router>
        <Car car={car} />
      </Router>
    );

    const carImage = getByAltText(car.name);
    const carName = getByText(car.name);
    const carDescription = getByText(car.shortdescription);
    const rentalPrice = getByText(`Daily Rental Price: ${car.rentalfeeperday}`);

    expect(carImage).toBeInTheDocument();
    expect(carImage.src).toContain(car.image);
    expect(carName).toBeInTheDocument();
    expect(carDescription).toBeInTheDocument();
    expect(rentalPrice).toBeInTheDocument();
  });

  test('navigates to rental form page with correct car id and state on button click', () => {
    const navigateMock = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => navigateMock,
    }));

    const { getByText } = render(
      <Router>
        <Car car={car} />
      </Router>
    );

    const rentButton = getByText('Rent Me Now');
    fireEvent.click(rentButton);

    expect(navigateMock).toHaveBeenCalledWith(`/rentalform/${car.id}`, { state: car });
  });
});
