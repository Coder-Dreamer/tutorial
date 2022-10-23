
                            


var main = document.querySelector(".images");
var nextbtn = document.querySelector(".nextbtn");
var prevbtn = document.querySelector(".prevbtn");
var text = document.querySelector(".text");
var image_section = document.querySelector(".slides");
var main_imageSection = document.querySelector(".image_section");
var content_heading = document.querySelector(".content_heading");
var content_para = document.querySelector(".content_para");
var btn_links = document.querySelector(".btn_links");
var counter = 0;
var content = [
  {
    h1: "    SteelSeries Aerox 5 - Best Up Coming gaming mouse of 2023 - Lightweight Gaming Mouse - 18000 CPI -- TrueMove Air Optical Sensor - Ultra-lightweight Water Resistant Design - Universal USB-C Connectivity",
    p: "  Ultra Lightweight Design - Best Gaming Mouse - State-of-the-art engineering streamlined the Aerox 5 to 66g for ultra-fast and optimal performance across games, like Valorant, Call of Duty, and many more",
    images: "images/mouse1.png",
    links: "https://amzn.to/3Czh8pL",
  },
  {
    h1: "Razer Viper - Best Wireless Gaming Mouse of 2023 - Ultimate Hyperspeed Lightweight Wireless Gaming Mouse & RGB Charging Dock: Fastest Gaming Mouse Switch - 20K DPI Optical Sensor - Chroma Lighting - 8 Programmable Buttons",
    p: "Best Wireless Gaming Mouse of 2023 - 25% Quicker Than Competing Wireless Mice: Razer HyperSpeed wireless technology brings together extreme low-latency and interference reduction for true wireless freedom",
    images: "images/mouse2.png",
    links: "https://amzn.to/3TfGyyv",
  },
  {
    h1: "ASUS ROG Spatha X - Best Gaming Mouse- Wireless Gaming Mouse (Magnetic Charging Stand, 12 Programmable Buttons, 19,000 DPI, Push-fit Hot Swap Switch Sockets, ROG Micro Switches, ROG Paracord and Aura RGB lighting)",
    p: "ASUS - Best Gaming Mouse of 2022 -Available at a lower price from other sellers that may not offer free Prime shipping.",
    images: "images/mouse3.png",
    links: "https://amzn.to/3e37kex",
  },
  {
    h1: "ROCCAT Kone XP- Top Gaming mouse of 2023 -PC Gaming Mouse with 3D AIMO RGB Lighting, 19K DPI Optical Sensor, 4D Krystal Scroll Wheel, Multi-Button Design, Wired Computer Mouse",
    p: "KRYSTAL 4D WHEEL - Left and right lateral inputs add to the standard vertical click and scroll functionality, all delivered with our signature tactile feel; Made from translucent materials, the Krystal 4D Wheel beautifully diffuses the RGB lighting",
    images: "images/mouse4.png",
    links: "https://amzn.to/3V26hMl",
  },
  {
    h1: "ROCCAT Kone AIMO Remastered- Top Up Coming Gaming Mouse -PC Gaming Mouse, Optical, RGB Backlit Lighting, 23 Programmable Keys, Onboard Memory, Palm Grip, Owl Eye Sensor, Ergonomic, LED Illumination, Adjustable to 16,000 DPI-White",
    p: "5 lighting Zones - featuring five Independently configurable lighting Zones, you can now customize your gaming aesthetic like never before; they also Synergize perfectly to allow for even smoother and more fluid lighting transitions",
    images: "images/mouse5.png",
    links: "https://amzn.to/3fL9a3S",
  },
  {
    h1: "Acer Nitro Gaming Mouse II Gaming Mouse with PAW3325 Sensor, Adjustable DPI & 8 Buttons Including Burst Fire",
    p: "Steady Your Aim: PAW3325 sensor lets you adjust DPI up to 4200 with saved settings for easy transitions",
    images: "images/mouse6.png",
    links: "https://amzn.to/3CJxVXz",
  },
  {
    h1: "ROCCAT Burst Pro Air Lightweight Symmetrical Optical Wireless RGB Gaming Mouse with 19K DPI Optical Owl-Eye Sensor, Optical Switches, ROCCAT Titan Wheel, 81-Gram Weight – Black",
    p: "STELLAR WIRELESS PLUS BLUETOOTH - Choose between gaming-grade 2.4GHz and multi-purpose Bluetooth 5.2, with up to 100 hours of battery life; USB-C rapid charging gives you 5 hours of play time with just a 10-minute charge",
    images: "images/mouse7.png",
    links: "https://amzn.to/3fNIkrO",
  },
//  WANT TO ADD MORE OBJECTS ???????
// IF YOU WANT TO ADD MORE OBJECTS THEN DON'T TRY TO CHANGE THE NAME OF PROPERTIES LIKE H1,P,IMAGES,LINKS.

];
nextbtn.addEventListener("click", increment);
prevbtn.addEventListener("click", decrement);
function increment() {
  counter++;
  carosel();
}
function decrement() {
  counter--;
  carosel();
}
function carosel() {
  if (counter == content.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = content.length - 1;
  }
  content_heading.innerHTML = content[counter].h1;
  content_para.innerHTML = content[counter].p;
  image_section.src = content[counter].images;
  main.innerHTML =
    "<div class='image_section animate__fadeInRight'><img class='slides' src=" +
    content[counter].images +
    " alt='' style='width: 100%;height: 100%;'></div>";
  btn_links.innerHTML =
    "<button class='button'><a href=" +
    content[counter].links +
    ">Purchase Now</a></button>";
}
