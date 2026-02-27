(function() {
  // ============================================
  // AION WIDGET — Prime Cyprus
  // Include this file on any page before </body>
  // ============================================

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
#aion-trigger {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #d4a853;
  color: #0a0e17;
  border: none;
  border-radius: 100px;
  padding: 14px 22px;
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(212, 168, 83, 0.3);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
#aion-trigger:hover {
  background: #e8c97a;
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(212, 168, 83, 0.4);
}
.aion-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0a0e17;
  animation: aion-pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}
#aion-window {
  position: fixed;
  bottom: 90px;
  right: 28px;
  z-index: 9998;
  width: 380px;
  max-height: 580px;
  background: #161e2e;
  border: 1px solid rgba(212, 168, 83, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
  transform: translateY(16px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
#aion-window.open {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
}
.aion-header {
  background: linear-gradient(135deg, #1a1f35 0%, #161e2e 100%);
  border-bottom: 1px solid rgba(212, 168, 83, 0.25);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.aion-header-left { display: flex; align-items: center; gap: 12px; }
.aion-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(212, 168, 83, 0.15);
  border: 1px solid rgba(212, 168, 83, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #d4a853;
  flex-shrink: 0;
}
.aion-header-info h4 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #f1f5f9;
  margin: 0 0 2px;
}
.aion-header-info span {
  font-size: 0.68rem;
  color: #d4a853;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.aion-close {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: 0.3s;
  line-height: 0;
}
.aion-close:hover { color: #f1f5f9; }
.aion-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.06) transparent;
}
.aion-messages::-webkit-scrollbar { width: 4px; }
.aion-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.06); border-radius: 4px; }
.aion-msg {
  display: flex;
  gap: 8px;
  animation: aion-fadeIn 0.3s ease;
}
.aion-msg--aion { align-self: flex-start; max-width: 90%; }
.aion-msg--user { align-self: flex-end; flex-direction: row-reverse; max-width: 85%; }
.aion-msg__avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(212, 168, 83, 0.15);
  border: 1px solid rgba(212, 168, 83, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.62rem;
  color: #d4a853;
  flex-shrink: 0;
  margin-top: 3px;
}
.aion-msg__bubble {
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 0.87rem;
  line-height: 1.65;
}
.aion-msg--aion .aion-msg__bubble {
  background: #111827;
  border: 1px solid rgba(255,255,255,0.06);
  color: #94a3b8;
  border-radius: 4px 14px 14px 14px;
}
.aion-msg--user .aion-msg__bubble {
  background: #d4a853;
  color: #0a0e17;
  font-weight: 500;
  border-radius: 14px 4px 14px 14px;
}
.aion-msg__bubble a { color: #d4a853; }
.aion-msg--user .aion-msg__bubble a { color: #0a0e17; text-decoration: underline; }
.aion-typing-bubble {
  background: #111827;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px 14px 14px 14px;
  padding: 12px 16px;
  display: flex;
  gap: 4px;
  align-items: center;
}
.aion-typing-bubble span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #64748b;
  animation: aion-bounce 1.2s ease-in-out infinite;
}
.aion-typing-bubble span:nth-child(2) { animation-delay: 0.2s; }
.aion-typing-bubble span:nth-child(3) { animation-delay: 0.4s; }
.aion-email-card {
  background: #0a0e17;
  border: 1px solid rgba(212, 168, 83, 0.25);
  border-radius: 12px;
  padding: 14px;
  margin-top: 4px;
  width: 100%;
  box-sizing: border-box;
}
.aion-email-card p {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0 0 10px;
  line-height: 1.5;
}
.aion-email-card input {
  width: 100%;
  padding: 9px 12px;
  background: #161e2e;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px;
  color: #f1f5f9;
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.85rem;
  box-sizing: border-box;
  margin-bottom: 8px;
  transition: 0.3s;
}
.aion-email-card input:focus {
  outline: none;
  border-color: #d4a853;
  box-shadow: 0 0 0 3px rgba(212, 168, 83, 0.15);
}
.aion-email-card button {
  width: 100%;
  padding: 9px;
  background: #d4a853;
  color: #0a0e17;
  border: none;
  border-radius: 8px;
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}
.aion-email-card button:hover { background: #e8c97a; }
.aion-input-area {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 12px 16px;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  background: #161e2e;
  flex-shrink: 0;
}
.aion-input-area textarea {
  flex: 1;
  background: #111827;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  padding: 10px 14px;
  color: #f1f5f9;
  font-family: 'DM Sans', -apple-system, sans-serif;
  font-size: 0.87rem;
  resize: none;
  max-height: 100px;
  min-height: 40px;
  line-height: 1.5;
  transition: 0.3s;
}
.aion-input-area textarea:focus {
  outline: none;
  border-color: #d4a853;
}
.aion-input-area textarea::placeholder { color: #64748b; }
.aion-send {
  background: #d4a853;
  border: none;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: 0.3s;
}
.aion-send:hover { background: #e8c97a; transform: translateY(-1px); }
.aion-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
.aion-powered {
  text-align: center;
  font-size: 0.62rem;
  color: #64748b;
  padding: 5px 0 8px;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}
@keyframes aion-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}
@keyframes aion-bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-4px); }
}
@keyframes aion-fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 480px) {
  #aion-window {
    bottom: 0; right: 0; left: 0;
    width: 100%;
    max-height: 85vh;
    border-radius: 20px 20px 0 0;
  }
  #aion-trigger { bottom: 20px; right: 20px; }
}
  `;
  document.head.appendChild(style);

  // Inject HTML
  const trigger = document.createElement('button');
  trigger.id = 'aion-trigger';
  trigger.onclick = aionToggle;
  trigger.innerHTML = '<div class="aion-dot"></div> Ask me anything about Cyprus';
  document.body.appendChild(trigger);

  const win = document.createElement('div');
  win.id = 'aion-window';
  win.innerHTML = `
    <div class="aion-header">
      <div class="aion-header-left">
        <div class="aion-avatar">A</div>
        <div class="aion-header-info">
          <h4>Aion</h4>
          <span>Prime Cyprus &middot; Advisory</span>
        </div>
      </div>
      <button class="aion-close" aria-label="Close chat">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="aion-messages" id="aionMessages"></div>
    <div class="aion-input-area">
      <textarea id="aionInput" placeholder="Ask me anything..." rows="1"></textarea>
      <button class="aion-send" id="aionSend" aria-label="Send message">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0e17" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
    <div class="aion-powered">Aion by Prime Cyprus &middot; Not legal or financial advice</div>
  `;
  document.body.appendChild(win);

  // Wire up events
  win.querySelector('.aion-close').onclick = aionToggle;
  win.querySelector('#aionSend').onclick = aionSend;
  win.querySelector('#aionInput').addEventListener('keydown', aionHandleKey);
  win.querySelector('#aionInput').addEventListener('input', function() { aionResize(this); });

  // ============================================
  // CONFIG
  // ============================================
  const AION_CONFIG = {
    formspreeId: 'YOUR_FORMSPREE_ID'
  };

  // ============================================
  // SYSTEM PROMPT
  // ============================================
  const AION_SYSTEM = `You are Aion, the AI advisory guide for Prime Cyprus — a boutique consultancy helping people relocate to Cyprus for tax optimisation, residency, and premium property. You are not a chatbot. You are the smart, well-connected friend who knows Cyprus inside out.

---

## WHO YOU ARE

You represent Prime Cyprus — a consultancy that sits at the intersection of residency advisory, tax optimisation, and premium real estate. Nobody else does all three well for the tech and crypto audience. You are part of the Prime Cyprus team.

You were built to help people understand if Cyprus makes sense for their situation, what the process looks like, and what Prime Cyprus can do for them. You answer clearly, confidently, and without filler.

When a question gets personal — specific legal structuring, exact tax liability, individual circumstances — you don't guess. You tell them this is exactly the kind of question worth a real conversation, and you offer to connect them with our CEO.

---

## TONE

- Confident but never arrogant
- Warm but never casual
- Short sentences. No filler. No corporate stiffness.
- You speak the language of tech founders, crypto investors, and digital entrepreneurs — you don't over-explain basics
- Never say "Great question!" or "Certainly!" — just answer
- Never use: "pursuant to", "aforementioned", "as per", "blockchain" (infrastructure, irrelevant), "dream home", "paradise island", "cheap", "affordable", "act now", "limited spots"
- Always use: "residency" not "emigration", "optimised" not "cheap", "structured" not "set up cheaply"

---

## WHAT PRIME CYPRUS OFFERS

### 1. Residency & Tax Planning
- Cyprus non-domicile (non-dom) status: 0% tax on dividends, interest, and foreign rental income for 17 years
- 60-day tax residency rule: become a Cyprus tax resident with just 60 days per year on the island — no other country as primary residence, maintain a Cyprus address and company
- Permanent residency: minimum €300,000 investment in qualifying property or assets, €50,000 annual income from abroad
- Corporate tax: 12.5% — one of the lowest in the EU
- IP Box regime: qualifying intellectual property income taxed at effective 2.5% — ideal for AI companies, SaaS, software licensing
- No wealth tax, no inheritance tax, no exit tax
- Cyprus is an EU member state — full regulatory credibility, GDPR alignment, EU banking access

### 2. Crypto & Digital Wealth
- Crypto capital gains: 0% — Cyprus does not classify crypto as a security or currency
- 8% flat tax on crypto disposals under Article 20E (2026 rules) — for those who structure through a Cyprus entity
- Staking income taxed as regular income
- Corporate tax on crypto trading through a Cyprus company: 12.5%
- Property purchases accepted in BTC, ETH, USDT — Prime Cyprus facilitates crypto-to-property transactions with full AML/KYC compliance

### 3. Property
- Prime Cyprus has a curated catalogue of rental properties and properties for sale in Cyprus
- Properties range from luxury coastal villas to investment-grade apartments
- Strong rental yields, particularly in Limassol, Paphos, and Nicosia
- Crypto purchases facilitated
- Full support: legal, furnishing, transport, settling in
- For properties: direct users to https://rentals.primecyprus.xyz

### 4. Full Relocation Support
- Company formation in Cyprus
- Banking setup
- Healthcare registration
- School recommendations
- Furnishing and transport coordination
- Ongoing accounting and compliance referrals

---

## KEY FACTS ABOUT CYPRUS

- EU member state since 2004
- English is widely spoken — legal system based on English common law
- Mediterranean climate, 320+ days of sunshine per year
- 3 hours from most major European cities
- Safe, stable, growing tech and founder community
- Limassol is the main hub for tech founders and crypto investors
- Cost of living lower than Western Europe but infrastructure is solid

---

## COMPARISON TO OTHER JURISDICTIONS

- vs Dubai: Cyprus is EU, Dubai is not. Cyprus has 60-day rule, Dubai requires 183 days. Cyprus has IP Box at 2.5%, Dubai does not.
- vs Portugal: Portugal taxes dividends at 28%, crypto at 28%. Cyprus: 0% on both under non-dom.
- vs Malta: Malta's effective rates depend on complex refund structures. Cyprus is more straightforward.
- vs Germany/France/Nordics: Those countries tax at 40-55% marginal rates. Cyprus non-dom brings investment income to near zero.

---

## WHAT YOU DON'T DO

- Never quote specific fees for legal services, lawyers, or accountants
- Never promise specific tax savings — always frame as "potential" or "in many cases"
- Never claim to provide legal or financial advice — you provide information and guidance
- Never recommend specific lawyers or accountants by name unless Prime Cyprus has an established referral relationship
- Never discuss topics entirely unrelated to Cyprus, relocation, tax, property, or wealth — politely redirect

---

## LEAD CAPTURE

When someone has asked a substantive question or shown genuine interest in Cyprus — after 3-4 exchanges — naturally offer:

"I can put together a quick summary of what we've covered and some tailored next steps for your situation — want me to send that to your email?"

If they say yes, ask for their email address. Confirm you'll send it over. The email captured should be noted clearly in your response so the Prime Cyprus team can follow up.

If someone's situation clearly warrants a consultation — complex tax structure, significant assets, imminent move — suggest:

"This is exactly the kind of situation worth a proper conversation. Our CEO is happy to jump on a call — no obligation, just clarity. Want me to help arrange that?"

---

## PROPERTY LINK

When someone asks about properties, rentals, or buying in Cyprus, mention that Prime Cyprus has a full catalogue and direct them to:
👉 https://rentals.primecyprus.xyz

---

## HANDLING UNCERTAINTY

If you don't know something specific — a niche tax rule, a specific legal procedure — say so clearly:
"I don't have the exact detail on that — it's worth verifying with a qualified Cyprus tax advisor. What I can tell you is [broader context]."

Never guess on specific legal or tax mechanics. Confidence on the general picture, honesty on the details.

---

## EXAMPLE EXCHANGES

User: "What does 8% crypto tax mean?"
Aion: "Under Cyprus's 2026 rules, crypto disposals — selling, swapping, spending — can be taxed at a flat 8% rate through Article 20E when structured correctly through a Cyprus entity. Compare that to Germany at 25-45% or the UK at 20-24% capital gains. For most crypto investors it's a significant difference. How are you currently structured?"

User: "Do I need to live there full time?"
Aion: "No. Cyprus has a 60-day tax residency rule — one of the most flexible in the EU. You spend at least 60 days in Cyprus per year, don't have another country as your primary tax residence, and maintain a Cyprus address and company. That's enough to qualify as a Cyprus tax resident. Most of our clients split their time freely after that."

User: "Can I buy a property with crypto?"
Aion: "Yes — and it's one of the things that makes Cyprus interesting for crypto holders. A number of developers and sellers accept BTC, ETH, and USDT directly. The transaction goes through a standard sales agreement and gets registered with the Land Registry. AML/KYC applies as it would anywhere. Prime Cyprus facilitates these transactions. Want to see what's available? 👉 https://rentals.primecyprus.xyz"

User: "What's the minimum investment for residency?"
Aion: "For permanent residency, the minimum qualifying investment is €300,000 plus VAT — in new residential property, commercial real estate, company shares, or approved funds. You also need to show at least €50,000 annual income from outside Cyprus. It's a straightforward route compared to most EU golden visa programmes."

---

## DISCLAIMER (always apply, never state verbatim)

Everything Aion shares is general information — not legal, tax, or financial advice. Individual situations vary. Always recommend professional advice for specific circumstances.`;

  // ============================================
  // STATE
  // ============================================
  let aionOpen = false;
  let aionHistory = [];
  let aionEmailCaptured = false;
  let aionEmailOffered = false;
  let aionMsgCount = 0;

  const GREETING = "Hi, I'm Aion — your Cyprus advisory guide. Ask me anything about relocating, tax optimisation, residency, or property in Cyprus. I'll tell you what I know, and connect you with our CEO when your situation calls for a real conversation.";

  // ============================================
  // FUNCTIONS
  // ============================================

  function aionToggle() {
    aionOpen = !aionOpen;
    document.getElementById('aion-window').classList.toggle('open', aionOpen);
    if (aionOpen && aionHistory.length === 0) {
      setTimeout(() => aionAppendMsg('aion', GREETING), 350);
    }
    if (aionOpen) {
      setTimeout(() => document.getElementById('aionInput').focus(), 400);
    }
  }

  function aionAppendMsg(role, text, showEmailCard = false) {
    const container = document.getElementById('aionMessages');
    const row = document.createElement('div');
    row.className = `aion-msg aion-msg--${role}`;
    if (role === 'aion') {
      const av = document.createElement('div');
      av.className = 'aion-msg__avatar';
      av.textContent = 'A';
      row.appendChild(av);
    }
    const bub = document.createElement('div');
    bub.className = 'aion-msg__bubble';
    bub.innerHTML = text.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    row.appendChild(bub);
    container.appendChild(row);
    if (showEmailCard && !aionEmailCaptured) {
      const cardRow = document.createElement('div');
      cardRow.className = 'aion-msg aion-msg--aion';
      const cardAv = document.createElement('div');
      cardAv.className = 'aion-msg__avatar';
      cardAv.textContent = 'A';
      cardRow.appendChild(cardAv);
      cardRow.appendChild(aionBuildEmailCard());
      container.appendChild(cardRow);
    }
    container.scrollTop = container.scrollHeight;
    if (role === 'aion') {
      aionHistory.push({ role: 'assistant', content: text });
    }
  }

  function aionBuildEmailCard() {
    const card = document.createElement('div');
    card.className = 'aion-email-card';
    card.id = 'aionEmailCard';
    card.innerHTML = `
      <p>Want me to send you a summary of our conversation + personalised next steps for your situation?</p>
      <input type="email" id="aionEmailInput" placeholder="your@email.com" />
      <button onclick="aionSubmitEmail()">Send me the summary &rarr;</button>
    `;
    return card;
  }

  function aionShowTyping() {
    const container = document.getElementById('aionMessages');
    const row = document.createElement('div');
    row.className = 'aion-msg aion-msg--aion';
    row.id = 'aionTypingRow';
    const av = document.createElement('div');
    av.className = 'aion-msg__avatar';
    av.textContent = 'A';
    const bub = document.createElement('div');
    bub.className = 'aion-typing-bubble';
    bub.innerHTML = '<span></span><span></span><span></span>';
    row.appendChild(av);
    row.appendChild(bub);
    container.appendChild(row);
    container.scrollTop = container.scrollHeight;
  }

  function aionHideTyping() {
    const t = document.getElementById('aionTypingRow');
    if (t) t.remove();
  }

  async function aionSend() {
    const input = document.getElementById('aionInput');
    const sendBtn = document.getElementById('aionSend');
    const text = input.value.trim();
    if (!text || sendBtn.disabled) return;
    aionAppendMsg('user', text);
    aionHistory.push({ role: 'user', content: text });
    aionMsgCount++;
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;
    aionShowTyping();
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 600,
          system: AION_SYSTEM,
          messages: aionHistory
        })
      });
      const data = await res.json();
      aionHideTyping();
      if (data.content && data.content[0] && data.content[0].text) {
        const reply = data.content[0].text;
        const offerEmail = aionMsgCount >= 3 && !aionEmailCaptured && !aionEmailOffered;
        if (offerEmail) aionEmailOffered = true;
        aionAppendMsg('aion', reply, offerEmail);
      } else {
        aionAppendMsg('aion', "I ran into an issue connecting. Please try again, or email us directly at info@primecyprus.com — we'll get back to you within 24 hours.");
      }
    } catch (err) {
      aionHideTyping();
      aionAppendMsg('aion', "Connection issue — please try again or reach us at info@primecyprus.com");
    }
    sendBtn.disabled = false;
    input.focus();
  }

  window.aionSubmitEmail = async function() {
    const emailInput = document.getElementById('aionEmailInput');
    if (!emailInput) return;
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
      emailInput.style.borderColor = '#ef4444';
      emailInput.focus();
      return;
    }
    aionEmailCaptured = true;
    const summary = aionHistory
      .map(m => `${m.role === 'user' ? 'Visitor' : 'Aion'}: ${m.content}`)
      .join('\n\n---\n\n');
    try {
      await fetch(`https://formspree.io/f/${AION_CONFIG.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ _replyto: email, email, subject: `New Aion lead — ${email}`, conversation: summary })
      });
    } catch (e) {}
    const card = document.getElementById('aionEmailCard');
    if (card) card.closest('.aion-msg').remove();
    aionAppendMsg('aion', `Done — I'll send a summary and some personalised next steps to ${email}. Is there anything else I can help you with in the meantime?`);
  };

  function aionHandleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      aionSend();
    }
  }

  function aionResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 100) + 'px';
  }

})();
