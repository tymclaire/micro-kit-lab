import p01 from "@/assets/patch-p01.jpg";
import p02 from "@/assets/patch-p02.jpg";
import p03 from "@/assets/patch-p03.jpg";
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
    id: "weather-station",
    series: "P—03",
    name: "Weather Station",
    shortDesc: "A classroom sensor kit. Builds a desk weather station with OLED readout.",
    longDesc:
      "Temperature, humidity, light. Read the room, log it, and graph it. A weather station you can leave on the windowsill for a term.",
    price: 45,
    image: p03,
    status: "PRE-ORDER",
    ages: "11+",
    lessonLength: "50 min",
    soldering: "None",
    dimensions: "250 × 180 × 60 mm",
    contents: [
      { qty: "1×", item: "BBC micro:bit V2", note: "with edge connector" },
      { qty: "1×", item: "DHT11 temperature & humidity sensor", note: "3-pin" },
      { qty: "1×", item: "0.96\" OLED display", note: "I²C, 128×64" },
      { qty: "1×", item: "Light-dependent resistor", note: "with divider" },
      { qty: "1×", item: "Half-size breadboard", note: "400 tie points" },
      { qty: "12×", item: "Jumper wires", note: "20 cm, mixed" },
      { qty: "1×", item: "Instruction booklet", note: "32 pages, 4 lessons" },
    ],
    build: [
      "Wire it up",
      "Live temperature dashboard",
      "Humidity logger",
      "Classroom comfort score",
    ],
    lessons: [
      {
        title: "Wire it up",
        duration: "10 min",
        steps: [
          "Plug the micro:bit into the edge connector — USB port faces up.",
          "DHT11 sensor: connect VCC → 3V, GND → GND, DATA → Pin 0.",
          "OLED display: connect SDA → Pin 20, SCL → Pin 19, VCC → 3V, GND → GND. The display uses I²C so only two signal wires are needed.",
          "LDR (light sensor): connect one leg → 3V. Connect the other leg → Pin 1 AND through a 10 kΩ resistor to GND. This voltage divider lets the micro:bit read light as an analog value.",
          "Power via USB. The OLED shows a startup screen once firmware is loaded.",
        ],
      },
      {
        title: "Live temperature dashboard",
        duration: "15 min",
        steps: [
          "Open MakeCode and start a new project called 'weather'.",
          "Click Extensions and search 'dht11'. Add the DHT11 extension to your project.",
          "Inside 'on start', add 'initialise DHT11 on pin P0'.",
          "Add a 'forever' block. Inside it, read the temperature: 'DHT11 read temperature'.",
          "Display the reading on the OLED: 'OLED show string \"TEMP:\"' then 'OLED show number temperature' on the next line.",
          "Read humidity: 'DHT11 read humidity'. Show it on the next OLED line with a 'HUM:' label.",
          "Add 'pause 2000 ms' so the display refreshes every 2 seconds.",
          "Flash to the micro:bit. Watch the values update live.",
          "Breathe gently on the DHT11 sensor — watch humidity climb. Cup your hand around it — watch temperature inch up.",
        ],
      },
      {
        title: "Humidity logger",
        duration: "15 min",
        steps: [
          "Continue in the 'weather' project.",
          "In 'on start', create a variable 'readingCount' set to 0, and a list variable 'humLog' set to an empty list.",
          "Inside the forever loop, after reading humidity, add 'list add humLog value humidity'.",
          "Increment readingCount by 1 each loop.",
          "Add an 'if readingCount = 5' block. Inside it, calculate the average: sum all values in humLog, divide by 5, store as 'avgHumidity'.",
          "Display the average on OLED line 3 with label 'AVG:'.",
          "Reset: set readingCount to 0 and clear humLog.",
          "Add 'serial write value \"humidity\" = humidity' inside the loop to stream data to the console.",
          "Flash and leave the kit on a windowsill for one class period. Open the MakeCode console and click Download to save a CSV of all readings.",
          "Open the CSV in a spreadsheet. Create a line chart of humidity over time.",
        ],
      },
      {
        title: "Classroom comfort score",
        duration: "10 min",
        steps: [
          "Continue in the 'weather' project.",
          "Read all three sensors in the forever loop: temperature (DHT11), humidity (DHT11), and light level (analog read pin P1, scaled 0–100).",
          "Create a variable 'score'. Set it to 0 at the start of each loop.",
          "Add an 'if' block: if temperature is between 20 and 25, add 1 to score.",
          "Add another 'if': if humidity is between 40 and 60, add 1 to score.",
          "Add another 'if': if light > 300, add 1 to score.",
          "Now evaluate: if score = 3, show a happy face icon on the micro:bit LED and 'GREAT' on the OLED.",
          "If score = 2, show a neutral face and 'OK'.",
          "If score ≤ 1, show a sad face and 'POOR'.",
          "Flash and walk around the classroom. Compare comfort scores near the window, next to the heater, and by the door.",
        ],
      },
    ],
    specs: [
      { label: "POWER", value: "USB or 3 × AA" },
      { label: "SENSOR", value: "DHT11 · ±2 °C" },
      { label: "DISPLAY", value: "OLED · I²C" },
      { label: "CODE", value: "MakeCode · Python" },
      { label: "REUSABLE", value: "≥ 30 builds" },
    ],
  },
  {
    id: "mechanical-mouse-regular",
    series: "M—01",
    name: "Mechanical Mouse — Regular",
    shortDesc: "Build your own full-size mechanical mouse. Install the switches, connect the optical sensor, flash the firmware.",
    longDesc:
      "Wire up a real mouse from parts. Snap in three mechanical switches, seat the optical sensor, thread the cable, and flash open-source firmware. Walk away with a mouse you built — and can reprogram.",
    price: 49,
    image: m01,
    status: "PRE-ORDER",
    ages: "12+",
    lessonLength: "60 min",
    soldering: "None",
    dimensions: "125 × 67 × 42 mm",
    contents: [
      { qty: "1×", item: "RP2040 mouse PCB", note: "pre-flashed, USB-HID" },
      { qty: "2×", item: "ABS shell halves", note: "top + bottom" },
      { qty: "3×", item: "Kailh Box White switches", note: "left, right, middle" },
      { qty: "1×", item: "PMW3336 optical sensor module", note: "200–12 000 DPI" },
      { qty: "1×", item: "Scroll encoder with tactile ring", note: "24-step" },
      { qty: "1×", item: "USB-C braided cable", note: "1.5 m, detachable" },
      { qty: "6×", item: "M2 screws", note: "stainless, with hex key" },
      { qty: "4×", item: "PTFE glide feet", note: "0.8 mm, pre-cut" },
      { qty: "1×", item: "Build booklet", note: "32 pages, 4 sessions" },
    ],
    build: [
      "Assemble the base",
      "Install the switches",
      "Flash & test",
      "Tune your mouse",
    ],
    lessons: [
      {
        title: "Assemble the base",
        duration: "15 min",
        steps: [
          "Open the box and lay all parts on the mat — check every item against the parts list inside the booklet cover.",
          "Peel the protective film from both shell halves. Place the bottom shell face-down on the desk.",
          "Slide the PCB into the bottom shell — the USB-C port aligns with the opening at the front.",
          "Press the optical sensor module onto the PCB sensor slot; the lens faces down through the shell hole.",
          "Drop the scroll encoder into its mount on the PCB. It only fits one way — the flat edge faces the button side.",
          "Thread the USB-C cable through the cable channel at the front of the bottom shell.",
          "Plug the cable into the USB-C port on the PCB. Tug gently to confirm it's seated.",
          "Stick the four PTFE glide feet to the marked circles on the underside of the bottom shell.",
        ],
      },
      {
        title: "Install the switches",
        duration: "15 min",
        steps: [
          "Take the three Kailh Box White switches from the bag. Each switch has two metal pins at the bottom.",
          "The left switch goes in the left socket, right switch in the right socket, middle/scroll switch in the centre socket.",
          "Press the left switch straight down into its socket until you hear and feel two clicks — both pins must be fully engaged.",
          "Repeat for the right and middle switches.",
          "Wiggle each switch gently side to side — if it rocks, press it down again until it's flush.",
          "Set the top shell over the switches and bottom shell. Line up the four screw holes at the corners.",
          "Insert an M2 screw in each corner and hand-tighten with the hex key. Do not overtighten — stop when snug.",
          "Flip the mouse over. It should sit flat on the desk with no rocking. If it rocks, check the glide feet are seated.",
        ],
      },
      {
        title: "Flash & test",
        duration: "15 min",
        steps: [
          "Connect the mouse to your computer with the USB-C cable.",
          "The PCB comes pre-flashed with open firmware. Your computer should recognise it as a mouse immediately — no driver needed.",
          "Open a text editor. Move the mouse — the pointer should move smoothly on screen.",
          "Click the left switch, right switch, and middle/scroll switch. All three should register.",
          "Scroll the encoder up and down — the page should scroll.",
          "If any button doesn't respond, unscrew the shell, reseat that switch, and reassemble.",
          "To re-flash or update firmware: hold the BOOT button on the PCB while plugging in USB — the mouse appears as a USB drive. Drag the new .uf2 file onto it.",
          "Visit the Hack'it firmware page (linked in the booklet) to download the latest .uf2 and the web configurator.",
        ],
      },
      {
        title: "Tune your mouse",
        duration: "15 min",
        steps: [
          "Open the Hack'it web configurator (Chrome or Edge required — link in the booklet).",
          "Click Connect and select your mouse from the device list.",
          "Under Pointer Speed, drag the DPI slider. Try 800 DPI for precision, 1600 DPI for faster movement across a large screen.",
          "Under Scroll Speed, adjust steps-per-click on the encoder from 1 to 4.",
          "Under Button Mapping, swap any button's function — for example, map the middle click to 'Back' for browser navigation.",
          "Click Save to Flash — the settings are stored on the PCB and survive unplugging.",
          "Disconnect and reconnect the mouse. Test all your settings.",
          "Challenge: remap button A to send a macro (e.g. Ctrl+C). The configurator supports single key, key combos, and media keys.",
        ],
      },
    ],
    specs: [
      { label: "SENSOR", value: "PMW3336 · 200–12 000 DPI" },
      { label: "SWITCHES", value: "Kailh Box White · 50M clicks" },
      { label: "MCU", value: "RP2040 · 16 MB flash" },
      { label: "CONNECT", value: "USB-C · plug & play" },
      { label: "WEIGHT", value: "~95 g (without cable)" },
    ],
  },
  {
    id: "mechanical-mouse-mini",
    series: "M—02",
    name: "Mechanical Mouse — Mini",
    shortDesc: "The same build-it-yourself mouse, 25% smaller. Compact shell, same switches and optical sensor.",
    longDesc:
      "Everything in the Regular kit, packed into a compact travel-size shell. Shorter build, same satisfaction. Great for smaller hands or a packed bag.",
    price: 44,
    image: m02,
    status: "PRE-ORDER",
    ages: "12+",
    lessonLength: "45 min",
    soldering: "None",
    dimensions: "99 × 58 × 35 mm",
    contents: [
      { qty: "1×", item: "RP2040 mouse PCB", note: "pre-flashed, USB-HID" },
      { qty: "2×", item: "Compact ABS shell halves", note: "top + bottom" },
      { qty: "3×", item: "Kailh Box White switches", note: "left, right, middle" },
      { qty: "1×", item: "PMW3336 optical sensor module", note: "200–12 000 DPI" },
      { qty: "1×", item: "Compact scroll encoder", note: "20-step" },
      { qty: "1×", item: "USB-C braided cable", note: "1.2 m, detachable" },
      { qty: "4×", item: "M2 screws", note: "stainless, with hex key" },
      { qty: "4×", item: "PTFE glide feet", note: "0.8 mm, pre-cut" },
      { qty: "1×", item: "Build booklet", note: "24 pages, 3 sessions" },
    ],
    build: [
      "Assemble the base",
      "Install the switches",
      "Flash & tune",
    ],
    lessons: [
      {
        title: "Assemble the base",
        duration: "15 min",
        steps: [
          "Open the box and check all parts against the list inside the booklet cover.",
          "Peel the protective film from both compact shell halves. Place the bottom shell face-down.",
          "Slide the PCB into the bottom shell — the USB-C port aligns with the front opening.",
          "Press the optical sensor module onto the PCB sensor slot; lens faces down through the shell hole.",
          "Drop the compact scroll encoder into its mount. The flat edge faces the button side.",
          "Thread the USB-C cable through the front cable channel and plug into the PCB.",
          "Stick the four PTFE feet to the marked circles on the underside of the shell.",
        ],
      },
      {
        title: "Install the switches",
        duration: "15 min",
        steps: [
          "Take the three Kailh Box White switches. Each has two metal pins.",
          "Press the left, right, and middle switches into their sockets until both pins click in on each.",
          "Wiggle each switch — if it rocks, press it fully down until flush.",
          "Place the top shell over the switches and align the four screw holes.",
          "Seat an M2 screw in each hole and tighten snugly with the hex key. Do not overtighten.",
          "Flip the mouse over and check it sits flat with no rocking.",
        ],
      },
      {
        title: "Flash & tune",
        duration: "15 min",
        steps: [
          "Connect the mouse via USB-C. Your computer recognises it as a plug-and-play mouse.",
          "Test left click, right click, middle click, and scroll.",
          "Open the Hack'it web configurator (Chrome/Edge, link in booklet). Click Connect.",
          "Set your DPI: 600 for precise work, 1200 for general use. Compact mice work well at lower DPI.",
          "Adjust scroll steps-per-click and remap any button from the Button Mapping tab.",
          "Click Save to Flash. Unplug and replug to confirm settings are stored.",
          "To update firmware: hold BOOT on the PCB while plugging in, drag the .uf2 file onto the USB drive that appears.",
        ],
      },
    ],
    specs: [
      { label: "SENSOR", value: "PMW3336 · 200–12 000 DPI" },
      { label: "SWITCHES", value: "Kailh Box White · 50M clicks" },
      { label: "MCU", value: "RP2040 · 16 MB flash" },
      { label: "CONNECT", value: "USB-C · plug & play" },
      { label: "WEIGHT", value: "~72 g (without cable)" },
    ],
  },
];

export const getKit = (id: string) => kits.find((k) => k.id === id);
