import p01 from "@/assets/patch-p01.jpg";
import p02 from "@/assets/patch-p02.jpg";
import p03 from "@/assets/patch-p03.jpg";

export type Spec = { label: string; value: string };

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
  build: string[];         // lessons
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
      "Read soil moisture as a value",
      "Trigger the pump from a threshold",
      "Log readings to micro:bit memory",
      "Send data to a second micro:bit",
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
      "Auto night light from ambient sensor",
      "Front-door motion alarm",
      "Servo-controlled garage door",
      "Doorbell with melody",
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
      "Live temperature dashboard",
      "Humidity logger across a class period",
      "Sunrise light alarm",
      "Classroom comfort score",
    ],
    specs: [
      { label: "POWER", value: "USB or 3 × AA" },
      { label: "SENSOR", value: "DHT11 · ±2 °C" },
      { label: "DISPLAY", value: "OLED · I²C" },
      { label: "CODE", value: "MakeCode · Python" },
      { label: "REUSABLE", value: "≥ 30 builds" },
    ],
  },
];

export const getKit = (id: string) => kits.find((k) => k.id === id);
