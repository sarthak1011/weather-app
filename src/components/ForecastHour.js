import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmallLabel from './SmallLabel';
import Text from './Text';
import device from '../responsive/Device';

const ForecastWrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px;
  margin: auto;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media ${device.tablet} {
    flex-basis: 110px;
  }
  @media ${device.laptop} {
    flex-basis: 125px;
  }
  @media ${device.laptopL} {
    flex-basis: 140px;
  }
`;

const WeatherIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`;

const ForecastHour = props => {
  let { high,low,sunrise,sunset,humidity,lat,lon, icon } = props;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
   sunset = new Date(sunset * 1000).toLocaleTimeString().slice(0, 5);
   sunrise = new Date(sunrise * 1000).toLocaleTimeString().slice(0, 5);
   low = low -273
   high = high -273

  return (
    <ForecastWrapper alignItem="center">
      <Text align="center">
        lat:{lat} -
        lon:{lon}
        {/* {month}.{day} */}
      </Text>
      <Text align="center">sunrise:{sunrise}</Text>
      <Text align="center">sunset:{sunset}</Text>
      <Text align="center">humidity:{humidity}</Text>
      <WeatherIcon src={iconUrl} />
      <SmallLabel align="center" weight="400">
       Lowest: {low}&#176;
      </SmallLabel>
      <SmallLabel align="center" weight="400">
      Highest: {high}&#176;
      </SmallLabel>
    </ForecastWrapper>
  );
};


export default ForecastHour;
