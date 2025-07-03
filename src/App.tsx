import React, { useState } from 'react';
import { Copy, Sparkles, RefreshCw, Check } from 'lucide-react';

interface StylePreset {
  name: string;
  icon: string;
  variations: ((text: string) => string)[];
}

const stylePresets: StylePreset[] = [
  {
    name: 'Gaming Pro',
    icon: '🎮',
    variations: [
      (text: string) => `༄ᶦᶰᵈ᭄✿${text}࿐`,
      (text: string) => `꧁ঔৣ☠︎${text}☠︎☬🥀ঔৣ꧂`,
      (text: string) => `Sᴋ᭄${text}ᴮᴼˢˢ`,
      (text: string) => `꧁༒☬${text}®☬༒꧂`,
      (text: string) => `░${text.split('').join('░')}░`,
    ]
  },
  {
    name: 'Royal Elite',
    icon: '♕',
    variations: [
      (text: string) => `♕♡⚘丂${text}⚘♡♕`,
      (text: string) => `꧁▪ ${text} ࿐`,
      (text: string) => `◤◢◣◥${text}◤◢◣◥`,
      (text: string) => `【${text}】`,
      (text: string) => `▄︻̷̿┻̿═━一${text}`,
    ]
  },
  {
    name: 'Butterfly Style',
    icon: '🦋',
    variations: [
      (text: string) => `🦋✨${text}✨🦋`,
      (text: string) => `/ᐠ - ˕ -マ⁩${text}᭄🎀`,
      (text: string) => `♥. * ･ ｡ﾟ${text}. * ･ ｡ﾟ♥`,
      (text: string) => `—(••÷[ ${text} ]÷••)—`,
      (text: string) => `✧･ﾟ: *✧･ﾟ:* ${text} *:･ﾟ✧*:･ﾟ✧`,
    ]
  },
  {
    name: 'Dark Gothic',
    icon: '🖤',
    variations: [
      (text: string) => `𝓑𝓻𝓸𝓴𝓮𝓷 ${text}♡`,
      (text: string) => `꧁ঔৣ☬✞${text}✞☬ঔৣ꧂`,
      (text: string) => `🥀${text}🥀`,
      (text: string) => `×͜×ㅤ${text}ㅤ𝙱𝙾𝚈,ツ`,
      (text: string) => `꧁༒${text}༒꧂`,
    ]
  },
  {
    name: 'Killer Style',
    icon: '💀',
    variations: [
      (text: string) => `Iᴷⁱˡˡ${text}ツ`,
      (text: string) => `🦋⃟‌⃟ ͥ ͣ ͫ ${text} 🖤࿐`,
      (text: string) => `Sa̶d̶${text}∆Y`,
      (text: string) => `☠︎${text}☠︎`,
      (text: string) => `×͜× ${text} ×͜×`,
    ]
  },
  {
    name: 'Fire Demon',
    icon: '🔥',
    variations: [
      (text: string) => `🔥${text}🔥`,
      (text: string) => `ঔৣ☬✞${text}✞☬ঔৣ`,
      (text: string) => `◥◣${text}◢◤`,
      (text: string) => `▀▄▀▄${text}▄▀▄▀`,
      (text: string) => `꧁༺${text}༻꧂`,
    ]
  },
  {
    name: 'VIP Crown',
    icon: '👑',
    variations: [
      (text: string) => `V.I.P ${text}`,
      (text: string) => `◆◇◆${text}◆◇◆`,
      (text: string) => `▰▱▰▱${text}▱▰▱▰`,
      (text: string) => `꧁✧*｡${text}｡*✧꧂`,
      (text: string) => `⫷${text}⫸`,
    ]
  },
  {
    name: 'Neon Glow',
    icon: '⚡',
    variations: [
      (text: string) => `░▒▓█${text}█▓▒░`,
      (text: string) => `◢◤◢◤${text}◥◣◥◣`,
      (text: string) => `▁▂▃▄${text}▄▃▂▁`,
      (text: string) => `꧁⫷${text}⫸꧂`,
      (text: string) => `◥◣◆${text}◆◢◤`,
    ]
  },
  {
    name: 'Stylish Fonts',
    icon: '✨',
    variations: [
      (text: string) => text.replace(/[A-Za-z]/g, (char) => {
        const stylishMap: { [key: string]: string } = {
          'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
          'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ',
          'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ',
          'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
          'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ',
          'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
        };
        return stylishMap[char] || char;
      }),
      (text: string) => text.replace(/[A-Za-z]/g, (char) => {
        const fancyMap: { [key: string]: string } = {
          'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
          'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
          'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏',
          'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥',
          'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯',
          'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'
        };
        return fancyMap[char] || char;
      }),
      (text: string) => text.replace(/[A-Za-z]/g, (char) => {
        const boldMap: { [key: string]: string } = {
          'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
          'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
          'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
          'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝',
          'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧',
          'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭'
        };
        return boldMap[char] || char;
      }),
    ]
  },
  {
    name: 'Symbol Warrior',
    icon: '⚔️',
    variations: [
      (text: string) => `⚔️${text}⚔️`,
      (text: string) => `◊◦○◊${text}◊○◦◊`,
      (text: string) => `▬▬ι═══════ﺤ ${text} ﺤ═══════ι▬▬`,
      (text: string) => `◥◤◢◣${text}◢◣◥◤`,
      (text: string) => `⟐⟐⟐${text}⟐⟐⟐`,
    ]
  }
];

function App() {
  const [nickname, setNickname] = useState('');
  const [selectedPreset, setSelectedPreset] = useState<StylePreset | null>(null);
  const [styledResult, setStyledResult] = useState('');
  const [currentVariation, setCurrentVariation] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateStyledNickname = () => {
    if (!nickname.trim() || !selectedPreset) return;

    setIsGenerating(true);

    setTimeout(() => {
      const variation = selectedPreset.variations[currentVariation];
      const result = variation(nickname.trim());
      setStyledResult(result);
      setCurrentVariation((prev) => (prev + 1) % selectedPreset.variations.length);
      setIsGenerating(false);
    }, 300);
  };

  const copyToClipboard = async () => {
    if (!styledResult) return;

    try {
      await navigator.clipboard.writeText(styledResult);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 p-1 rounded-lg bg-yellow-100 border border-yellow-300" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NickStyler</h1>
              <p className="text-sm text-gray-600">Create stylish nicknames for games and social media</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your nickname
          </label>
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Type your nickname here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            maxLength={50}
          />
        </div>

        {/* Style Presets */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose a style</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {stylePresets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => setSelectedPreset(preset)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${selectedPreset?.name === preset.name
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
              >
                <div className="text-xl mb-1">{preset.icon}</div>
                <div className="text-sm font-medium">{preset.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="mb-6">
          <button
            onClick={generateStyledNickname}
            disabled={!nickname.trim() || !selectedPreset || isGenerating}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            {isGenerating ? 'Generating...' : 'Generate Style'}
          </button>
        </div>

        {/* Result Section */}
        {styledResult && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Your styled nickname</h3>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border">
              <div className="text-gray-900 text-lg sm:text-xl font-medium break-all text-center">
                {styledResult}
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                Click "Generate Style" again for a different variation
              </p>
            </div>
          </div>
        )}

        {/* Examples Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Example styled nicknames</h3>
          <div className="grid gap-3">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">♕♡⚘丂𝓪𝙢ᵽไə⚘♡♕</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">🦋✨𝕊ᴧṁᴘȴе✨🦋</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">—(••÷[ Ꮪɑ𝔪קŀҽ ]÷••)—</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">♥. * ･ ｡ﾟ𝓢𝔞𝗺𝖕ˡέ. * ･ ｡ﾟ♥</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">/ᐠ - ˕ -マ⁩𝑆𝙖₥𝓹𝒍є᭄🎀</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">꧁▪ ＲคᎥนтαʀ ࿐</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">꧁ঔৣ☬✞𝓓𝖔𝖓✞☬ঔৣ꧂</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">🥀𝕱𝕬𝕷𝕷𝕴𝕹𝕲🥀</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">×͜×ㅤ𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈,ツ</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">꧁༒Sa̶d̶B∆Y༒꧂</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">Iᴷⁱˡˡᵧₒᵤツ</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-gray-800">🦋⃟‌⃟ ͥ ͣ ͫ 𝕯𝖆𝖗𝖔𝖓 ฿คrry 🖤࿐</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-600 text-sm">
            Perfect for gaming profiles, social media, and online communities
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;