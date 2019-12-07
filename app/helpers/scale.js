
import ActualDimensions from './Device';
const { width, height } = ActualDimensions;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 1) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};
