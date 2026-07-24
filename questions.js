/* =========================================================
   實數地下城 - 自訂題庫 & 冒險地圖設定
   =========================================================
   ★ 你只需要編輯這個檔案，不用碰 index.html ★

   在這裡可以：
   1. 新增 / 修改題目（questions 陣列）
   2. 新增 / 修改地圖關卡（MAP_NODES 陣列）
   3. 調整每關的題型、怪物數量、怪物種類

   ---------------------------------------------------------
   【題目格式】questions 裡每一題長這樣：
     { q: '題目文字', a: 答案, steps: ['步驟1', '步驟2'] }

   答案 a 有三種寫法（遊戲會自動判斷題型）：

   ① 整數答案 → 直接寫數字
     { q: '√81 = ?', a: 9, steps: ['√81 = 9'] }
     { q: '−√25 = ?', a: -5, steps: ['−√25 = −5'] }

   ② 根式答案 → 寫 [係數, 根號內的數]，例如 3√2 寫 [3, 2]
     { q: '化簡 √18', a: [3, 2], steps: ['√18 = √(9×2)', '= 3√2'] }
     注意：√12 的答案是 [2, 3]（即 2√3）；純 √5 寫 [1, 5]

   ③ 比較大小 → 寫 '>' 或 '<' 或 '='
     { q: '比較 √10 與 3 的大小', a: '>', steps: ['(√10)² = 10', '3² = 9', '因為 10 > 9，所以 √10 > 3'] }

   【題目文字可用符號】
     √  平方根（例：√12）        ∛  立方根（例：∛27）
     \frac{分子}{分母}  分數（例：化簡 \frac{6}{√3}）
     ※ 在 JS 字串中寫 \frac 時，反斜線要寫兩次：'\\frac{6}{√3}'

   steps（解題步驟）會在答題後顯示給學生看，可寫多行；
   留空陣列 steps: [] 也可以，但建議寫上，教學效果好很多。
   ========================================================= */

/* ---------------------------------------------------------
   冒險地圖關卡設定（MAP_NODES）
   每個關卡節點的欄位：
     id       關卡代號（不重複即可，進度會以此記錄）
     name     關卡名稱（顯示在地圖與資訊卡上）
     desc     關卡說明（資訊卡上的簡介）
     icon     資訊卡標題前的圖示（一個字或 emoji）
     img      地圖節點圓圈裡顯示的圖：1~7，對應闖關模式第幾層的背景
              （assets/bg/layer1.png ~ layer7.png），省略則用 1
     x, y     在地圖上的位置（百分比 0~100，x 往右、y 往下）
     monsters 怪物數量（打完全部怪物即通關）
     genType  隨機題型：'t1'~'t10'（見下表）。自訂題出完後用它補題；
              省略或填 null 則自訂題循環出
     pool     （可省略）本關出現的怪物種類，預設低階小怪
     boss     （可省略）填 Boss 名稱則關底固定為該 Boss
     questions 自訂題目（會打亂順序出；出完再用 genType 補）

   隨機題型對照表：
     t1 平方根  t2 立方根  t3 化簡根式  t4 同類合併  t5 根式乘法
     t6 化簡混合 t7 負數根式 t8 兩步混合  t9 比較大小  t10 分母有理化

   怪物名稱（pool 可用，完整清單見 index.html 的 ASSETS.monsters）：
     goblin bandit bat weasel pebble firehaunt cultist darkwizard demon
     snowman_a~g boar pig piggy skeleton witch_doctor kid_ghost nasta
     reindeer volt_fox soil_tortoise wind_dragon witch vampire darkknight treant
   Boss 名稱：
     boss_badger boss_dino_rex boss_dino_tri boss_frogger boss_gollux boss_pengu
   --------------------------------------------------------- */

const MAP_NODES = [
  /* ===== 主題關卡（依題型分類，對應課程進度）===== */
  {
    id: 'n1', name: '平方根之道', desc: '最基礎的平方根計算，熱身出發！',
    icon: '√', img: 1, x: 8, y: 82, monsters: 5, genType: 't1',
    questions: []
  },
  {
    id: 'n2', name: '立方根洞穴', desc: '走進洞穴，挑戰立方根 ∛。',
    icon: '∛', img: 2, x: 22, y: 66, monsters: 5, genType: 't2',
    pool: ['bat', 'pebble', 'goblin'],
    questions: []
  },
  {
    id: 'n3', name: '化簡森林', desc: '把根式化簡到最簡，例如 √12 = 2√3。',
    icon: '化', img: 3, x: 14, y: 46, monsters: 5, genType: 't3',
    questions: []
  },
  {
    id: 'n4', name: '合併平原', desc: '同類根式才能相加減，看清係數！',
    icon: '合', img: 4, x: 28, y: 28, monsters: 5, genType: 't4',
    questions: []
  },
  {
    id: 'n5', name: '乘法山谷', desc: '√a × √b = √(ab)，記得再化簡。',
    icon: '×', img: 5, x: 45, y: 22, monsters: 5, genType: 't5',
    questions: []
  },
  {
    id: 'n6', name: '混合沼澤', desc: '先化簡、再合併，兩步都要穩。',
    icon: '混', img: 6, x: 58, y: 36, monsters: 5, genType: 't6',
    questions: []
  },
  {
    id: 'n7', name: '負數雪原', desc: '小心負號！雪人們在雪原上等著你。',
    icon: '−', img: 7, x: 52, y: 56, monsters: 5, genType: 't7',
    pool: ['snowman_a', 'snowman_b', 'snowman_c', 'snowman_d', 'snowman_e', 'snowman_f', 'snowman_g'],
    questions: []
  },
  {
    id: 'n8', name: '兩步峽谷', desc: '乘法與加減混合，考驗綜合功力。',
    icon: '兩', img: 1, x: 64, y: 74, monsters: 5, genType: 't8',
    questions: []
  },
  {
    id: 'n9', name: '比較高原', desc: '兩邊平方再比大小，用 >、<、= 回答。',
    icon: '比', img: 2, x: 80, y: 66, monsters: 5, genType: 't9',
    questions: []
  },
  {
    id: 'n10', name: '有理化聖殿', desc: '分母有理化——本單元的最終試煉。',
    icon: '分', img: 3, x: 88, y: 46, monsters: 5, genType: 't10',
    questions: []
  },

  /* ===== 自訂題關卡（示範）=====
     下面兩關示範怎麼放自己出的題目。
     你可以直接改這裡的題目，或整關複製貼上新增一關。 */
  {
    id: 'n11', name: '試煉・基礎精選', desc: '老師精選基礎題，穩紮穩打。',
    icon: '📜', img: 4, x: 78, y: 26, monsters: 6, genType: 't3',
    questions: [
      { q: '√81 = ?', a: 9, steps: ['81 = 9²', '所以 √81 = 9'] },
      { q: '化簡 √18', a: [3, 2], steps: ['√18 = √(9 × 2)', '= √9 × √2', '= 3√2'] },
      { q: '化簡 √50', a: [5, 2], steps: ['√50 = √(25 × 2)', '= 5√2'] },
      { q: '化簡 3√2 + 4√2', a: [7, 2], steps: ['同類根式合併：(3 + 4)√2', '= 7√2'] },
      { q: '−√25 = ?', a: -5, steps: ['√25 = 5', '所以 −√25 = −5'] },
      { q: '比較 √10 與 3 的大小', a: '>', steps: ['(√10)² = 10', '3² = 9', '因為 10 > 9，所以 √10 > 3'] }
    ]
  },
  {
    id: 'n12', name: '試煉・進階挑戰', desc: '老師精選進階題，關底有 Boss 鎮守！',
    icon: '👑', img: 7, x: 92, y: 12, monsters: 6, genType: 't8',
    pool: ['demon', 'darkknight', 'vampire', 'witch'],
    boss: 'boss_badger',
    questions: [
      { q: '計算 √6 × √24', a: 12, steps: ['√6 × √24 = √(6 × 24) = √144', '= 12'] },
      { q: '化簡 \\frac{6}{√2}', a: [3, 2], steps: ['\\frac{6}{√2} = \\frac{6√2}{2}', '= 3√2'] },
      { q: '計算 2√3 × √6', a: [6, 2], steps: ['2√3 × √6 = 2√18', '= 2 × 3√2 = 6√2'] },
      { q: '化簡 √12 + √27', a: [5, 3], steps: ['√12 = 2√3，√27 = 3√3', '2√3 + 3√3 = 5√3'] },
      { q: '比較 2√3 與 √13 的大小', a: '<', steps: ['(2√3)² = 4 × 3 = 12', '(√13)² = 13', '因為 12 < 13，所以 2√3 < √13'] },
      { q: '化簡 √8 × √2', a: 4, steps: ['√8 × √2 = √16', '= 4'] }
    ]
  }

  /* 【新增關卡範例】整段複製貼上，再改內容即可：
  ,{
    id: 'n13', name: '我的新關卡', desc: '關卡說明寫在這裡。',
    icon: '⭐', img: 5, x: 70, y: 12, monsters: 5, genType: 't5',
    questions: [
      { q: '√36 = ?', a: 6, steps: ['√36 = 6'] },
      { q: '化簡 √27', a: [3, 3], steps: ['√27 = √(9 × 3)', '= 3√3'] }
    ]
  }
  */
];

/* =========================================================
   以下是把題目轉換成遊戲內部格式的函數，一般不需要修改
   ========================================================= */
function toGameQuestion(spec) {
  const steps = spec.steps || [];
  if (typeof spec.a === 'number') {
    return { type: 'int', value: spec.a, text: spec.q, steps: steps };
  }
  if (Array.isArray(spec.a)) {
    const coef = spec.a[0], radicand = spec.a[1];
    return { type: 'rad', coef: coef, radicand: radicand, value: coef * Math.sqrt(radicand), text: spec.q, steps: steps };
  }
  return { type: 'cmp', symbol: String(spec.a), text: spec.q, steps: steps };
}
