import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      question: "Is this platform free to use?",
      answer: "Yes. Practice mode is completely free and does not require any deposits or transactions. You can practice predictions, appear on leaderboards, and build a public profile without holding any tokens."
    },
    {
      question: "Do I need to buy a token to get started?",
      answer: "No. Tokens are not required to use practice mode. Tokens are only required when users choose to access real prediction pools. Practice mode will always remain open and free."
    },
    {
      question: "Can users make money on this platform?",
      answer: "The platform does not guarantee profits. Outcomes depend entirely on user performance. Users who consistently make accurate predictions may earn rewards from pools, while others may not. The platform itself does not generate returns or promise any form of yield."
    },
    {
      question: "What is the token actually used for?",
      answer: "The token is used for access, not speculation. It is required to: Enter real prediction pools, Unlock higher participation tiers, Prevent spam and low-quality participation. Holding tokens alone does not provide any advantage without skill and reputation."
    },
    {
      question: "How is this different from trading or gambling platforms?",
      answer: "Key differences: Users can practice without risk, Skill and reputation are visible, No leverage or forced deposits, No promised returns. This platform focuses on learning, performance, and fair participation — not short-term speculation."
    },
    {
      question: "What assets are supported?",
      answer: "Currently, practice mode supports: Bitcoin (BTC), Ethereum (ETH), Solana (SOL). More assets will be added as the platform expands."
    },
    {
      question: "Is this platform live or still in development?",
      answer: "The platform is live. Practice mode, leaderboards, and user profiles are already available. Additional features will be released based on milestone progress."
    },
    {
      question: "Which blockchain does this platform run on?",
      answer: "The platform is designed to be EVM-compatible and chain-agnostic. Initial mainnet deployment will align with ecosystem partners and grant providers."
    },
    {
      question: "Is this platform custodial?",
      answer: "No. Users maintain full control of their wallets. The platform does not custody user funds."
    },
    {
      question: "Is there a token sale right now?",
      answer: "Token access mechanisms will be announced only when the product is ready. There is no requirement to purchase tokens to use practice mode, and there are no guaranteed timelines for token distribution."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          FREQUENTLY ASKED QUESTIONS (FAQ)
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Clear answers. No hype. No hidden mechanics.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{index + 1}. {item.question}</span>
                <span className="ml-4">
                  <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-blue-500`}></i>
                </span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Final Note</h3>
          <p className="text-gray-700">
            Start with practice. Learn how the system works.
          </p>
          <p className="text-gray-700 mt-2">
            Access comes later — when you choose to participate.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
