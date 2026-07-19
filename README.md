# 實數地下城 (Real Dungeon)

一款以「解數學題」為核心戰鬥機制的 HTML5 冒險遊戲。玩家選擇角色，闖過 7 層地下城，每層末尾有 Boss 鎮守。

## 玩法
- 選角 + 選難度後開始闖關
- 遇到怪物時，正確解答數學題即可攻擊 / 擊敗敵人
- 答對與答錯都會顯示解題步驟，按「繼續」才進入下一題
- 通關後會看到自己選擇的角色在背景中向右行走

## 技術
- 單一 `index.html` + `assets/`，相對路徑、零 CDN，可直接以 GitHub Pages 部署
- Canvas 2D 渲染，Web Audio 音效
- 內建隱藏測試模式（網址加 `?debug=1` 或 `#debug` 啟用）：跳關、秒殺、無敵、補給、看答案

## 本地運行
直接用瀏覽器開啟 `index.html` 即可（或 `python -m http.server` 後訪問）。

## 部署（GitHub Pages）
1. 將本倉庫內容推送至 GitHub
2. 倉庫 Settings → Pages → Source 選 `main` 分支、`/(root)`
3. 稍候片刻即可透過 `https://<使用者>/<倉庫名>/` 遊玩
