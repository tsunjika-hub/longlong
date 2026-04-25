import { useEffect, useMemo, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
// import { supabase } from "./lib/supabase";

export default function ClassicalPieceQuiz() {
const results = {
  jiahao_long: {
    title: "你是 嘉豪龙",
    rankTitle: "嘉豪龙",
    composer: "帅气至极型",
    era: "无懈可击系",
    emoji: "😎",
    avatar: "/avatars/jiahaolong.png",
    color: "",
    tags: ["帅气", "无懈可击", "人见人爱", "花间花开"],
    description:
      "你是嘉豪龙，帅气至极，无懈可击，人见人爱，花见花开，电饭煲见了都会自动保温。你的存在本身就是一种答案，虽然问题可能根本没问你。",
    vibe: "像穿着黑色连帽衫站在宇宙门口的龙：不解释，但很强。",
    recommendation: "适合：登场、压轴、沉默装酷、让所有不合理的选项突然合理。",
  },

  naigou: {
    title: "你是 奶狗",
    rankTitle: "奶狗",
    composer: "温柔黏人型",
    era: "听话乖巧系",
    emoji: "🐶",
    avatar: "/avatars/naigou.jpg",
    color: "",
    tags: ["温柔", "体贴", "爱撒娇", "听话乖巧"],
    description:
      "你是奶狗，温柔体贴，爱撒娇，爱粘人，听话乖巧，甚至连鈍角都愿意陪它散步。你不一定懂题，但你很懂陪伴。",
    vibe: "像一只笑得很开心的黄色奶狗：问题乱不乱不重要，开心就会摇尾巴。",
    recommendation: "适合：陪朋友聊天、撒娇、装乖、在混乱世界里提供情绪价值。",
  },

  huluxiao_long: {
    title: "你是 赫鲁晓龙",
    rankTitle: "赫鲁晓龙",
    composer: "务实狂躁型",
    era: "修正主义系",
    emoji: "🌽",
    avatar: "/avatars/heluxiaolong.jpg",
    color: "",
    tags: ["务实", "狂躁", "反复无常", "盲目自信"],
    description:
      "你是赫鲁晓龙，务实与狂躁并存，修正主义与反复无常齐飞。你有时像玉米一样朴素，有时像电饭煲一样突然启动。",
    vibe: "像一根正在大笑的玉米龙：它不知道自己为什么笑，但它非常确信自己是对的。",
    recommendation: "适合：突然宣布计划、突然推翻计划、然后再次充满自信。",
  },

  feilong: {
    title: "你是 飞龙",
    rankTitle: "飞龙",
    composer: "天衣飘带型",
    era: "西域浪漫系",
    emoji: "🎀",
    avatar: "/avatars/feilong.png",
    color: "",
    tags: ["飘逸", "浪漫", "神圣感", "U字形舞动"],
    description:
      "你是飞龙。她们不直接飞翔，常以天衣飘带翻舞、云气缭绕的造型出现。你造型精美，身姿呈U字形舞动，既有宗教神圣感，又极具浪漫色彩。",
    vibe: "像一条在空气里写草书的龙：不飞，但所有人都觉得你刚刚飞过。",
    recommendation: "适合：艺术登场、优雅转身、用飘带把问题缠成谜语。",
  },

  shishen_long: {
    title: "你是 狮身奶面龙",
    rankTitle: "狮身奶面龙",
    composer: "哈吉米型",
    era: "古代谜语系",
    emoji: "🗿",
    avatar: "/avatars/shishennaimianlong.png",
    color: "",
    tags: ["哈吉米", "神秘", "稳定", "不可解释"],
    description:
      "你是狮身奶面龙，评价为：哈吉米。你不需要解释，因为解释会破坏哈吉米本身的完整性。",
    vibe: "像一只表情平静的古代奶面像：它什么都没说，但大家已经开始害怕自己听懂了。",
    recommendation: "适合：沉默、凝视、出现在不该出现的地方、让别人自己脑补。",
  },

  xielong: {
    title: "你是 蟹龙",
    rankTitle: "蟹龙",
    composer: "大寒满黄型",
    era: "甲壳美食系",
    emoji: "🦀",
    avatar: "/avatars/xielong.jpg",
    color: "",
    tags: ["大寒之物", "满黄", "防御", "挺好吃"],
    description:
      "你是蟹龙，大寒之物，但是满黄，挺好吃。你外表冷静，内心浓郁，遇到问题先举钳子，再考虑要不要回答。",
    vibe: "像一只横着走进考场的蟹龙：它不是不会走直线，只是不屑。",
    recommendation: "适合：保护自己、慢慢靠近、横向解决问题、在关键时刻满黄登场。",
  },

  meiyu_long: {
    title: "你是 美龙鱼",
    rankTitle: "美龙鱼",
    composer: "无法上吊之物",
    era: "水中漂浮系",
    emoji: "🐟",
    avatar: "/avatars/meilongyu.png",
    color: "",
    tags: ["无法上吊", "漂浮", "轻盈", "无法定义"],
    description:
      "你是美龙鱼，无法上吊之物。你不属于陆地，也不属于逻辑，你只是在水里优雅地游过，然后把问题泡软。",
    vibe: "像一条在蓝色水里微笑的龙鱼：它没有脖子，所以世界失去了一个选项。",
    recommendation: "适合：逃离尴尬、漂浮人生、把沉重问题变成水母。",
  },

    yenai_long: {
    title: "你是 椰奶龙",
    emoji: "🥥",
    avatar: "/avatars/yenailong.png",
    tags: ["白", "流动", "奇怪"],
    description:
      "你是椰奶龙。你站在海里，但海在你身上流出来。你不是在流汗，是在变成饮品。世界在你腋下完成循环。",
    vibe:
      "像一杯站起来的椰奶：不知道是你在流，还是世界在被你倒。",
    recommendation:
      "建议：不要解释，解释会变稀。",
  },
};

  const questions = [
      {
        id: 1,
        text: "你多長時間沒洗澡了",
        options: [
          { text: "25個小時", weights: { jiahao_long: 2, naigou: 1 } },
          { text: "電飯煲", weights: { huluxiao_long: 2, yenai_long: 1 } },
          { text: "比基尼好看不好看", weights: { feilong: 2, meiyu_long: 1 } },
          { text: "鈍角", weights: { xielong: 2, shishen_long: 1 } },
        ],
      },

      {
        id: 2,
        text: "張家口有沒有外星人",
        options: [
          { text: "抽烟有害健康", weights: { jiahao_long: 2, yenai_long: 1 } },
          { text: "有點害怕", weights: { naigou: 2 } },
          { text: "有", weights: { huluxiao_long: 2 } },
          { text: "鈍角", weights: { shishen_long: 2 } },
        ],
      },

      {
        id: 3,
        text: "意大利麵應該拌",
        options: [
          { text: "42號混凝土", weights: { shishen_long: 2 } },
          { text: "93號汽油", weights: { jiahao_long: 2 } },
          { text: "利多卡因", weights: { huluxiao_long: 2, yenai_long: 1 } },
          { text: "鈍角", weights: { xielong: 2 } },
        ],
      },

      {
        id: 4,
        text: "鈍角",
        options: [
          { text: "鈍角", weights: { xielong: 2 } },
          { text: "鈍角", weights: { shishen_long: 2 } },
          { text: "鈍角", weights: { huluxiao_long: 2, yenai_long: 1 } },
          { text: "鈍角", weights: { jiahao_long: 2 } },
        ],
      },

      {
        id: 5,
        text: "日全食多久出現一次",
        options: [
          { text: "18個月", weights: { meiyu_long: 2 } },
          { text: "看心情", weights: { naigou: 2, yenai_long: 1 } },
          { text: "不能吃", weights: { xielong: 2 } },
          { text: "鈍角", weights: { shishen_long: 2 } },
        ],
      },

      {
        id: 6,
        text: "第一次中東戰爭是",
        options: [
          { text: "第二次中東戰爭", weights: { huluxiao_long: 2 } },
          { text: "獨立戰爭", weights: { jiahao_long: 2 } },
          { text: "收穫日", weights: { naigou: 2 } },
          { text: "鈍角", weights: { feilong: 2, meiyu_long: 1 } },
        ],
      },

      {
        id: 7,
        text: "吃飯的時候應該上厠所嗎",
        options: [
          { text: "應該睡覺", weights: { naigou: 2 } },
          { text: "太累太忙", weights: { meiyu_long: 2 } },
          { text: "應該", weights: { huluxiao_long: 2, yenai_long: 1 } },
          { text: "鈍角", weights: { xielong: 2, shishen_long: 1 } },
        ],
      },

      {
        id: 8,
        text: "月亮把鞋子煮成了星期三，玻璃鱼在电梯里背诵橘子的影子。桌子突然学会了下雨，于是所有的铅笔都开始假装自己是远方的火车。蓝色的声音从门缝里走出来，问一只没有名字的杯子：为什么云朵要穿袜子？",
        options: [
          { text: "因為星期三的玻璃魚正在煮鞋子", weights: { meiyu_long: 2 } },
          { text: "因為杯子把昨天折成了三角形", weights: { shishen_long: 2 } },
          { text: "因為藍色的聲音忘記帶電梯", weights: { jiahao_long: 2, yenai_long: 1 } },
          { text: "鈍角", weights: { xielong: 2 } },
        ],
      },

      {
        id: 9,
        text: "為什麼冰箱要在彩虹裡學會打嗝？",
        options: [
          { text: "因為鉛筆正在給月亮剪頭髮", weights: { feilong: 2 } },
          { text: "因為昨天的椅子偷偷變成了番茄", weights: { huluxiao_long: 2 } },
          { text: "因為電風扇把海浪裝進口袋", weights: { naigou: 2, yenai_long: 1 } },
          { text: "鈍角", weights: { shishen_long: 2 } },
        ],
      },

      {
        id: 10,
        text: "為什麼紅色的雨傘要和一碗星星吵架？",
        options: [
          { text: "因為樓梯正在練習變成星期五", weights: { jiahao_long: 2 } },
          { text: "因為襪子把太陽寄給了沒有門的房間", weights: { naigou: 2 } },
          { text: "因為橘子在電話裡唱了一首透明的歌", weights: { meiyu_long: 2, yenai_long: 1 } },
          { text: "鈍角", weights: { feilong: 2 } },
        ],
      },
    ];

  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({});
  const [answerHistory, setAnswerHistory] = useState([]);
  const [finished, setFinished] = useState(false);
  const [showRankingPage, setShowRankingPage] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [rankingData, setRankingData] = useState([]);
  const [rankingLoading, setRankingLoading] = useState(false);
  const hasSubmittedRef = useRef(false);
  const [totalTests, setTotalTests] = useState(0);  

  const progress = ((step + 1) / questions.length) * 100;

  const handleAnswer = (weights) => {
  const next = { ...scores };

  Object.entries(weights).forEach(([key, value]) => {
    next[key] = (next[key] || 0) + value;
  });

  setScores(next);
  setAnswerHistory((prev) => [...prev, weights]);

  if (step + 1 >= questions.length) {
    setFinished(true);
  } else {
    setStep(step + 1);
  }
};

const goBackQuestion = () => {
  if (step === 0 || answerHistory.length === 0) return;

  const lastWeights = answerHistory[answerHistory.length - 1];
  const nextScores = { ...scores };

  Object.entries(lastWeights).forEach(([key, value]) => {
    nextScores[key] = (nextScores[key] || 0) - value;

    if (nextScores[key] <= 0) {
      delete nextScores[key];
    }
  });

  setScores(nextScores);
  setAnswerHistory((prev) => prev.slice(0, -1));
  setStep((prev) => prev - 1);
};

  const resultKey = useMemo(() => {
    const entries = Object.entries(scores);
    if (!entries.length) return "naigou";
    return entries.sort((a, b) => b[1] - a[1])[0][0];
  }, [scores]);

  const result = results[resultKey];
  const shareUrl = "https://music-vert-two.vercel.app/";

  const shareCardRef = useRef(null);

  const primaryButtonClass =
  "rounded-3xl border border-amber-300 bg-amber-100 px-6 py-4 text-lg font-semibold text-amber-900 shadow-md transition hover:bg-amber-200 hover:scale-[1.01] active:scale-[0.99]";
  const secondaryButtonClass =
  "rounded-3xl border border-amber-200 bg-[#fdf6e3] px-6 py-4 text-lg font-semibold text-amber-900 shadow-sm transition hover:bg-amber-100 active:scale-[0.99]";

  const smallButtonClass =
  "rounded-2xl border border-amber-200 bg-[#fdf6e3] px-5 py-4 font-semibold text-amber-900 shadow-sm transition hover:bg-amber-100 active:scale-[0.99]";
  // const mainBg = finished
  // ? `bg-gradient-to-br ${result?.color || "from-yellow-300 via-amber-300 to-orange-300"}`
  // : "bg-gradient-to-br from-yellow-300 via-amber-200 to-lime-200";

  const restart = () => {
  setStarted(false);
  setStep(0);
  setScores({});
  setAnswerHistory([]);
  setFinished(false);
  hasSubmittedRef.current = false;
};

 const saveResultImage = async () => {
  if (!shareCardRef.current) return;

  try {
    const dataUrl = await toPng(shareCardRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = `${result.title}-测试结果.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("保存图片失败：", error);
    alert("保存图片失败，请重试");
  }
};
useEffect(() => {
  if (!finished) return;
  if (hasSubmittedRef.current) return;

  const submitResult = async () => {
    const { error } = await supabase.from("quiz_results").insert([
      { result_key: resultKey }
    ]);

    if (error) {
      console.error("提交结果失败：", error);
      return;
    }

    hasSubmittedRef.current = true;
  };

  submitResult();
}, [finished, resultKey]);

const fetchRankingData = async () => {
  setRankingLoading(true);

  const { data, error } = await supabase.rpc("get_quiz_ranking");

  if (error) {
    console.error("读取排行榜失败：", error);
    setRankingLoading(false);
    return;
  }

  const countsMap = new Map(
    (data || []).map((item) => [item.result_key, Number(item.total || 0)])
  );

  const total = Array.from(countsMap.values()).reduce((sum, count) => sum + count, 0);
  setTotalTests(total);

  const allResults = Object.entries(results).map(([key, value]) => {
    const count = countsMap.get(key) || 0;
    const percent = total > 0 ? Number(((count / total) * 100).toFixed(1)) : 0;

    return {
      key,
      code: key.toUpperCase(),
      name: value.title.replace("你是", ""),
      count,
      percent,
    };
  });

  allResults.sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.key.localeCompare(b.key);
  });

  const ranked = allResults.map((item, index) => ({
    ...item,
    rank: index + 1,
  }));

  setRankingData(ranked);
  setRankingLoading(false);
};

const openRankingPage = async () => {
  await fetchRankingData();
  setShowRankingPage(true);
};

if (showRankingPage) {
  return (
    <RankingPage
      rankingData={rankingData}
      results={results}
      loading={rankingLoading}
      totalTests={totalTests}
      onBack={() => setShowRankingPage(false)}
    />
  );
}
  
function RankingPage({ rankingData, results, onBack, loading, totalTests }) {
  return (
    <div className="min-h-screen bg-[#f0f2ee] px-6 py-10 text-zinc-800">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold md:text-5xl">古典乐结果排行榜</h1>

        <p className="mt-4 text-lg leading-8 text-zinc-600">
          这里展示不同测试结果的人气分布。当前已接入真实统计。
        </p>

        <div className="mt-6 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-lg font-semibold text-emerald-700">
          已有 {totalTests.toLocaleString()} 人完成测试
        </div>
        {loading && (
          <div className="mt-6 rounded-2xl bg-white p-4 text-lg text-zinc-500 shadow-sm">
            排行榜加载中...
          </div>
        )}

        {!loading && (
          <div className="mt-8 space-y-4">
            {rankingData.map((item) => {
              const result = results[item.key];

              return (
                <div
                  key={item.key}
                  className="rounded-[1.75rem] border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <div className="grid grid-cols-[56px_64px_1fr_auto] items-center gap-4">
                    <div className="text-4xl font-bold text-amber-500">{item.rank}</div>

                    <img
                      src={result.avatar}
                      alt={result.composer}
                      className="h-14 w-14 rounded-xl border border-zinc-200 object-cover"
                      style={{ imageRendering: "pixelated" }}
                    />

                    <div>
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-3xl font-extrabold text-zinc-900">
                          {result.rankTitle}
                        </span>
                        <span className="text-base font-medium text-zinc-500">
                          {result.composer}
                        </span>
                      </div>

                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-zinc-200">
                        <div
                          className="h-full rounded-full bg-emerald-700"
                          style={{ width: `${Math.max(item.percent, item.count > 0 ? 8 : 0)}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-bold">{item.count.toLocaleString()}</div>
                      <div className="text-lg text-zinc-500">{item.percent}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={onBack}
            className="rounded-2xl bg-emerald-700 px-6 py-4 text-lg font-semibold text-white transition hover:opacity-90"
          >
            返回
          </button>
        </div>
      </div>
    </div>
  );
}

  function ShareModal({ open, onClose, result, onSave, shareUrl, cardRef }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-[2rem] border border-zinc-200 bg-[#f6f5f2] p-4 text-zinc-800 shadow-2xl">
        
        <div
          ref={cardRef}
          className="rounded-[1.5rem] border border-zinc-200 bg-white p-4"
        >
          <div className="text-center">
            {/* <div className="text-sm text-zinc-500">你的古典乐人格类型是</div> */}
            <div className="mt-2 text-3xl font-bold text-emerald-700">
              {result.emoji} {result.title}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="flex items-center gap-4">
              <img
                src={result.avatar}
                alt={result.composer}
                className="h-24 w-24 rounded-2xl border border-zinc-200 object-cover"
                style={{ imageRendering: "pixelated" }}
              />

              <div className="text-left">
                <div className="text-sm text-zinc-500">對應形象</div>
                <div className="text-lg font-semibold">{result.composer}</div>
                <div className="mt-1 text-sm text-zinc-500">{result.era}</div>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-zinc-100 p-3 text-sm leading-6 text-zinc-700">
              {result.description}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {result.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-zinc-50 p-4">
            <div>
              <div className="text-sm text-zinc-500">扫码再测一次</div>
              <div className="mt-1 text-sm text-zinc-700 break-all">
                {shareUrl}
              </div>
            </div>

            <div className="shrink-0 rounded-xl bg-white p-2">
              <QRCodeSVG value={shareUrl} size={88} />
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-zinc-500">
            快来测测你是什麽龍
          </div>
        </div>

        <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
          <button
            onClick={onSave}
            className="rounded-2xl bg-emerald-700 px-5 py-4 text-lg font-semibold text-white transition hover:opacity-90"
          >
            保存结果
          </button>

          <button
            onClick={onClose}
            className="rounded-2xl border border-zinc-300 bg-white px-6 py-4 text-lg font-semibold text-zinc-700 transition hover:bg-zinc-50"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-[#f7f4ec] text-zinc-900 transition-all duration-700">    
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-8">
       {!started && !finished && (
          <>
            <div className="mt-12 mb-10 text-center">
              <div className="mb-5 text-sm tracking-[0.45em] text-amber-800/60">
                LONGLONG TYPE
              </div>

              <h1 className="text-5xl font-extrabold leading-tight text-zinc-950 md:text-6xl">
                测测你是什么龙
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-700 md:text-xl">
                10道题，测出你的气质最像哪一只龙。
              </p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-amber-100 bg-[#fffdf7] p-7 shadow-[0_18px_45px_rgba(120,92,30,0.10)]">
                <div className="mb-4 text-base text-zinc-500">你会得到</div>

                <ul className="space-y-3 text-base leading-7 text-zinc-700 md:text-lg">
                  <li>• 你的专属龙龙形象</li>
                  <li>• 性格标签 + 氛围说明</li>
                  <li>• 和其他龙龙的交朋友建议</li>
                </ul>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <button
                  onClick={() => setStarted(true)}
                  className="rounded-[1.75rem] border border-amber-300 bg-[#fff3c4] px-6 py-4 text-lg font-bold text-amber-950 shadow-[0_10px_28px_rgba(180,120,20,0.18)] transition hover:bg-[#ffe9a3] hover:scale-[1.01] active:scale-[0.99]"
                >
                  开始测试
                </button>

                <button
                  onClick={openRankingPage}
                  className="rounded-[1.75rem] border border-amber-300 bg-[#fff8dc] px-6 py-4 text-lg font-bold text-amber-950 shadow-[0_10px_28px_rgba(180,120,20,0.12)] transition hover:bg-[#fff0bd] active:scale-[0.99]"
                >
                  排行榜
                </button>
              </div>
            </div>
          </>
        )}

        {started && !finished && (
          <>
            <div className="mb-6 mt-4 flex items-center justify-between text-sm text-zinc-500">
              <button
                onClick={goBackQuestion}
                disabled={step === 0}
                className="rounded-full border border-amber-200 bg-[#fffdf7] px-4 py-2 text-sm font-medium text-amber-900 shadow-sm transition hover:bg-[#fff3d6] disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← 上一题
              </button>

              <span>{step + 1} / {questions.length}</span>
            </div>

            <div className="mb-6 h-2 overflow-hidden rounded-full bg-[#eadfca]">
              <div
                className="h-full rounded-full bg-amber-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="rounded-[2rem] border border-amber-100 bg-[#fffdf7] p-7 shadow-[0_18px_45px_rgba(120,92,30,0.10)]">
              <div className="mb-7 text-3xl font-extrabold leading-relaxed text-zinc-950 md:text-4xl">
                {questions[step].text}
              </div>

              <div className="grid gap-4">
                {questions[step].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.weights)}
                    className="rounded-2xl border border-amber-100 bg-white px-5 py-4 text-left text-base text-zinc-800 shadow-sm transition hover:border-amber-300 hover:bg-[#fff8e6] hover:scale-[1.01] active:scale-[0.99] md:text-lg"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
        {finished && (
          <div className="my-auto">
            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 md:p-8 backdrop-blur-md shadow-2xl">
              <div className="text-sm tracking-[0.3em] text-zinc-500">你的测试结果</div>
              <div className="mt-4 text-6xl">{result.emoji}</div>
              <h2 className="mt-4 text-3xl font-bold md:text-5xl">{result.title}</h2>
              <p className="mt-3 text-zinc-600">{result.composer} · {result.era}</p>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <img
                  src={result.avatar}
                  alt={result.composer}
                  className="h-20 w-20 rounded-xl border border-zinc-200 object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
                <div>
                  <div className="text-sm text-zinc-500">對應形象</div>
                  <div className="text-lg font-semibold text-zinc-900">{result.composer}</div>
                </div>
              </div>

              {/* <div className="mt-6">
                <div className="mb-2 text-sm text-zinc-500">点击播放对应曲子</div>
                <audio controls className="w-full">
                  <source src={result.audio} type="audio/mpeg" />
                  你的浏览器不支持音频播放。
                </audio>
              </div> */}

              <div className="mt-6 flex flex-wrap gap-2">
                {result.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
                <p>{result.description}</p>
                <p>{result.vibe}</p>
                <p className="text-zinc-600">{result.recommendation}</p>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                <button onClick={openRankingPage} className={smallButtonClass}>
                  排行榜
                </button>

                <button onClick={() => setShowShareModal(true)} className={smallButtonClass}>
                  分享给朋友
                </button>

                <button onClick={restart} className={smallButtonClass}>
                  再测一次
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-xs text-zinc-500">
          made by null
        </div>
        <ShareModal
          open={showShareModal}
          onClose={() => setShowShareModal(false)}
          result={result}
          onSave={saveResultImage}
          shareUrl={shareUrl}
          cardRef={shareCardRef}
        />
      </div>
    </div>
  );
}
