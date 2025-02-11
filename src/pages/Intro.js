import React, { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const TerminalPrompt = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    if (displayedText.length < text.length && !isComplete) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 40);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete(); // Call the callback when typing is finished
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, text, isComplete, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center">
      <span className="text-green-400 mr-2">user@herve:~$</span>
      <span className="text-white">{displayedText}</span>
      <span className={`ml-1 text-gray-400 ${showCursor ? "opacity-100" : "opacity-0"}`}>▋</span>
    </div>
  );
};

const Intro = () => {
  const [showContent, setShowContent] = useState(false);
  const [introDisplayed, setIntroDisplayed] = useState(false); // Track if intro text is shown
  const [emojiPosition, setEmojiPosition] = useState(0); // State for emoji position

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiPosition((prevPosition) => (prevPosition + 1) % 4); // Cycle through 0-3
    }, 2000); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  const emojis = ["👋", "🙌", "😊", "🎉"];
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  const introTextParagraph1 = `A full-stack developer specializing in backend development. I'm passionate about building scalable and efficient solutions.`;
  const introTextParagraph2 = `I enjoy using technology to solve complex problems and create impactful applications.`;

  const handleCommandComplete = () => {
    setIntroDisplayed(true); // Show intro text only after command completes
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-5 font-jetbrains-mono"> {/* Added font here */}
      <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl overflow-hidden transition-opacity duration-500 ease-in-out" style={{ opacity: showContent ? 1 : 0 }}>
        <div className="bg-gray-800 p-3 flex items-center justify-between text-gray-400 text-sm">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="w-16" />
        </div>

        <div className="p-6  text-gray-300 space-y-4"> {/* Removed font-mono */}
          <TerminalPrompt text="sudo apt install intro-me" onComplete={handleCommandComplete} />
          {introDisplayed && (
            <div className="mt-4">
              <h1 className="text-4xl font-bold text-purple-400 mb-2 font-jetbrains-mono">Hello {emojis[emojiPosition]}, I'm Hervé NGENZI</h1> {/* Added font here */}
              <p className="text-gray-400 text-lg leading-relaxed mb-4">{introTextParagraph1}</p>
              <p className="text-gray-400 text-lg leading-relaxed">{introTextParagraph2}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;