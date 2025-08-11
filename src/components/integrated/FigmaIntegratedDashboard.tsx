// src/components/integrated/FigmaIntegratedDashboard.tsx
// 🎨 Figmaデザイン完全準拠版 - 統合ダッシュボード

import React from 'react';
import type { PCConfiguration } from '@/types';
import { PCCaseViewer } from '@/components/3d/PCCaseViewer';

export interface FigmaIntegratedDashboardProps {
  configuration: PCConfiguration;
  className?: string;
}

export const FigmaIntegratedDashboard: React.FC<FigmaIntegratedDashboardProps> = ({
  configuration,
  className = ''
}) => {
  return (
    <div className={`w-full h-full bg-gray-900 text-white flex flex-col overflow-hidden ${className}`}>
      
      {/* メインエリア（レスポンシブ対応） */}
      <div className="flex-1 h-full overflow-hidden">
        
        {/* 3Dビューアエリア（全幅使用） */}
        <div className="w-full h-full relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
          
          {/* 3Dビューア本体（サイズ拡張） */}
          <div className="w-full h-full relative">
            <PCCaseViewer
              configuration={configuration}
              className="w-full h-full"
              showGrid={true}
              enableControls={true}
              cameraPosition={[4, 4, 4]}
              showUIOverlay={false} // 統合ダッシュボードではデフォルトUIを非表示
              showCaseLabel={false} // 3Dモデル内ケースラベルを非表示
            />
          </div>

          {/* パーツ情報オーバーレイ（シンプル化） */}
          <div className="absolute inset-4 pointer-events-none z-10">
            
            {/* PCケース情報 */}
            {configuration.parts.case && (
              <div className="absolute top-4 left-4 bg-gray-700 bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm shadow-lg pointer-events-auto z-20">
                <div className="font-medium">PCケース：ミドルタワー</div>
                <div className="text-gray-300">Fractal Design Core 1000 ¥8,000-</div>
              </div>
            )}

            {/* CPU情報 */}
            {configuration.parts.cpu && (
              <div className="absolute bottom-20 left-4 bg-orange-600 bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm shadow-lg pointer-events-auto z-20">
                <div className="font-medium">CPU：{configuration.parts.cpu.name}</div>
                <div className="text-orange-100">¥{configuration.parts.cpu.price.toLocaleString()}</div>
              </div>
            )}

            {/* GPU情報 */}
            {configuration.parts.gpu && (
              <div className="absolute bottom-4 left-4 bg-blue-600 bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm shadow-lg pointer-events-auto z-20">
                <div className="font-medium">GPU：{configuration.parts.gpu.name}</div>
                <div className="text-blue-100">¥{configuration.parts.gpu.price.toLocaleString()}</div>
              </div>
            )}

            {/* メモリ情報 */}
            {configuration.parts.memory && (
              <div className="absolute top-16 right-4 bg-yellow-600 bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm shadow-lg pointer-events-auto z-20">
                <div className="font-medium">メモリ：{configuration.parts.memory.name}</div>
                <div className="text-yellow-100">¥{configuration.parts.memory.price.toLocaleString()}</div>
              </div>
            )}
          </div>

          {/* 操作ガイド（固定配置・適切なレイヤー） */}
          <div className="fixed bottom-4 right-[350px] bg-white bg-opacity-10 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs border border-white border-opacity-20 z-30 pointer-events-none">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <span>🔄</span>
                <span>回転</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🎡</span>
                <span>ズーム</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>👆</span>
                <span>パン</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaIntegratedDashboard;