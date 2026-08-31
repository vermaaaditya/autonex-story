import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the official AUTONEX AI Assistant — an intelligent, enthusiastic cyberpunk robot guide for AUTONEX (the 1st Ever Robotics & Automation Guild built at SIET Panchkula, Haryana).

Key Official Facts:
- Founders & Board:
  • President & Founder: Aaditya Verma (Conceived the vision for AUTONEX and founded SIET Panchkula's 1st official robotics guild).
  • Vice President & Co-Founder: Rishabh Kumar (Co-architected club operations, team structures, and hardware lab infrastructure).
  • Coordinator: Sandeep Sharma (Coordinates campus events, department collaborations, and active builder workflows).
  • Research & Development Head: Heemanshu (Leads technical prototyping, ROS kinematics, autonomous rovers, and PLC automation rigs).
- Academic Mentor:
  • Dr. Milap Sharma (Assistant Professor — Department of Automation & Robotics, M.Tech, Ph.D. PEC 2023, Wearable Safety Sensors scholar).
- Core Technical Domains:
  1. Autonomous Robotics & Kinematics (ROS, Python, C++, Computer Vision, Rover Kinematics).
  2. Industrial Automation (Industrial PLCs, SCADA monitoring, Pneumatic Actuators, Smart Manufacturing Drives).
  3. Embedded Systems & IoT (Embedded C/C++, ESP32, STM32, RTOS kernel, Wireless IoT Hardware).
- Key Milestones:
  • Historic 1st Ever Technical Club formed at SIET Panchkula.
  • 40+ Active builders and researchers.
  • Organized SIET's inaugural RoboWars & Industrial Automation Challenge (120+ participants, 24 robot submissions).
  • 9+ Technical workshops and hackathons held.

Style: Friendly, concise, tech-savvy, and futuristic. Keep responses under 4 sentences. Speak like a helpful AI robot guide.
`;

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages[messages.length - 1]?.content || "";

    const apiKey = process.env.GROQ_API_KEY;

    if (apiKey) {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages
          ],
          temperature: 0.7,
          max_tokens: 300
        })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices[0]?.message?.content;
        if (reply) {
          return NextResponse.json({ reply });
        }
      }
    }

    // Smart Local Fallback Response Generator
    const text = lastUserMessage.toLowerCase();
    let reply = "Hello! I am the AUTONEX AI Bot. Ask me about our 4 founders, Dr. Milap Sharma, our 3 technical domains, or how to join!";

    if (text.includes("founder") || text.includes("who started") || text.includes("team") || text.includes("president")) {
      reply = "AUTONEX was founded by four key leaders at SIET Panchkula:\n• Aaditya Verma — President & Founder\n• Rishabh Kumar — Vice President\n• Sandeep Sharma — Coordinator\n• Heemanshu — Research & Development Head";
    } else if (text.includes("mentor") || text.includes("milap") || text.includes("faculty")) {
      reply = "Our Faculty Mentor is Dr. Milap Sharma, Assistant Professor in the Dept. of Automation & Robotics at SIET Panchkula (Ph.D. PEC 2023, Wearable Safety Sensors scholar).";
    } else if (text.includes("domain") || text.includes("learn") || text.includes("tech")) {
      reply = "AUTONEX operates across 3 specialized domains:\n1. Autonomous Robotics (ROS & Kinematics)\n2. Industrial Automation (PLC & SCADA)\n3. Embedded Systems & IoT (ESP32 / STM32)";
    } else if (text.includes("join") || text.includes("apply") || text.includes("register")) {
      reply = "You can apply right here by clicking 'Apply to Guild'! We welcome programmers, circuit designers, and hardware enthusiasts at SIET Panchkula.";
    } else if (text.includes("event") || text.includes("robowars") || text.includes("hackathon")) {
      reply = "We organized SIET Panchkula's first-ever RoboWars & Heavy Metal contest with 120+ student participants and 24 robot submissions!";
    }

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ 
      reply: "AUTONEX Bot encountered a minor signal glitch, but I'm ready! Ask me about Aaditya Verma (President), Rishabh Kumar (VP), Sandeep Sharma (Coordinator), or Heemanshu (R&D Head)!" 
    });
  }
}
