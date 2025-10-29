"use client";

import { useState } from "react";
import Header from "@/components/Header";
import styles from "./Dashboard.module.css";

const today = new Date().toLocaleDateString("ja-JP", {
	year: "numeric",
	month: "numeric",
	day: "numeric",
	weekday: "short",
});

const mockStats = [
	{ label: "朝の開始メモ記録", value: "15日連続", trend: "+2日" },
	{ label: "平均気分スコア", value: "7.8 / 10", trend: "先週比 +0.6" },
	{ label: "煩悩ログ", value: "4件", trend: "本日 +1" },
	{ label: "アクション成功率", value: "68%", trend: "過去7日" },
];

const longTermGoals = [
	{
		vision: "業界トップ5%のエンジニアになる",
		pillars: [
			"毎日1つずつできることを増やす",
			"常に笑顔で+2度を意識して周囲に良い影響を与える",
			"一歩先のことを常に考える",
		],
	},
];

const personalMotto = {
	text: "虚心坦懐",
	description:
		"先入観を持たず、広く平らな心。また、そうした心で物事に臨む態度。",
};

const initialDailyMetrics = {
	moodScore: "",
};

const moodOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const dailyStartPrompts = [
	"自己肯定感を高める自己イメージやその日の意気込みを記録しましょう",
	"1日の終わりに実現したい状態を言語化してみましょう",
];

const reflectionHints = [
	"何気ない日常からも感謝できることを見つけてみましょう",
	"小さな成功体験を積み重ねて自己肯定感を育てましょう",
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

const gratitudeItems = [
	{ text: "早起きできた", moment: "朝", loggedAt: "06:35" },
	{ text: "同僚のサポート", moment: "昼", loggedAt: "13:10" },
	{ text: "天気が良かった", moment: "夕", loggedAt: "18:45" },
];

const upcomingActions = [
	{ title: "昼食後に散歩10分" },
	{ title: "午後の集中ブロック" },
	{ title: "夜の瞑想30分" },
];

const personalQuotes = [
	{
		text: "小さな前進の積み重ねが自己肯定感の器を育てる",
		source: "自分メモ",
		loggedAt: "2025-09-27",
	},
	{
		text: "習慣が人格をつくる。まずトリガーを整える",
		source: "朝活ジャーナル",
		loggedAt: "2025-09-25",
	},
];

const curatedQuotes = [
	{
		text: "成功とは日々繰り返される小さな努力の総和である",
		author: "ロバート・コリアー",
	},
	{
		text: "未来を予測する最善の方法は、それを創ることだ",
		author: "ピーター・ドラッカー",
	},
];

export default function DashboardPage() {
	const [dailyMetrics, setDailyMetrics] = useState(initialDailyMetrics);

	const handleMoodSelect = (value: string) => {
		setDailyMetrics({ moodScore: value });
	};

	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<section className={styles.hero}>
					<h1 className={styles.heroTitle}>{today}のダッシュボード</h1>
					<p className={styles.heroCopy}>
						長期目標と座右の銘を確認して、今日の朝の開始メモにつなげましょう。
					</p>
				</section>

				<section className={styles.topGrid}>
					{longTermGoals.map((goal) => (
						<article
							key={goal.vision}
							className={`${styles.card} ${styles.longTermCard}`}
						>
							<header className={styles.cardHeader}>
								<div>
									<h2 className={styles.cardTitle}>長期目標</h2>
								</div>
								<button type="button" className={styles.secondaryButton}>
									編集する
								</button>
							</header>
							<p className={styles.goalVision}>{goal.vision}</p>
							<ul className={styles.goalList}>
								{goal.pillars.map((pillar) => (
									<li key={pillar} className={styles.goalItem}>
										<span className={styles.goalDot} />
										<span>{pillar}</span>
									</li>
								))}
							</ul>
						</article>
					))}

					<article className={`${styles.card} ${styles.mottoCard}`}>
						<header className={styles.cardHeader}>
							<div>
								<h2 className={styles.cardTitle}>座右の銘</h2>
							</div>
							<button type="button" className={styles.secondaryButton}>
								編集する
							</button>
						</header>
						<p className={styles.mottoQuote}>{personalMotto.text}</p>
						<p className={styles.mottoDescription}>
							{personalMotto.description}
						</p>
					</article>
				</section>

				<section className={styles.dailyStartSection}>
					<article className={`${styles.card} ${styles.dailyStartCard}`}>
						<header className={styles.cardHeader}>
							<div>
								<h2 className={styles.cardTitle}>朝の開始メモ</h2>
								<p className={styles.cardSubtitle}>
									長期目標と座右の銘から得たエネルギーを言葉に落とし込みましょう。
								</p>
							</div>
						</header>
						<div className={styles.metricSelector}>
							<span className={styles.metricLabel}>気分スコア</span>
							<div className={styles.metricButtonGroup}>
								{moodOptions.map((option) => {
									const isSelected = dailyMetrics.moodScore === option;
									return (
										<button
											type="button"
											key={option}
											className={`${styles.metricButton} ${isSelected ? styles.metricButtonSelected : ""}`}
											onClick={() => handleMoodSelect(option)}
											aria-pressed={isSelected}
										>
											{option}
										</button>
									);
								})}
								{dailyMetrics.moodScore && (
									<button
										type="button"
										className={styles.metricClearButton}
										onClick={() => handleMoodSelect("")}
									>
										クリア
									</button>
								)}
							</div>
							{dailyMetrics.moodScore && (
								<p className={styles.metricSummary}>
									選択中: {dailyMetrics.moodScore} / 10
								</p>
							)}
						</div>
						<form className={styles.entryForm}>
							<label htmlFor="daily-comment" className={styles.formLabel}>
								今日のひとこと
							</label>
							<ul className={styles.checkList}>
								{dailyStartPrompts.map((prompt) => (
									<li key={prompt} className={styles.checkItem}>
										<span className={styles.goalDot} />
										<span>{prompt}</span>
									</li>
								))}
							</ul>
							<textarea
								name="daily-comment"
								className={styles.textarea}
								placeholder="例: 『集中力と自信がある自分で、コアタスクをやり切る』"
								rows={4}
							/>
							<div className={styles.formActions}>
								<button type="submit" className={styles.primaryButton}>
									コメントを保存
								</button>
							</div>
						</form>
					</article>
				</section>

				<section className={styles.primaryGrid}>
					<div className={styles.card}>
						<header className={styles.cardHeader}>
							<div>
								<h2 className={styles.cardTitle}>今日の煩悩</h2>
							</div>
							<button type="button" className={styles.ghostButton}>
								過去の煩悩を見る
							</button>
						</header>

						<div className={styles.bonnouList}>
							{recentBonnou.map((item) => (
								<article key={item.title} className={styles.bonnouItem}>
									<div className={styles.bonnouMeta}>
										<h3 className={styles.bonnouTitle}>{item.title}</h3>
									</div>
									<p className={styles.bonnouScore}>スコア: {item.score}</p>
									<p className={styles.bonnouAction}>
										取ったアクション: <span>{item.action}</span>
									</p>
								</article>
							))}
						</div>
					</div>

					<div className={styles.card}>
						<header className={styles.cardHeader}>
							<h2 className={styles.cardTitle}>アクション</h2>
							<button type="button" className={styles.ghostButton}>
								過去のアクションを見る
							</button>
						</header>
						<ul className={styles.actionList}>
							{upcomingActions.map((action) => (
								<li key={action.title} className={styles.actionItem}>
									<div>
										<p className={styles.actionTitle}>{action.title}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className={styles.secondaryGrid}>
					<div className={styles.card}>
						<header className={styles.cardHeader}>
							<h2 className={styles.cardTitle}>日次振り返り</h2>
							<button type="button" className={styles.ghostButton}>
								過去の振り返りを見る
							</button>
						</header>
						<p className={styles.helperText}>
							1日の終わりによかったことや感謝すべきことを記録して（3つが目安）、余韻を味わいましょう。
						</p>
						<ul className={styles.checkList}>
							{reflectionHints.map((hint) => (
								<li key={hint} className={styles.checkItem}>
									<span className={styles.goalDot} />
									<span>{hint}</span>
								</li>
							))}
						</ul>
						<ul className={styles.gratitudeList}>
							{gratitudeItems.map((item) => (
								<li
									key={`${item.text}-${item.loggedAt}`}
									className={styles.gratitudeItem}
								>
									<div>
										<p className={styles.gratitudeText}>{item.text}</p>
									</div>
								</li>
							))}
						</ul>
						<form className={styles.entryForm}>
							<label htmlFor="gratitude" className={styles.formLabel}>
								振り返りを追加
							</label>
							<input
								type="text"
								className={styles.input}
								placeholder="例: 家族との朝ごはんが楽しかった"
							/>
							<div className={styles.formActions}>
								<button type="submit" className={styles.primaryButton}>
									振り返りを登録
								</button>
							</div>
						</form>
					</div>

					<div className={styles.card}>
						<header className={styles.cardHeader}>
							<div>
								<h2 className={styles.cardTitle}>名言ライブラリ</h2>
								<p className={styles.cardSubtitle}>
									心に響く名言をストックしましょう。
								</p>
							</div>
							<button type="button" className={styles.ghostButton}>
								全ての名言を見る
							</button>
						</header>
						<section className={styles.quoteSection}>
							<h3 className={styles.sectionLabel}>登録した名言（最新3件）</h3>
							<ul className={styles.quoteList}>
								{personalQuotes.map((quote) => (
									<li
										key={`${quote.text}-${quote.loggedAt}`}
										className={styles.quoteItem}
									>
										<p className={styles.quoteText}>“{quote.text}”</p>
										<span className={styles.quoteMeta}>
											{quote.source}・記録 {quote.loggedAt}
										</span>
									</li>
								))}
							</ul>
							{/* <form className={styles.entryForm}>
								<label htmlFor="my-quote" className={styles.formLabel}>
									名言を追加
								</label>
								<input
									type="text"
									className={styles.input}
									placeholder="例: 習慣が人格をつくる"
								/>
								<input
									type="text"
									className={styles.input}
									placeholder="出典・誰の言葉か"
								/>
								<button type="submit" className={styles.primaryButton}>
									名言を登録
								</button>
							</form> */}
						</section>
					</div>
				</section>

				<section className={styles.analysisSection}>
					<article className={`${styles.card} ${styles.analysisCard}`}>
						<header className={styles.cardHeader}>
							<div>
								<h2 className={styles.cardTitle}>分析ハイライト</h2>
								<p className={styles.cardSubtitle}>
									記録データの傾向をふりかえり、習慣化の手応えを確認しましょう。
								</p>
							</div>
						</header>

						<div className={styles.statsGrid}>
							{mockStats.map((stat) => (
								<div key={stat.label} className={styles.statCard}>
									<p className={styles.statLabel}>{stat.label}</p>
									<p className={styles.statValue}>{stat.value}</p>
									<p className={styles.statTrend}>{stat.trend}</p>
								</div>
							))}
						</div>
					</article>
				</section>
			</main>
		</div>
	);
}
