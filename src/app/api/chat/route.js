import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the official AUTONEX AI Assistant — an intelligent, enthusiastic cyberpunk robot guide for AUTONEX (the 1st Ever Robotics & Automation Guild built at SIET Panchkula, Haryana).

Key Official Facts:
- Founders & Board:
  • President & Founder: Aaditya Verma (Conceived the vision for AUTONEX and founded SIET Panchkula's 1st official robotics guild).
  • Vice President & Co-Founder: Rishabh Kumar (Co-architected club operations, team structures, and learning frameworks).
  • Coordinator: Sandeep Sharma (Coordinates campus events, NeXus Design Challenge, and active builder workflows).
  • Research & Development Head: Heemanshu (Leads technical prototyping, ROS kinematics, autonomous rovers, and PLC automation rigs).
- Academic Mentor:
  • Dr. Milap Sharma (Assistant Professor — Department of Automation & Robotics, M.Tech, Ph.D. PEC 2023, Wearable Safety Sensors scholar).
- Core Technical Domains:
  1. Autonomous Robotics & Kinematics (ROS, Python, C++, Computer Vision).
  2. Industrial Automation (Industrial PLCs, SCADA monitoring, Pneumatic Actuators).
  3. Embedded Systems & IoT (Embedded C/C++, ESP32, STM32, RTOS kernel).
- Key Initiatives & Events:
  • NeXus Design Challenge (Flagship CAD & 3D hardware control design competition).
  • Robotics & Automation Quiz (Campus-wide technical quiz contest).
  • Student workshops and technical learning sessions.

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

    // Local Fallback Generator
    const text = lastUserMessage.toLowerCase();
    let reply = "Hello! I am the AUTONEX AI Bot. Ask me about our 4 founders, Dr. Milap Sharma, our 3 technical domains, or NeXus Design Challenge!";

    if (text.includes("founder") || text.includes("who started") || text.includes("team") || text.includes("president")) {
      reply = "AUTONEX was founded by four student leaders at SIET Panchkula:\n• Aaditya Verma — President & Founder\n• Rishabh Kumar — Vice President\n• Sandeep Sharma — Coordinator\n• Heemanshu — Research & Development Head";
    } else if (text.includes("mentor") || text.includes("milap") || text.includes("faculty")) {
      reply = "Our Faculty Mentor is Dr. Milap Sharma, Assistant Professor in the Dept. of Automation & Robotics at SIET Panchkula (Ph.D. PEC 2023, Wearable Safety Sensors scholar).";
    } else if (text.includes("domain") || text.includes("learn") || text.includes("tech")) {
      reply = "AUTONEX operates across 3 specialized domains:\n1. Autonomous Robotics (ROS & Kinematics)\n2. Industrial Automation (PLC & SCADA)\n3. Embedded Systems & IoT (ESP32 / STM32)";
    } else if (text.includes("event") || text.includes("nexus") || text.includes("quiz") || text.includes("challenge")) {
      reply = "AUTONEX holds two flagship initiatives on campus: the NeXus Design Challenge (focusing on hardware CAD & 3D control design) and the Robotics & Automation Quiz!";
    } else if (text.includes("join") || text.includes("apply") || text.includes("register")) {
      reply = "You can apply right here by clicking 'Join Guild'! We welcome programmers, circuit designers, and hardware enthusiasts at SIET Panchkula.";
    }

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ 
      reply: "Ask me about President Aaditya Verma, VP Rishabh Kumar, Coordinator Sandeep Sharma, R&D Head Heemanshu, or the NeXus Design Challenge!" 
    });
  }
}
