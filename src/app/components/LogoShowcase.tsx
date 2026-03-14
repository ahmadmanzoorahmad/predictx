import { PredictXLogo, PredictXIcon } from "./PredictXLogo";

export function LogoShowcase() {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F3BA2F] via-[#2F80ED] to-[#9D4EDD] bg-clip-text text-transparent">
            PredictX Logo System
          </h1>
          <p className="text-gray-400">Modern, professional Web3 sports prediction platform branding</p>
        </div>

        {/* Full Logo Variations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">Full Logo Variations</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Size */}
            <div className="bg-[#16172a] rounded-xl p-8 border border-[#3a3b52]">
              <div className="flex items-center justify-center h-32 mb-4">
                <PredictXLogo size={50} />
              </div>
              <p className="text-sm text-gray-400 text-center">Standard (50px)</p>
            </div>

            {/* Large Size */}
            <div className="bg-[#16172a] rounded-xl p-8 border border-[#3a3b52]">
              <div className="flex items-center justify-center h-32 mb-4">
                <PredictXLogo size={70} />
              </div>
              <p className="text-sm text-gray-400 text-center">Large (70px)</p>
            </div>

            {/* Small Size */}
            <div className="bg-[#16172a] rounded-xl p-8 border border-[#3a3b52]">
              <div className="flex items-center justify-center h-32 mb-4">
                <PredictXLogo size={35} />
              </div>
              <p className="text-sm text-gray-400 text-center">Small (35px)</p>
            </div>

            {/* Tiny Size */}
            <div className="bg-[#16172a] rounded-xl p-8 border border-[#3a3b52]">
              <div className="flex items-center justify-center h-32 mb-4">
                <PredictXLogo size={25} />
              </div>
              <p className="text-sm text-gray-400 text-center">Tiny (25px)</p>
            </div>
          </div>
        </section>

        {/* Icon Only Variations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">Icon Variations (App Icon / Favicon)</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* 512px - App Store */}
            <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52]">
              <div className="flex items-center justify-center mb-4">
                <PredictXIcon size={100} />
              </div>
              <p className="text-sm text-gray-400 text-center">App Store<br />512px</p>
            </div>

            {/* 256px */}
            <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52]">
              <div className="flex items-center justify-center mb-4">
                <PredictXIcon size={80} />
              </div>
              <p className="text-sm text-gray-400 text-center">Large Icon<br />256px</p>
            </div>

            {/* 128px */}
            <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52]">
              <div className="flex items-center justify-center mb-4">
                <PredictXIcon size={60} />
              </div>
              <p className="text-sm text-gray-400 text-center">Medium Icon<br />128px</p>
            </div>

            {/* 64px */}
            <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52]">
              <div className="flex items-center justify-center mb-4">
                <PredictXIcon size={40} />
              </div>
              <p className="text-sm text-gray-400 text-center">Standard Icon<br />64px</p>
            </div>

            {/* 32px - Favicon */}
            <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52]">
              <div className="flex items-center justify-center mb-4">
                <PredictXIcon size={32} />
              </div>
              <p className="text-sm text-gray-400 text-center">Favicon<br />32px</p>
            </div>

            {/* 24px */}
            <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52]">
              <div className="flex items-center justify-center mb-4">
                <PredictXIcon size={24} />
              </div>
              <p className="text-sm text-gray-400 text-center">Small<br />24px</p>
            </div>

            {/* 16px */}
            <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52]">
              <div className="flex items-center justify-center mb-4">
                <PredictXIcon size={16} />
              </div>
              <p className="text-sm text-gray-400 text-center">Tiny<br />16px</p>
            </div>
          </div>
        </section>

        {/* On Different Backgrounds */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">Background Variations</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Dark Background */}
            <div className="bg-black rounded-xl p-8 border border-[#3a3b52]">
              <div className="flex items-center justify-center h-32 mb-4">
                <PredictXLogo size={50} />
              </div>
              <p className="text-sm text-gray-400 text-center">On Black</p>
            </div>

            {/* Navy Background */}
            <div className="bg-[#0a0b14] rounded-xl p-8 border border-[#3a3b52]">
              <div className="flex items-center justify-center h-32 mb-4">
                <PredictXLogo size={50} />
              </div>
              <p className="text-sm text-gray-400 text-center">On Navy (Brand)</p>
            </div>

            {/* Gray Background */}
            <div className="bg-gray-800 rounded-xl p-8 border border-[#3a3b52]">
              <div className="flex items-center justify-center h-32 mb-4">
                <PredictXLogo size={50} />
              </div>
              <p className="text-sm text-gray-400 text-center">On Gray</p>
            </div>
          </div>
        </section>

        {/* Design Specifications */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">Design Specifications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52] space-y-4">
              <h3 className="font-bold text-lg">Color Palette</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#F3BA2F]"></div>
                  <div>
                    <p className="font-mono text-sm">#F3BA2F</p>
                    <p className="text-xs text-gray-400">Neon Yellow</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#2F80ED]"></div>
                  <div>
                    <p className="font-mono text-sm">#2F80ED</p>
                    <p className="text-xs text-gray-400">Electric Blue</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#9D4EDD]"></div>
                  <div>
                    <p className="font-mono text-sm">#9D4EDD</p>
                    <p className="text-xs text-gray-400">Purple</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52] space-y-4">
              <h3 className="font-bold text-lg">Key Features</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BA2F]">●</span>
                  <span>Hexagonal frame representing blockchain structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2F80ED]">●</span>
                  <span>Stylized "X" symbolizing prediction accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9D4EDD]">●</span>
                  <span>Motion lines showing speed and dynamics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F3BA2F]">●</span>
                  <span>Pulsing center point for live data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2F80ED]">●</span>
                  <span>Analytics data points around the perimeter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9D4EDD]">●</span>
                  <span>Gradient colors for Web3 aesthetic</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">Usage Guidelines</h2>
          
          <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52] space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-green-400 mb-2">✓ Do</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Use the full logo in headers and primary placements</li>
                  <li>• Use icon-only version for app icons and favicons</li>
                  <li>• Maintain clear space around the logo</li>
                  <li>• Scale proportionally</li>
                  <li>• Use on dark backgrounds for optimal contrast</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-400 mb-2">✗ Don't</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Alter colors or gradients</li>
                  <li>• Rotate or distort the logo</li>
                  <li>• Add effects like shadows or outlines</li>
                  <li>• Place on busy backgrounds</li>
                  <li>• Use on light backgrounds without adjustment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Export Information */}
        <section className="space-y-4 pb-12">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">Export Information</h2>
          
          <div className="bg-[#16172a] rounded-xl p-6 border border-[#3a3b52]">
            <div className="space-y-2 text-sm text-gray-300">
              <p>✓ <strong>Format:</strong> SVG (Scalable Vector Graphics)</p>
              <p>✓ <strong>Background:</strong> Transparent</p>
              <p>✓ <strong>Resolution:</strong> Infinite (vector-based)</p>
              <p>✓ <strong>Animation:</strong> CSS/SVG animations included</p>
              <p>✓ <strong>Responsive:</strong> Scales perfectly at any size</p>
              <p>✓ <strong>Component:</strong> React component with TypeScript</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
