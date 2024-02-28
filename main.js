const colorPicker = document.querySelector("#randomColour");
const hexColourPicker = document.querySelector("#randomHexCode");
const rgbColorPicker = document.querySelector("#randomRGB");

const bg = document.querySelector("body");
const colorDisplay = document.querySelector("h2");

const updateBackground = (color) => {
  bg.style.backgroundColor = color;
  colorDisplay.innerHTML = color;
};

const hexColour = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  updateBackground(color);
};

const randomColour = () => {
  const colors = {
    AliceBlue: "#f0f8ff",
    AntiqueWhite: "#faebd7",
    Aqua: "#00ffff",
    Aquamarine: "#7fffd4",
    Azure: "#f0ffff",
    Beige: "#f5f5dc",
    Bisque: "#ffe4c4",
    BlanchedAlmond: "#ffebcd",
    Blue: "#0000ff",
    BlueViolet: "#8a2be2",
    Brown: "#a52a2a",
    BurlyWood: "#deb887",
    CadetBlue: "#5f9ea0",
    Chartreuse: "#7fff00",
    Chocolate: "#d2691e",
    Coral: "#ff7f50",
    CornflowerBlue: "#6495ed",
    Cornsilk: "#fff8dc",
    Crimson: "#dc143c",
    DarkBlue: "#00008b",
    DarkCyan: "#008b8b",
    DarkGoldenrod: "#b8860b",
    DarkGray: "#a9a9a9",
    DarkGreen: "#006400",
    DarkKhaki: "#bdb76b",
    DarkMagenta: "#8b008b",
    DarkOliveGreen: "#556b2f",
    DarkOrange: "#ff8c00",
    DarkOrchid: "#9932cc",
    DarkRed: "#8b0000",
    DarkSalmon: "#e9967a",
    DarkSeaGreen: "#8fbc8f",
    DarkSlateBlue: "#483d8b",
    DarkSlateGray: "#2f4f4f",
    DarkTurquoise: "#00ced1",
    DarkViolet: "#9400d3",
    DeepPink: "#ff1493",
    DeepSkyBlue: "#00bfff",
    DimGray: "#696969",
    DodgerBlue: "#1e90ff",
    FireBrick: "#b22222",
    FloralWhite: "#fffaf0",
    ForestGreen: "#228b22",
    Fuchsia: "#ff00ff",
    Gainsboro: "#dcdcdc",
    GhostWhite: "#f8f8ff",
    Goldenrod: "#daa520",
    Gold: "#ffd700",
    Gray: "#808080",
    Green: "#008000",
    GreenYellow: "#adff2f",
    Honeydew: "#f0fff0",
    HotPink: "#ff69b4",
    IndianRed: "#cd5c5c",
    Indigo: "#4b0082",
    Ivory: "#fffff0",
    Khaki: "#f0e68c",
    Lavenderblush: "#fff0f5",
    Lavender: "#e6e6fa",
    LawnGreen: "#7cfc00",
    Lemonchiffon: "#fffacd",
    LightBlue: "#add8e6",
    LightCoral: "#f08080",
    LightCyan: "#e0ffff",
    LightGoldenrodYellow: "#fafad2",
    LightGray: "#d3d3d3",
    LightGreen: "#90ee90",
    LightPink: "#ffb6c1",
    LightSalmon: "#ffa07a",
    LightSeaGreen: "#20b2aa",
    LightSkyBlue: "#87cefa",
    LightSlateGray: "#778899",
    LightSteelBlue: "#b0c4de",
    LightYellow: "#ffffe0",
    Lime: "#00ff00",
    LimeGreen: "#32cd32",
    linen: "#faf0e6",
    Magenta: "#ff00ff",
    Maroon: "#800000",
    Mediumaquamarine: "#66cdaa",
    MediumBlue: "#0000cd",
    MediumOrchid: "#ba55d3",
    MediumPurple: "#9370db",
    MediumSeaGreen: "#3cb371",
    MediumSlateBlue: "#7b68ee",
    MediumSpringGreen: "#00fa9a",
    Mediumturquoise: "#48d1cc",
    MediumVioletRed: "#c71585",
    MidnightBlue: "#191970",
    Mintcream: "#f5fffa",
    Mistyrose: "#ffe4e1",
    Moccasin: "#ffe4b5",
    NavajoWhite: "#ffdead",
    Navy: "#000080",
    Oldlace: "#fdf5e6",
    Olive: "#808000",
    OliveDrab: "#6b8e23",
    Orange: "#ffa500",
    OrangeRed: "#ff4500",
    Orchid: "#da70d6",
    PaleGoldenrod: "#eee8aa",
    PaleGreen: "#98fb98",
    Paleturquoise: "#afeeee",
    PaleVioletRed: "#db7093",
    Papayawhip: "#ffefd5",
    PeachPuff: "#ffdab9",
    Peru: "#cd853f",
    Pink: "#ffc0cb",
    Plum: "#dda0dd",
    PowderBlue: "#b0e0e6",
    Purple: "#800080",
    RebeccaPurple: "#663399",
    Red: "#ff0000",
    RosyBrown: "#bc8f8f",
    RoyalBlue: "#4169e1",
    SaddleBrown: "#8b4513",
    Salmon: "#fa8072",
    SandyBrown: "#f4a460",
    SeaGreen: "#2e8b57",
    Seashell: "#fff5ee",
    Sienna: "#a0522d",
    Silver: "#c0c0c0",
    SkyBlue: "#87ceeb",
    SlateBlue: "#6a5acd",
    SlateGray: "#708090",
    Snow: "#fffafa",
    SpringGreen: "#00ff7f",
    SteelBlue: "#4682b4",
    Tan: "#d2b48c",
    Teal: "#008080",
    Thistle: "#d8bfd8",
    Tomato: "#ff6347",
    Turquoise: "#40e0d0",
    Violet: "#ee82ee",
    wheat: "#f5deb3",
    White: "#ffffff",
    Whitesmoke: "#f5f5f5",
    Yellow: "#ffff00",
    YellowGreen: "#9acd32",
  };

  const colorNames = Object.keys(colors);
  let color = colorNames[Math.floor(Math.random() * colorNames.length)];

  updateBackground(color);
};

const rgbColor = () => {
  let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  updateBackground(color);
};

const functions = [hexColour, randomColour, rgbColor];
const randomLoad = functions[Math.floor(Math.random() * functions.length)];

window.addEventListener("load", randomLoad);

hexColourPicker.addEventListener("click", hexColour);
colorPicker.addEventListener("click", randomColour);
rgbColorPicker.addEventListener("click", rgbColor);
