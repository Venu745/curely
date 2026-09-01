import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const inputRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();

    if (!userMessage || loading) return;

    inputRef.current.value = "";

    // Show user message
    setChatHistory((history) => [
      ...history,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      // Show AI response
      setChatHistory((history) => [
        ...history,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setChatHistory((history) => [
        ...history,
        {
          role: "assistant",
          text: "Sorry, I couldn't connect to the AI assistant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#F8FAFC]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0F766E]/5 blur-3xl" />

      {/* Center Hero Content */}
      <div className="relative flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#E6F4F1] px-4 py-2 text-sm font-medium text-[#0F766E]">
            <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
            Here to support you
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-[#0F172A] sm:text-6xl lg:text-8xl">
            Your Health.
            <br />
            <span className="text-[#0F766E]">Your Support.</span>
            <br />
            One Simple Place.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#64748B] sm:text-xl">
            Get the support you need, when you need it. Find helpful resources,
            connect with support, and get guidance — all in one simple place.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/contact")}
              type="button"
              className="rounded-xl bg-[#0F766E] px-7 py-4 font-semibold text-white shadow-lg shadow-[#0F766E]/20 transition hover:-translate-y-0.5 hover:bg-[#115E59]"
            >
              Request Support
            </button>

            <button
              type="button"
              onClick={() => setChatOpen(true)}
              className="rounded-xl border border-[#2563EB] bg-white px-7 py-4 font-semibold text-[#2563EB] transition hover:-translate-y-0.5 hover:bg-[#EFF6FF]"
            >
              Ask AI Assistant
            </button>
          </div>

          {/* Small reassurance */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DCFCE7] text-xs font-bold text-[#16A34A]">
                ✓
              </span>
              Simple, accessible, and always here when you need support.
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          aria-label="Open AI Assistant"
          className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#0F766E] text-white shadow-xl shadow-[#0F766E]/30 transition hover:scale-105 hover:bg-[#115E59]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12a8.5 8.5 0 01-9 8.5 8.8 8.8 0 01-3.8-.85L4 21l1.35-3.85A8.4 8.4 0 013.5 12 8.5 8.5 0 0112 3.5 8.5 8.5 0 0121 12z"
            />
          </svg>

          <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-white bg-[#16A34A]" />
        </button>
      )}

      {/* Chat Overlay */}
      {chatOpen && (
        <div
          onClick={() => setChatOpen(false)}
          className="fixed inset-0 z-40 bg-[#0F172A]/20 backdrop-blur-[1px]"
        />
      )}

      {/* Chat Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ${
          chatOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F4F1] text-[#0F766E]">
              💬
            </div>

            <div>
              <h2 className="font-semibold text-[#0F172A]">AI Assistant</h2>

              <div className="flex items-center gap-1.5 text-xs text-[#16A34A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                Online
              </div>
            </div>
          </div>

          <button
            onClick={() => setChatOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#64748B] hover:bg-[#F8FAFC]"
          >
            ✕
          </button>
        </div>

        {/* Chat */}
        <div className="flex h-[calc(100%-73px)] flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-[#F8FAFC] p-5">
            {/* Initial AI message */}
            <div className="mb-4 flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F766E] text-xs font-bold text-white">
                AI
              </div>

              <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-4 shadow-sm">
                <p className="text-sm leading-6 text-[#0F172A]">
                  Hi! 👋 I'm here to help. What kind of support are you looking
                  for today?
                </p>
              </div>
            </div>

            {/* Chat history */}
            {/* <ChatMessages
              chatHistory={chatHistory}
            /> */}
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-4 flex gap-3 ${
                  chat.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {chat.role === "assistant" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F766E] text-xs font-bold text-white">
                    AI
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                    chat.role === "user"
                      ? "rounded-tr-none bg-[#0F766E] text-white"
                      : "rounded-tl-none bg-white text-[#0F172A]"
                  }`}
                >
                  <p className="text-sm leading-6">{chat.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-slate-100 bg-white p-4">
            <form
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-[#F8FAFC] p-2"
              onSubmit={handleFormSubmit}
            >
              <input
                ref={inputRef}
                type="text"
                required
                disabled={loading}
                placeholder={
                  loading ? "AI is thinking..." : "Type your message..."
                }
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-[#0F172A] outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F766E] text-white hover:bg-[#115E59] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "..." : "→"}
              </button>
            </form>

            <p className="mt-2 text-center text-[11px] text-[#94A3B8]">
              AI responses may not always be accurate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/*
  This component displays the chat history.
  The history is passed through the parent state.
*/

const ChatMessages = ({ setChatHistory }) => {
  // This component alone cannot read the current history.
  // The parent should pass chatHistory as a prop.
  return null;
};

export default Hero;
