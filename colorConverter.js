// HSL = hue, saturation and luminance.

// 1: convert the R, G, B values in the range 0-1
// 2: find the min and max values from the converted R,G,B values.
// 3: Then calculate the luminance L = (min + max)/2
// 4; If the min and max are same, then there is no saturation and therefore no hue.
// 5: check luminance to decide what formula to use to calculate saturation.
//      luminance <= 0.5, S = (max-min)(max+min)
//      luminance > 0.5 , S = (max-min)(2.0-max-min)
// 6: Depending on what is max among R, G, B, we decide the formula for calculating.
// 7: Then multiply the value by 60 to convert it into degrees. If the value is negative, add 360. just round it off and calculate the answer.

function finalResultBuild(color) {
  const result = {
    colorName: color.colorName,
    colorValue: color.colorValue,
  };
  return result;
}

function Min(colors) {
  const Red = colors[0].colorValue;

  let min = {
    colorName: "red",
    colorValue: Red,
  };

  for (let i = 1; i < colors.length; i++) {
    if (colors[i].colorValue < min.colorValue) {
      min = finalResultBuild(colors[i]);
    }
    return min;
  }
}

function Max(colors) {
  const Red = colors[0].colorValue;

  let max = {
    colorName: "red",
    colorValue: Red,
  };
  for (let i = 1; i < colors.length; i++) {
    if (colors[i].colorValue > max.colorValue) {
      max = finalResultBuild(colors[i]);
    }
  }

  return max;
}

function maxMinFinder(RGB) {
  const { colors } = RGB;

  const max = Max(colors);
  const min = Min(colors);

  return {
    max: max,
    min: min,
  };
}

function rgbToHsl(red, green, blue) {
  const convertedRed = red / 255;
  const convertedGreen = green / 255;
  const convertedBlue = blue / 255;

  const RGB = {
    colors: [
      {
        colorName: "red",
        colorValue: convertedRed,
      },
      {
        colorName: "green",
        colorValue: convertedGreen,
      },
      {
        colorName: "blue",
        colorValue: convertedBlue,
      },
    ],
  };

  //   const { min, max } = maxMinFinder(RGB); // I want the max and min values here.

  const { max, min } = maxMinFinder(RGB);

  const maxColorVal = max.colorValue;
  const minColorVal = min.colorValue;

  const difference = maxColorVal - minColorVal;

  // If max and min are not the same
  if (difference) {
    var luminanceVal = (maxColorVal + minColorVal) / 2;

    var Luminance = Math.round(luminanceVal * 100);
  } else {
    // if max and min are same
    return {
      Luminance: 0,
      Saturation: 0,
      Hue: 0,
    };
  }

  // max and min are not same.
  const saturationVal =
    luminanceVal <= 0.5
      ? (maxColorVal - minColorVal) / (maxColorVal + minColorVal)
      : (maxColorVal - minColorVal) / (2.0 - maxColorVal - minColorVal);

  const Saturation = Math.round(saturationVal * 100); // Saturation done here.

  switch (max.colorName) {
    case "red":
      var hueVal =
        (convertedGreen - convertedBlue) / (maxColorVal - minColorVal);

    case "green":
      var hueVal =
        2.0 + (convertedBlue - convertedRed) / (maxColorVal - minColorVal);

    case "blue":
      var hueVal =
        4.0 + (convertedRed - convertedGreen) / (maxColorVal - minColorVal);
  }

  const Hue = hueCalculator(hueVal);

  return {
    Luminance: Luminance,
    Saturation: Saturation,
    Hue: Hue,
  };
}

function hueCalculator(hueVal) {
  const hue = hueVal >= 0 ? hueVal * 60 : hueVal * 60 + 360;
  return Math.round(hue);
}

const { Hue: h, Saturation: s, Luminance: l } = rgbToHsl(1, 2, 3);

console.log(h, s, l);
