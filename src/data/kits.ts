import p01 from "@/assets/patch-p01.jpg";
import p02 from "@/assets/patch-p02.jpg";
import m01 from "@/assets/hackit-m01.svg";
import m02 from "@/assets/hackit-m02.svg";

export type Spec = { label: string; value: string };

export type Lesson = {
  title: string;
  duration: string;
  steps: string[];
};

export type Kit = {
  id: string;
  series: string;          // P—01
  name: string;            // Plant Watering
  shortDesc: string;       // one-line plainspoken
  longDesc: string;        // a paragraph
  price: number;
  image: string;
  status?: string;         // "IN STOCK" / "PRE-ORDER"
  ages: string;
  lessonLength: string;
  soldering: string;
  dimensions: string;
  contents: { qty: string; item: string; note: string }[];
  build: string[];         // lesson titles (short)
  lessons: Lesson[];       // full step-by-step instructions
  specs: Spec[];
};

export const kits: Kit[] = [
  {
    id: "plant-watering",
    series: "P—01",
    name: "Plant Watering",
    shortDesc: "A classroom sensor kit. Builds a soil-moisture-triggered pump with the BBC micro:bit.",
    longDesc:
      "Read the soil. Trigger a pump. Keep a plant alive with code. Designed for a single 40-minute lesson with room to extend across four sessions.",
    price: 39,
    image: p01,
    status: "IN STOCK",
    ages: "10+",
    lessonLength: "40 min",
    soldering: "None",
    dimensions: "250 × 180 × 60 mm",
    contents: [
      { qty: "1×", item: "BBC micro:bit V2", note: "with edge connector" },
      { qty: "1×", item: "Capacitive soil moisture sensor", note: "3-pin, analog" },
      { qty: "1×", item: "Submersible 5V water pump", note: "120 L/h, food-grade" },
      { qty: "60 cm", item: "Silicone tubing", note: "ID 4 mm" },
      { qty: "1×", item: "AA battery pack (3-cell)", note: "with switch, JST" },
      { qty: "1×", item: "Half-size breadboard", note: "400 tie points" },
      { qty: "10×", item: "Jumper wires, M/F", note: "20 cm, mixed" },
      { qty: "1×", item: "Instruction booklet", note: "32 pages, 4 lessons" },
    ],
    build: [
      "Wire it up",
      "Read the soil",
      "Trigger the pump",
      "Log & share",
    ],
    lessons: [
      {
        title: "Wire it up",
        duration: "10 min",
        steps: [
          "Plug the micro:bit into the edge connector — USB port faces up.",
          "Press the breadboard flat onto your desk. The adhesive backing holds it in place.",
          "Connect the soil sensor's VCC pin → 3V on the edge connector using a red wire.",
          "Connect sensor GND → GND on the edge connector using a black wire.",
          "Connect sensor SIG → Pin 0 on the edge connector using a yellow wire.",
          "Connect the pump driver's IN pin → Pin 1 on the edge connector using a blue wire.",
          "Connect the driver's VCC → battery pack positive (red wire); driver GND → battery pack negative (black wire).",
          "Plug the pump's two leads into the driver's output terminals.",
          "Drop the pump into a cup of water. Push the silicone tubing onto the pump nozzle.",
          "Switch the battery pack ON. The green LED on the driver confirms power.",
        ],
      },
      {
        title: "Read the soil",
        duration: "10 min",
        steps: [
          "Open MakeCode at makecode.microbit.org and start a new project called 'soil-reader'.",
          "From the Input drawer, drag an 'on button A pressed' block onto the canvas.",
          "From the Pins drawer, drag 'analog read pin P0' and place it inside the button block.",
          "From the Basic drawer, drag 'show number' and connect it. Drop the 'analog read' block inside 'show number'.",
          "Click Download and flash the .hex file to your micro:bit.",
          "Press button A. The LED screen scrolls a number between 0 (very dry) and 1023 (fully wet).",
          "Push the sensor prongs into dry soil. Note the number — typically below 400.",
          "Pour a small amount of water near the sensor. Press A again. Watch the reading rise toward 600–700.",
          "Write down both readings. You will use them to set your threshold in Lesson 03.",
        ],
      },
      {
        title: "Trigger the pump",
        duration: "10 min",
        steps: [
          "Start a new MakeCode project called 'auto-water'.",
          "Add a 'forever' block from the Basic drawer.",
          "Inside the forever block, create a variable: set moisture to analog read pin P0.",
          "Add an 'if' block: if moisture < 400 then…",
          "Inside the if block, add 'digital write pin P1 to 1' — this turns the pump ON.",
          "Add 'pause 1500 ms' to run the pump for 1.5 seconds.",
          "Add 'digital write pin P1 to 0' to turn the pump OFF.",
          "After the if block, add 'pause 2000 ms' — this waits 2 seconds before the next moisture check.",
          "Flash to the micro:bit. Place the sensor in dry soil. The pump fires after a moment.",
          "Watch the soil darken. Once moisture rises above 400 the pump stops automatically.",
        ],
      },
      {
        title: "Log & share",
        duration: "10 min",
        steps: [
          "Open the 'auto-water' project from Lesson 03.",
          "Inside 'on start', add 'radio set group 1' to join a shared radio channel.",
          "After reading moisture in the forever loop, add 'radio send number moisture' to broadcast the value.",
          "On a second micro:bit, create a new project called 'moisture-receiver'.",
          "Add an 'on radio received receivedNumber' block. Inside it, add 'show number receivedNumber'.",
          "Flash the receiver project to the second micro:bit.",
          "Power both boards. The second micro:bit now displays the live soil reading.",
          "To log to memory, add 'serial write value \"moisture\" = moisture' inside the forever loop.",
          "Open the MakeCode console (click the purple console button). Readings stream in every 2 seconds.",
          "Click Download in the console to save a CSV. Open it in a spreadsheet and chart moisture over time.",
        ],
      },
    ],
    specs: [
      { label: "POWER", value: "3 × AA, 4.5 V" },
      { label: "PUMP", value: "5 V · 120 L/h" },
      { label: "SENSOR", value: "Analog · 0–1023" },
      { label: "CODE", value: "MakeCode · Python" },
      { label: "REUSABLE", value: "≥ 30 builds" },
    ],
  },
  {
    id: "smart-home",
    series: "P—02",
    name: "Smart Home",
    shortDesc: "A classroom sensor kit. Builds a motion-triggered light, doorbell and servo door.",
    longDesc:
      "Wire a tiny cardboard house. Detect motion, ring a bell, open the door with a servo. Four lessons, all built around the BBC micro:bit.",
    price: 42,
    image: p02,
    status: "IN STOCK",
    ages: "9+",
    lessonLength: "45 min",
    soldering: "None",
    dimensions: "250 × 180 × 60 mm",
    contents: [
      { qty: "1×", item: "BBC micro:bit V2", note: "with edge connector" },
      { qty: "1×", item: "PIR motion sensor", note: "3-pin, digital" },
      { qty: "1×", item: "Mini servo motor (SG90)", note: "with horns" },
      { qty: "1×", item: "RGB LED + 3× tri-color LEDs", note: "common cathode" },
      { qty: "1×", item: "Active piezo buzzer", note: "5 V" },
      { qty: "1×", item: "Half-size breadboard", note: "400 tie points" },
      { qty: "12×", item: "Jumper wires", note: "20 cm, mixed" },
      { qty: "1×", item: "Cardboard house template", note: "die-cut" },
      { qty: "1×", item: "Instruction booklet", note: "32 pages, 4 lessons" },
    ],
    build: [
      "Wire it up",
      "Auto night light",
      "Motion alarm & servo door",
      "Doorbell with melody",
    ],
    lessons: [
      {
        title: "Wire it up",
        duration: "10 min",
        steps: [
          "Plug the micro:bit into the edge connector — USB port faces up.",
          "PIR motion sensor: connect VCC → 3V, GND → GND, OUT → Pin 0.",
          "Piezo buzzer: connect the positive leg (longer) → Pin 1, negative leg → GND row on the breadboard.",
          "RGB LED: connect the longest leg (common cathode) → GND. Red leg → Pin 2 via a 100Ω resistor. Green leg → Pin 3 via a 100Ω resistor.",
          "Servo motor: connect the signal wire (orange) → Pin 4. Red → 3V. Brown → GND.",
          "Tri-color LEDs: insert into the breadboard. Connect each LED's leg to Pin 5, Pin 6, and Pin 7 respectively, each via a 100Ω resistor.",
          "Power via USB. The micro:bit LED matrix shows a heart icon on startup confirming everything is connected.",
        ],
      },
      {
        title: "Auto night light",
        duration: "10 min",
        steps: [
          "Open MakeCode and start a new project called 'night-light'.",
          "Add a 'forever' block from the Basic drawer.",
          "Inside it, read the micro:bit's built-in light sensor: use 'input light level'.",
          "Add an 'if' block: if light level < 50 then…",
          "Inside the if block, add 'digital write pin P2 to 1' to turn the red RGB LED ON.",
          "Add an 'else' block: 'digital write pin P2 to 0' to turn it OFF when the room is bright.",
          "Flash to the micro:bit. Cover the front face with your hand — the LED turns on.",
          "Try swapping pin P2 for pin P3 (green) for a softer nightlight effect.",
        ],
      },
      {
        title: "Motion alarm & servo door",
        duration: "15 min",
        steps: [
          "Start a new MakeCode project called 'smart-home'.",
          "Add a 'forever' block. Inside it, read 'digital read pin P0' and store it in a variable called 'motion'.",
          "Add an 'if motion = 1' block — this fires when the PIR detects movement.",
          "Inside the if block, add 'play tone Middle C for 1 beat' on pin P1 to sound the buzzer.",
          "Turn the alarm light on: 'digital write pin P2 to 1' (red LED on), 'digital write pin P3 to 0' (green LED off).",
          "Open the door: add 'servo write pin P4 to 90' — the servo rotates 90° to open.",
          "Add 'pause 3000 ms' — the door stays open for 3 seconds.",
          "Close the door: add 'servo write pin P4 to 0' — servo returns to 0°.",
          "Turn off the alarm: 'digital write pin P2 to 0'. Add 'pause 5000 ms' before the next detection check.",
          "Flash and test — wave your hand in front of the PIR sensor from up to 5 m away.",
        ],
      },
      {
        title: "Doorbell with melody",
        duration: "10 min",
        steps: [
          "Continue in the 'smart-home' project. Add an 'on button A pressed' block.",
          "Inside it, open the Music drawer and drag 'play melody' onto the canvas.",
          "Click the melody grid to draw your own tune, or select a preset such as 'birthday'.",
          "Add a light show: use 'digital write' on Pin 5, Pin 6, and Pin 7 in sequence with 200 ms pauses between each to flash the tri-color LEDs.",
          "Flash to the micro:bit. Press button A to trigger the doorbell melody and LED sequence.",
          "Extend the project: add 'radio send string \"BELL\"' so a second micro:bit in another room can display a doorbell notification.",
        ],
      },
    ],
    specs: [
      { label: "POWER", value: "USB or 3 × AA" },
      { label: "SERVO", value: "SG90 · 5 V · 180°" },
      { label: "PIR RANGE", value: "≤ 5 m" },
      { label: "CODE", value: "MakeCode · Python" },
      { label: "REUSABLE", value: "≥ 30 builds" },
    ],
  },
  {
    id: "3d-mouse-regular",
    series: "M—01",
    name: "3D Printed Mouse — Regular",
    shortDesc: "Snap together your own wireless mouse. 3D printed housing, pre-flashed PCB, USB dongle included.",
    longDesc:
      "Print it. Snap it. Click it. Build a full-size wireless mouse from a 3D printed housing, a custom PCB, and a USB dongle. Choose your colour, assemble in an afternoon, use it every day.",
    price: 49,
    image: m01,
    status: "PRE-ORDER",
    ages: "12+",
    lessonLength: "60 min",
    soldering: "None",
    dimensions: "125 × 67 × 42 mm",
    contents: [
      { qty: "1×", item: "3D printed housing", note: "top shell + base, choice of colour" },
      { qty: "1×", item: "Wireless mouse PCB", note: "pre-flashed, 2.4 GHz" },
      { qty: "1×", item: "USB nano dongle", note: "plug & play, 2.4 GHz" },
      { qty: "3×", item: "Click switches", note: "left, right, middle" },
      { qty: "1×", item: "Scroll encoder", note: "with tactile ring" },
      { qty: "1×", item: "Optical sensor module", note: "400–1600 DPI" },
      { qty: "1×", item: "AAA battery (×1)", note: "included" },
      { qty: "4×", item: "M2 screws + hex key", note: "stainless" },
      { qty: "4×", item: "PTFE glide feet", note: "pre-cut, 0.8 mm" },
      { qty: "1×", item: "Build booklet", note: "32 pages, 4 sessions" },
    ],
    build: [
      "Check your parts",
      "Snap it together",
      "Pair the dongle",
      "Customise",
    ],
    lessons: [
      {
        title: "Check your parts",
        duration: "10 min",
        steps: [
          "Open the box and lay every part on your desk. Match each item to the parts list inside the front cover.",
          "Inspect both shell halves — the top shell has the button cutouts, the base has the battery slot.",
          "Check the PCB: the optical sensor hole is on the underside, the 2.4 GHz module is pre-soldered on top.",
          "Locate the USB nano dongle — it stores in the battery compartment when not in use.",
          "The three switches each have a colour-coded dot: white = left, blue = right, yellow = middle.",
          "Attach the four PTFE glide feet to the four marked circles on the underside of the base shell now, before assembly.",
        ],
      },
      {
        title: "Snap it together",
        duration: "20 min",
        steps: [
          "Place the base shell flat on your desk, open side up.",
          "Press the three switches into their labelled slots on the PCB. Each switch clicks into place — you will feel it seat.",
          "Drop the scroll encoder into its mount on the PCB; the flat edge faces the front button side.",
          "Lower the PCB into the base shell. The optical sensor window must align with the circular hole in the base.",
          "Insert the AAA battery into the battery slot on the PCB, positive end first. The PCB's LED flashes once to confirm power.",
          "Set the top shell over the PCB. Line up the four screw bosses at the corners.",
          "Insert an M2 screw in each corner and tighten snugly with the hex key — stop when resistance is felt, do not overtighten.",
          "Flip the mouse over. It should sit flat on all four feet with no rocking. Press each button — you should feel a clean click.",
        ],
      },
      {
        title: "Pair the dongle",
        duration: "15 min",
        steps: [
          "Plug the USB nano dongle into a free USB-A port on your computer.",
          "Slide the power switch on the underside of the mouse to ON.",
          "The dongle and mouse pair automatically within 5 seconds — no driver or software needed.",
          "Open a text editor and move the mouse. The pointer should track smoothly.",
          "Test all three buttons: left click, right click, and middle click (press the scroll wheel down).",
          "Scroll the encoder up and down to confirm scroll works.",
          "If nothing responds, slide power OFF, wait 3 seconds, slide back ON. The LED on the PCB will flash to indicate reconnection.",
          "The dongle stores inside the battery compartment — press the base release tab, slide the dongle in, and close.",
        ],
      },
      {
        title: "Customise",
        duration: "15 min",
        steps: [
          "Download the STL files for your housing from the Hack'it product page (link in the booklet).",
          "Open the STL in your slicer (Bambu Studio, Cura, or PrusaSlicer all work). Print at 0.2 mm layer height, 20% infill.",
          "Try a different shell colour — the housing snaps off without tools. Unscrew the four M2 screws, lift the top shell, and swap.",
          "Remix the design: the booklet includes a link to the editable Fusion 360 file. Add your name, change the side cutout pattern, or resize the palm area.",
          "DPI is fixed at 800 on the M—01. For adjustable DPI, see the M—02 kit.",
          "Share your build: tag @theyoungmaker with a photo of your finished mouse.",
        ],
      },
    ],
    specs: [
      { label: "WIRELESS", value: "2.4 GHz · ≤ 10 m range" },
      { label: "SENSOR", value: "Optical · 800 DPI" },
      { label: "BATTERY", value: "1 × AAA · ~3 months" },
      { label: "HOUSING", value: "3D printed · swappable" },
      { label: "WEIGHT", value: "~88 g (with battery)" },
    ],
  },
  {
    id: "3d-mouse-mini",
    series: "M—02",
    name: "3D Printed Mouse — Mini",
    shortDesc: "Same wireless mouse, compact size. Ideal for smaller hands or a packed bag. DPI-adjustable.",
    longDesc:
      "Everything in the Regular, 25% smaller. Compact 3D printed shell, same wireless PCB and dongle, plus adjustable DPI so you can dial it in for any screen size.",
    price: 44,
    image: m02,
    status: "PRE-ORDER",
    ages: "12+",
    lessonLength: "45 min",
    soldering: "None",
    dimensions: "99 × 58 × 35 mm",
    contents: [
      { qty: "1×", item: "3D printed compact housing", note: "top shell + base, choice of colour" },
      { qty: "1×", item: "Wireless mouse PCB", note: "pre-flashed, 2.4 GHz, DPI button" },
      { qty: "1×", item: "USB nano dongle", note: "plug & play, 2.4 GHz" },
      { qty: "3×", item: "Click switches", note: "left, right, middle" },
      { qty: "1×", item: "Compact scroll encoder", note: "20-step" },
      { qty: "1×", item: "Optical sensor module", note: "400–1600 DPI, adjustable" },
      { qty: "1×", item: "AAA battery (×1)", note: "included" },
      { qty: "4×", item: "M2 screws + hex key", note: "stainless" },
      { qty: "4×", item: "PTFE glide feet", note: "pre-cut, 0.8 mm" },
      { qty: "1×", item: "Build booklet", note: "24 pages, 3 sessions" },
    ],
    build: [
      "Check your parts",
      "Snap it together",
      "Pair & tune",
    ],
    lessons: [
      {
        title: "Check your parts",
        duration: "10 min",
        steps: [
          "Open the box and match every item to the parts list inside the front cover.",
          "The compact top shell is shorter than the Regular — button cutouts are closer to the front edge.",
          "Check the PCB: it has a small DPI button on the underside (cycles 400 → 800 → 1600 DPI).",
          "Locate the USB nano dongle — it stores in the battery compartment.",
          "Attach the four PTFE glide feet to the marked circles on the base shell before assembly.",
        ],
      },
      {
        title: "Snap it together",
        duration: "20 min",
        steps: [
          "Place the compact base shell flat on your desk, open side up.",
          "Press the three switches into their labelled slots on the PCB until each clicks in.",
          "Drop the scroll encoder into its mount; flat edge faces the front.",
          "Lower the PCB into the base shell, aligning the optical sensor window with the hole.",
          "Insert the AAA battery — the LED flashes once to confirm power.",
          "Set the top shell over the PCB and align the four screw bosses.",
          "Insert and tighten the four M2 screws snugly with the hex key.",
          "Flip over and check the mouse sits flat on all four feet.",
        ],
      },
      {
        title: "Pair & tune",
        duration: "15 min",
        steps: [
          "Plug the USB nano dongle into your computer.",
          "Slide the power switch to ON. The mouse pairs automatically within 5 seconds.",
          "Test left click, right click, middle click, and scroll.",
          "To change DPI: slide power OFF, hold the DPI button on the underside, slide power ON, release the button. The LED flashes once (400), twice (800), or three times (1600).",
          "400 DPI: precise work on a single monitor. 800 DPI: everyday use. 1600 DPI: large multi-screen setups.",
          "Swap the shell colour by removing the four M2 screws, lifting the top shell, and replacing it. No other disassembly needed.",
          "Download STL and Fusion 360 source files from the Hack'it product page to print or remix your own shell.",
        ],
      },
    ],
    specs: [
      { label: "WIRELESS", value: "2.4 GHz · ≤ 10 m range" },
      { label: "SENSOR", value: "Optical · 400 / 800 / 1600 DPI" },
      { label: "BATTERY", value: "1 × AAA · ~3 months" },
      { label: "HOUSING", value: "3D printed · swappable" },
      { label: "WEIGHT", value: "~72 g (with battery)" },
    ],
  },
];

export const getKit = (id: string) => kits.find((k) => k.id === id);
