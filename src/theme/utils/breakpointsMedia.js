import { css } from 'styled-components';

const { breakpoints } = theme;

function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map((breakpointsName) => css`
  @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
    ${cssByBreakpoints[breakpointsName]}
  }`);
}

export default breakpointsMedia;