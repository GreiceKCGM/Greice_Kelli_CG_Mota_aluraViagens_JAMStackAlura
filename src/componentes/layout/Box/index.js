import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('paddingRigth')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('paddingTop')}
  ${propToStyle('margin')}
  ${propToStyle('marginBottom')}
  ${propToStyle('textAling')}
`;
