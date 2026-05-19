import { useState, useMemo } from "react";

const CODES = [
  { id: 1, category: "البيع الحقيقي", categoryEn: "True Selling", text: "الأشياء البسيطة لا تُباع — الإحساس الذي بداخلها هو الذي يُباع." },
  { id: 2, category: "الصدق الصوتي", categoryEn: "Sonic Honesty", text: "الصوت الصادق الواحد يخترق الزمن والمسافة والنسيان. الضجيج لا يخترق شيئاً." },
  { id: 3, category: "الذاكرة البصرية", categoryEn: "Visual Memory", text: "الذاكرة لا تحفظ الحدث — تحفظ الإحساس الذي لم يُقل." },
  { id: 4, category: "الأصالة", categoryEn: "Authenticity", text: "الذين مجانين لا يشبهون المجانين — مجانين لا يشبهون إلا أنفسهم." },
  { id: 5, category: "قراءة الناس", categoryEn: "Reading People", text: "بين المنطوق والمقصود — يظهر ما كان يجب أن لا يظهر. القيم تجمع، والمصالح تفرق." },
  { id: 6, category: "قوة الكلمة", categoryEn: "Power of Word", text: "الكلمة لها حياة وتردد كوني — تُكتب مرة وتُسمع إلى الأبد." },
  { id: 7, category: "المنهج", categoryEn: "Methodology", text: "السؤال الذي يفتح الشيفرة: ما الذي كان يشعر به الناس — وليس ما كانوا يفعلونه؟" },
  { id: 8, category: "الطفولة", categoryEn: "Childhood", text: "عندما تهب ذكريات الطفولة تأتي بما لا يُوصف، بما لا تتحكم فيه." },
  { id: 9, category: "لغة الوجود", categoryEn: "Language of Being", text: "الحرف الواحد يحوّل المشاعر إلى فعل. الراء في الورد هي الرفق. القاف في القلب هي القرب. اللغة لا تصف الحقيقة — اللغة مبنية منها." },
  { id: 10, category: "لغة الوجود", categoryEn: "Language of Being", text: "الود لا يُطلب — يُشعّ. المحبة تجذب محبة مش بالكلام، بالحضور." },
  { id: 11, category: "المبدع والنظام", categoryEn: "Creator & System", text: "روح ٢٠٢٠ + وضوح ٢٠٢٦ = نسخة لم تظهر بعد." },
  { id: 12, category: "المبدع والنظام", categoryEn: "Creator & System", text: "هل الـ system خدم الروح، أو أثقلها؟ — هذا السؤال نفسه هو بداية الإجابة." },
  { id: 13, category: "الإنسان كنص", categoryEn: "Human as Text", text: "التفاصيل الدقيقة هي المراقبة البشرية العميقة — مش الكاميرا تشوف، أنت تشوف أولاً." },
  { id: 14, category: "الإنسان كنص", categoryEn: "Human as Text", text: "المبدع الحقيقي يضحك ويفكر بنفس العمق. التوازن بين حمو وابن حزم مش تناقض — هذا اتساع." },
  { id: 15, category: "الإنسان كنص", categoryEn: "Human as Text", text: "كل شخصية بسيطة تحمل نمطاً إنسانياً كاملاً. حمو مش شخص — حمو حالة." },
  { id: 16, category: "الإعلان الصادق", categoryEn: "Honest Advertising", text: "صف الجريمة بالتفصيل — ثم قدّم الحل. الناس لا تشتري المنتج، تشتري الخلاص من مشكلة عاشوها." },
  { id: 17, category: "الإعلان الصادق", categoryEn: "Honest Advertising", text: "الصدق هو الـ creative direction الأول. مش copywriter يكتب — شاهد عيان يروي." },
  { id: 18, category: "الإعلان الصادق", categoryEn: "Honest Advertising", text: "التهديد المحبب: أذكى أنواع الإقناع — يضحكك على نفسك وأنت تشتري." },
  { id: 19, category: "نظام الحالة", categoryEn: "State System", text: "العقل لا يبدع في الفراغ الكامل، ولا في التركيز الكامل — يبدع في المنطقة البينية." },
  { id: 20, category: "نظام الحالة", categoryEn: "State System", text: "انتظار في المقدمة + عمل يشتغل في الخلفية = الحالة الإبداعية الحقيقية." },
  { id: 21, category: "نظام الحالة", categoryEn: "State System", text: "أنت لا تحاول شرح الفكرة — بل تلتقطها قبل أن تُشوَّه بالكلمات." },
  { id: 22, category: "نظام الحالة", categoryEn: "State System", text: "المعنى يولد كاملاً — واللغة تأتي متأخرة. الفكرة وُجدت قبل أن تُكتب." },
  { id: 23, category: "معادلات الأثر", categoryEn: "Impact Equations", text: "الفجوة الزمنية = الاهتمام × الحالة × الزمن × الوسيط × الحداثة." },
  { id: 24, category: "معادلات الأثر", categoryEn: "Impact Equations", text: "المعادلة ضرب لا جمع — أي عنصر بصفر يُصفّر الكل." },
  { id: 25, category: "معادلات الأثر", categoryEn: "Impact Equations", text: "سلسلة البناء: القيمة/الجوهر → الندرة/التميّز → الحالة الشعورية → الهوية الثقافية → طريقة الأداء → التفاصيل الصوتية → التفاصيل المرئية." },
  { id: 26, category: "معادلات الأثر", categoryEn: "Impact Equations", text: "السلسلة تعمل للصوت وحده، وللصورة وحدها، وللكلمة وحدها — لأنها بذرة تصلح لكل ما هو صادق وطبيعي بالفطرة." },
  { id: 27, category: "معادلات الأثر", categoryEn: "Impact Equations", text: "من الداخل للخارج — من الروح للجلد. كل حلقة تبني على اللي قبلها. كسر أي حلقة يوقف الوصول." },
  { id: 28, category: "بروتوكولات البناء", categoryEn: "Build Protocols", text: "حين نبني بصدق وبفطرة إبداعية تتلاعب بنا الخوارزمية — فكان يجب أن نغرز فيها فطرتنا وطبيعتنا حتى نمضي قدماً." },
  { id: 29, category: "بروتوكولات البناء", categoryEn: "Build Protocols", text: "الخطوة الأولى ليست افعل — الخطوة الأولى افهم. هذا أدب مع الشيء قبل لمسه." },
  { id: 30, category: "بروتوكولات البناء", categoryEn: "Build Protocols", text: "كل جلسة تنتهي بما تعلمته — لا بما بنيته فقط." },
  { id: 31, category: "بروتوكولات البناء", categoryEn: "Build Protocols", text: "النظام يحميك من الخطأ ويحمي المشروع من الفوضى. التزامك بالنظام ليس قيداً — هو ما يجعل عملك ذا قيمة." },
  { id: 32, category: "قانون الصعلوك المحترف", categoryEn: "The Pro Maverick", text: "في زمن الوفرة الاصطناعية، الندرة صارت في أربعة: الذوق، الحكم، الصدق، والقدرة على تحويل الفوضى إلى أثر." },
  { id: 33, category: "قانون الصعلوك المحترف", categoryEn: "The Pro Maverick", text: "الذكاء الاصطناعي يصنع احتمالات — أنت تختار الاتجاه. الفارق لم يعد من يضغط الزر، بل من يعرف ماذا يطلب وماذا يرفض ومتى يتوقف." },
  { id: 34, category: "قانون الصعلوك المحترف", categoryEn: "The Pro Maverick", text: "لا تنتج أكثر — احذف أكثر. القوة ليست في كثرة المخرجات بل في دقة الضربة." },
  { id: 35, category: "قانون الصعلوك المحترف", categoryEn: "The Pro Maverick", text: "من يبيع يده فقط ستستبدله الآلة. من يبيع عقله ستبتلعه المنصة. من يملك نظرته سيشتري الجميع وقته." },
  { id: 36, category: "قانون الصعلوك المحترف", categoryEn: "The Pro Maverick", text: "احمِ إنسانيتك لأنها أصل الندرة. التعب، الحدس، الذكرى، التناقض، الجرح، الذوق — هذه المادة الخام التي لا تملكها الآلة أصلاً." },
  { id: 37, category: "خريطة الإنسان العصري", categoryEn: "Modern Human Map", text: "الانطفاء اللامع — ناجح ظاهرياً والروح مطفية. الجوع الممتلئ — ممتلئ لكن غير شبعان. الهلع الصامت — كل شيء طبيعي ظاهرياً لكن داخله حالة إنذار." },
  { id: 38, category: "خريطة الإنسان العصري", categoryEn: "Modern Human Map", text: "وحدة الضجيج — ناس وإشعارات وتفاعل… وعزلة داخلية. الغياب الحاضر — جسمه هنا وهو غير موجود. الهوية المعلقة — يعرف من هو لكن لا يعرف كيف يكونه." },
  { id: 39, category: "خريطة الإنسان العصري", categoryEn: "Modern Human Map", text: "رحلة المبدع السبع: الفرطنة → التكدس → الاكتشاف المتأخر → الوعي المؤلم → التحول → الضرورة الخلاقة → الإنجاز. عمل يحمل ندوبه لا فلاتره." },
  { id: 40, category: "خريطة الإنسان العصري", categoryEn: "Modern Human Map", text: "من الداخل للخارج، من بذرة صادقة إلى حقيقة جامعة واقعية." },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body { background: #0a0806; }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: #0a0806; }
  ::-webkit-scrollbar-thumb { background: #c9a96e30; border-radius: 2px; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse-gold {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  @keyframes grain {
    0%, 100% { transform: translate(0,0); }
    10% { transform: translate(-1%,-2%); }
    20% { transform: translate(2%,1%); }
    30% { transform: translate(-2%,2%); }
    40% { transform: translate(1%,-1%); }
    50% { transform: translate(-1%,2%); }
    60% { transform: translate(2%,-2%); }
    70% { transform: translate(-2%,1%); }
    80% { transform: translate(1%,2%); }
    90% { transform: translate(-1%,-1%); }
  }

  .vcd-root {
    background: #0a0806;
    min-height: 100vh;
    font-family: 'Amiri', serif;
    direction: rtl;
    color: #ede5d5;
    position: relative;
    overflow-x: hidden;
  }

  .vcd-root::before {
    content: '';
    position: fixed;
    inset: -50%;
    width: 200%;
    height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.35;
    pointer-events: none;
    z-index: 0;
    animation: grain 8s steps(10) infinite;
  }

  .vcd-header {
    text-align: center;
    padding: 72px 24px 56px;
    position: relative;
    z-index: 1;
  }

  .vcd-header::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #c9a96e20, #c9a96e50, #c9a96e20, transparent);
  }

  .vcd-eyebrow {
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    letter-spacing: 5px;
    color: #c9a96e;
    text-transform: uppercase;
    direction: ltr;
    margin-bottom: 28px;
    animation: pulse-gold 4s ease infinite;
  }

  .vcd-title {
    font-size: clamp(36px, 7vw, 72px);
    font-weight: 700;
    color: #f5ede0;
    line-height: 1.25;
    letter-spacing: 0.02em;
    margin-bottom: 20px;
  }

  .vcd-divider {
    width: 48px;
    height: 1px;
    background: linear-gradient(to right, transparent, #c9a96e, transparent);
    margin: 20px auto;
  }

  .vcd-meta {
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    letter-spacing: 3px;
    color: #5a5045;
    direction: ltr;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .vcd-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    letter-spacing: 4px;
    color: #c9a96e50;
    direction: ltr;
    text-transform: uppercase;
    text-decoration: none;
  }

  .vcd-controls {
    position: relative;
    z-index: 1;
    padding: 40px 24px 0;
    max-width: 1280px;
    margin: 0 auto;
  }

  .vcd-search {
    position: relative;
    margin-bottom: 28px;
  }

  .vcd-search-input {
    width: 100%;
    background: #110e0b;
    border: 1px solid #2a2318;
    border-radius: 2px;
    color: #ede5d5;
    font-family: 'Amiri', serif;
    font-size: 17px;
    padding: 14px 20px;
    direction: rtl;
    transition: border-color 0.25s;
    outline: none;
  }

  .vcd-search-input:focus {
    border-color: #c9a96e40;
    background: #150f0c;
  }

  .vcd-search-input::placeholder { color: #3a3028; }

  .vcd-filters {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  .vcd-filter-btn {
    background: transparent;
    border: 1px solid #2a2318;
    color: #6a5d4e;
    padding: 7px 16px;
    border-radius: 1px;
    cursor: pointer;
    font-family: 'Amiri', serif;
    font-size: 14px;
    transition: all 0.2s;
    white-space: nowrap;
    line-height: 1.2;
  }

  .vcd-filter-btn:hover {
    border-color: #c9a96e50;
    color: #c9a96e;
    background: #c9a96e08;
  }

  .vcd-filter-btn.active {
    background: #c9a96e12;
    border-color: #c9a96e80;
    color: #c9a96e;
  }

  .vcd-count {
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    letter-spacing: 3px;
    color: #3a3028;
    direction: ltr;
    text-transform: uppercase;
    margin-bottom: 36px;
  }

  .vcd-grid {
    position: relative;
    z-index: 1;
    padding: 0 24px 96px;
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  @media (max-width: 960px) {
    .vcd-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 600px) {
    .vcd-grid { grid-template-columns: 1fr; }
  }

  .vcd-card {
    background: #110e0b;
    border: 1px solid #221c16;
    border-radius: 1px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
    animation: fadeUp 0.5s ease both;
  }

  .vcd-card::before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 0;
    height: 100%;
    background: #c9a96e;
    transition: width 0.3s ease;
    opacity: 0.6;
  }

  .vcd-card:hover {
    transform: translateY(-3px);
    border-color: #c9a96e30;
    background: #16100d;
  }

  .vcd-card:hover::before {
    width: 2px;
  }

  .vcd-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 18px;
  }

  .vcd-card-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    letter-spacing: 3px;
    color: #3a3028;
    direction: ltr;
    line-height: 1;
    padding-top: 4px;
  }

  .vcd-card-tag {
    background: #c9a96e0a;
    border: 1px solid #c9a96e25;
    color: #c9a96e90;
    font-size: 12px;
    font-family: 'Amiri', serif;
    padding: 4px 12px;
    border-radius: 1px;
    line-height: 1.4;
    transition: color 0.2s, border-color 0.2s;
    white-space: nowrap;
  }

  .vcd-card:hover .vcd-card-tag {
    color: #c9a96e;
    border-color: #c9a96e40;
  }

  .vcd-card-text {
    font-size: 17px;
    line-height: 2;
    color: #ccc0ad;
    font-weight: 400;
    transition: color 0.3s;
  }

  .vcd-card:hover .vcd-card-text {
    color: #ddd4c0;
  }

  .vcd-card-line {
    width: 32px;
    height: 1px;
    background: linear-gradient(to left, #c9a96e50, transparent);
    margin-top: 18px;
    transition: width 0.3s ease;
  }

  .vcd-card:hover .vcd-card-line {
    width: 56px;
  }

  .vcd-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 96px;
    color: #3a3028;
    font-size: 20px;
  }

  .vcd-footer {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 40px 24px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    letter-spacing: 4px;
    color: #2a2018;
    text-transform: uppercase;
    direction: ltr;
    border-top: 1px solid #1a1410;
  }

  .vcd-footer span {
    color: #c9a96e20;
  }
`;

export default function VisualCodesDictionary() {
  const [active, setActive] = useState("الكل");
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    const seen = new Set();
    const cats = [];
    CODES.forEach(c => {
      if (!seen.has(c.category)) {
        seen.add(c.category);
        cats.push({ ar: c.category, en: c.categoryEn });
      }
    });
    return cats;
  }, []);

  const filtered = useMemo(() => {
    return CODES.filter(c => {
      const matchCat = active === "الكل" || c.category === active;
      const matchSearch = !search.trim() ||
        c.text.includes(search) ||
        c.category.includes(search);
      return matchCat && matchSearch;
    });
  }, [active, search]);

  const catCount = (cat) => CODES.filter(c => c.category === cat).length;

  return (
    <div className="vcd-root">
      <style>{CSS}</style>

      {/* ── HEADER ── */}
      <header className="vcd-header">
        <div className="vcd-eyebrow">Visual Codes Dictionary — nabil88.art</div>
        <h1 className="vcd-title">قاموس الشيفرات البصرية</h1>
        <div className="vcd-divider" />
        <p className="vcd-meta">٤٠ شيفرة · ١٣ تصنيفاً</p>
        <a href="https://nabil88.art" className="vcd-brand" target="_blank" rel="noopener noreferrer">
          nabil88.art
        </a>
      </header>

      {/* ── CONTROLS ── */}
      <div className="vcd-controls">
        <div className="vcd-search">
          <input
            className="vcd-search-input"
            placeholder="ابحث في الشيفرات..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="vcd-filters">
          <button
            className={`vcd-filter-btn ${active === "الكل" ? "active" : ""}`}
            onClick={() => setActive("الكل")}
          >
            الكل — {CODES.length}
          </button>
          {categories.map(cat => (
            <button
              key={cat.ar}
              className={`vcd-filter-btn ${active === cat.ar ? "active" : ""}`}
              onClick={() => setActive(cat.ar)}
            >
              {cat.ar} — {catCount(cat.ar)}
            </button>
          ))}
        </div>

        <div className="vcd-count">
          {filtered.length} / {CODES.length} codes visible
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="vcd-grid">
        {filtered.length === 0 ? (
          <div className="vcd-empty">لا نتائج</div>
        ) : (
          filtered.map((code, i) => (
            <div
              key={code.id}
              className="vcd-card"
              style={{ animationDelay: `${i * 0.035}s` }}
            >
              <div className="vcd-card-header">
                <span className="vcd-card-num">
                  {String(code.id).padStart(2, "0")}
                </span>
                <span className="vcd-card-tag">{code.category}</span>
              </div>
              <p className="vcd-card-text">{code.text}</p>
              <div className="vcd-card-line" />
            </div>
          ))
        )}
      </div>

      {/* ── FOOTER ── */}
      <footer className="vcd-footer">
        Visual Codes Dictionary <span>·</span> nabil88.art <span>·</span> Open Source
      </footer>
    </div>
  );
}
