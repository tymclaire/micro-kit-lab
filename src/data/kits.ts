import smartHome from "@/assets/kit-smart-home.jpg";
import plant from "@/assets/kit-plant.jpg";
import weather from "@/assets/kit-weather.jpg";

export type Kit = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  badge?: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  ageRange: string;
  buildTime: string;
  description: string;
  includes: string[];
  projects: string[];
};

export const kits: Kit[] = [
  {
    id: "smart-home",
    name: "Smart Home Set",
    tagline: "Build a tiny house that lights up, beeps and senses motion.",
    price: 39,
    image: smartHome,
    badge: "Most popular",
    level: "Beginner",
    ageRange: "Ages 9+",
    buildTime: "2–3 hrs",
    description:
      "Turn a cardboard model into a real smart home. Wire up motion sensors, automatic lights, a doorbell buzzer and a servo-powered door — all controlled by your micro:bit.",
    includes: [
      "micro:bit V2 board",
      "Sensor:bit expansion shield",
      "PIR motion sensor",
      "RGB LED + tri-color LEDs",
      "Active buzzer & servo motor",
      "Jumper wires + USB cable",
      "Printable cardboard house template",
    ],
    projects: [
      "Auto night light",
      "Front-door motion alarm",
      "Smart doorbell",
      "Servo-controlled garage door",
    ],
  },
  {
    id: "plant-watering",
    name: "Plant Watering Set",
    tagline: "Never let your basil die again — your plant texts the micro:bit when it’s thirsty.",
    price: 42,
    image: plant,
    level: "Beginner",
    ageRange: "Ages 10+",
    buildTime: "1–2 hrs",
    description:
      "A self-watering planter that reads soil moisture and pumps water on demand. Great first step into IoT, biology and a little bit of gardening.",
    includes: [
      "micro:bit V2 board",
      "IO expansion shield",
      "Capacitive soil moisture sensor",
      "Mini submersible water pump + tubing",
      "Relay module + battery pack",
      "Jumper wires + USB cable",
    ],
    projects: [
      "Moisture meter on the LED screen",
      "Auto-watering loop",
      "Low-water alert buzzer",
      "Daily watering schedule",
    ],
  },
  {
    id: "weather-station",
    name: "Weather Station Set",
    tagline: "Read the room — temperature, humidity and light, on a tiny OLED.",
    price: 45,
    image: weather,
    badge: "New",
    level: "Intermediate",
    ageRange: "Ages 11+",
    buildTime: "2–4 hrs",
    description:
      "Build your own desktop weather station. Log readings, graph the data and set alerts when the classroom gets too hot or too dry.",
    includes: [
      "micro:bit V2 board",
      "Environment shield",
      "DHT11 temperature & humidity sensor",
      "Light sensor + 0.96\" OLED display",
      "Jumper wires + USB cable",
    ],
    projects: [
      "Live temperature dashboard",
      "Humidity logger",
      "Sunrise light alarm",
      "Classroom comfort score",
    ],
  },
];

export const getKit = (id: string) => kits.find((k) => k.id === id);
