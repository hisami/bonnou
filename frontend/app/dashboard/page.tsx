import Header from "@/components/Header";
import styles from "./Dashboard.module.css";

const today = new Date().toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  weekday: "short",
});

const mockStats = [
  { label: "デイリースタート記録", value: "15日連続", trend: "+2日" },
  { label: "平均気分スコア", value: "7.8 / 10", trend: "先週比 +0.6" },
  { label: "煩悩ログ", value: "4件", trend: "本日 +1" },
  { label: "アクション成功率", value: "68%", trend: "過去7日" },
];

const recentBonnou = [
  {
    title: "SNSへ気を取られる",
    score: "7 → 4",
    action: "タイマーで10分だけ集中",
    updatedAt: "09:30",
  },
  {
    title: "完璧主義で手が止まる",
    score: "6 → 5",
    action: "アウトラインだけ書き出す",
    updatedAt: "08:10",
  },
  {
    title: "朝のだらだら",
    score: "8 → 6",
    action: "ストレッチ5分",
    updatedAt: "07:05",
  },
];

const gratitudeItems = ["早起きできた", "同僚のサポート", "天気が良かった"];

const upcomingActions = [
  { title: "昼食後に散歩10分", time: "12:30", tag: "リフレッシュ" },
  { title: "午後の集中ブロック", time: "14:00", tag: "集中" },
  { title: "夜の瞑想30分", time: "21:30", tag: "マインドフル" },
];

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>{today}のダッシュボード</h1>
          <p className={styles.heroCopy}>
            デイリースタートコメントを記載して、今日の自己イメージを高めましょう。
          </p>
        </section>

        <section className={styles.statsGrid}>
          {mockStats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <p className={styles.statLabel}>{stat.label}</p>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statTrend}>{stat.trend}</p>
            </div>
          ))}
        </section>

        <section className={styles.primaryGrid}>
          <div className={styles.card}>
            <header className={styles.cardHeader}>
              <div>
                <h2 className={styles.cardTitle}>最新の煩悩ログ</h2>
                <p className={styles.cardSubtitle}>
                  アクションの効果を確認しましょう
                </p>
              </div>
              <button type="button" className={styles.ghostButton}>
                すべて表示
              </button>
            </header>

            <div className={styles.bonnouList}>
              {recentBonnou.map((item) => (
                <article key={item.title} className={styles.bonnouItem}>
                  <div className={styles.bonnouMeta}>
                    <h3 className={styles.bonnouTitle}>{item.title}</h3>
                    <span>更新 {item.updatedAt}</span>
                  </div>
                  <p className={styles.bonnouScore}>スコア: {item.score}</p>
                  <p className={styles.bonnouAction}>
                    取ったアクション: <span>{item.action}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.sideColumn}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>今日の自己イメージ</h2>
              <p className={styles.gradientNote}>
                「集中力に自信がある自分として、午前中のコアタスクをやり切る」
              </p>
              <dl className={styles.metricList}>
                <div className={styles.metricRow}>
                  <dt>気分スコア</dt>
                  <dd className={styles.metricValue}>7 / 10</dd>
                </div>
                <div className={styles.metricRow}>
                  <dt>自己肯定感</dt>
                  <dd className={styles.metricValue}>前日より +1.2</dd>
                </div>
              </dl>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>感謝のリスト</h2>
              <ul className={styles.bulletList}>
                {gratitudeItems.map((item) => (
                  <li key={item} className={styles.bulletItem}>
                    <span className={styles.bulletDot} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.secondaryGrid}>
          <div className={styles.card}>
            <header className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>アクション予定</h2>
              <button type="button" className={styles.ghostButton}>
                アクションを追加
              </button>
            </header>
            <ul className={styles.actionList}>
              {upcomingActions.map((action) => (
                <li key={action.title} className={styles.actionItem}>
                  <div>
                    <p className={styles.actionTitle}>{action.title}</p>
                    <p className={styles.actionTag}>タグ: {action.tag}</p>
                  </div>
                  <span className={styles.timeBadge}>{action.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>振り返りヒント</h2>
            <ol className={styles.hintList}>
              <li className={styles.hintItem}>
                今日のエネルギーを高めた要因は何でしたか？
              </li>
              <li className={styles.hintItem}>
                スコアが下がったタイミングで感じたことを1つ書き出してみましょう。
              </li>
              <li className={styles.hintItem}>
                明日の自分に伝えたいサポートメッセージは？
              </li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}
