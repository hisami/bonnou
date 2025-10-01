"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./Header.module.css";

const primaryNavItems = [
	{ label: "ダッシュボード", href: "#" },
	{ label: "デイリースタート", href: "#" },
	{ label: "日次振り返り", href: "#" },
];

const secondaryNavItems = [
	{ label: "煩悩", href: "#" },
	{ label: "アクション", href: "#" },
	{ label: "名言ライブラリ", href: "#" },
];

const mockUser = {
	name: "久光 遼平",
	email: "hikari@example.com",
};

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMoreOpen, setIsMoreOpen] = useState(false);
	const [isUserOpen, setIsUserOpen] = useState(false);
	const moreMenuRef = useRef<HTMLDivElement | null>(null);
	const userMenuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!isMoreOpen && !isUserOpen) {
			return;
		}

		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			if (
				isMoreOpen &&
				moreMenuRef.current &&
				!moreMenuRef.current.contains(target)
			) {
				setIsMoreOpen(false);
			}

			if (
				isUserOpen &&
				userMenuRef.current &&
				!userMenuRef.current.contains(target)
			) {
				setIsUserOpen(false);
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsMoreOpen(false);
				setIsUserOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isMoreOpen, isUserOpen]);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href="/" className={styles.brand}>
					<span className={styles.brandBadge}>Bonnou</span>
					<span className={styles.tagline}>煩悩を成長に繋げる</span>
				</Link>

				<div className={styles.desktopNav}>
					{primaryNavItems.map((item) => (
						<Link key={item.label} href={item.href} className={styles.navLink}>
							{item.label}
						</Link>
					))}
					<div ref={moreMenuRef} className={styles.moreMenuWrapper}>
						<button
							type="button"
							className={styles.moreMenuButton}
							onClick={() => {
								setIsUserOpen(false);
								setIsMoreOpen((prev) => !prev);
							}}
							aria-haspopup="true"
							aria-expanded={isMoreOpen}
						>
							その他
							<span className={styles.moreCaret}>▾</span>
						</button>
						{isMoreOpen ? (
							<div className={styles.moreMenuDropdown}>
								{secondaryNavItems.map((item) => (
									<Link
										key={item.label}
										href={item.href}
										className={styles.moreMenuLink}
									>
										{item.label}
									</Link>
								))}
							</div>
						) : null}
					</div>
					<div ref={userMenuRef} className={styles.userMenuWrapper}>
						<button
							type="button"
							className={styles.userBlock}
							onClick={() => {
								setIsMoreOpen(false);
								setIsUserOpen((prev) => !prev);
							}}
							aria-haspopup="true"
							aria-expanded={isUserOpen}
						>
							<div className={styles.userAvatar}>
								{mockUser.name.slice(0, 2)}
							</div>
						</button>
						{isUserOpen ? (
							<div className={styles.userMenuDropdown}>
								<div className={styles.userMeta}>
									<p className={styles.userMetaName}>{mockUser.name}</p>
									<p className={styles.userMetaEmail}>{mockUser.email}</p>
								</div>
								<Link
									href="#"
									className={styles.userMenuLink}
									onClick={() => setIsUserOpen(false)}
								>
									設定
								</Link>
								<button
									type="button"
									className={styles.userMenuLogout}
									onClick={() => setIsUserOpen(false)}
								>
									ログアウト
								</button>
							</div>
						) : null}
					</div>
				</div>

				<button
					type="button"
					className={styles.menuButton}
					aria-label="メニューを開閉"
					aria-expanded={isMenuOpen}
					onClick={() => {
						setIsMoreOpen(false);
						setIsUserOpen(false);
						setIsMenuOpen((prev) => !prev);
					}}
				>
					{/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						className={styles.menuIcon}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						{isMenuOpen ? (
							<path d="M6 18L18 6M6 6l12 12" />
						) : (
							<path d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</nav>

			{isMenuOpen ? (
				<div className={`${styles.mobileMenu}`}>
					<div className={styles.mobileUserBlock}>
						<div className={styles.mobileUserAvatar}>
							{mockUser.name.slice(0, 2)}
						</div>
						<div>
							<p className={styles.mobileUserName}>{mockUser.name}</p>
							<p className={styles.mobileUserEmail}>{mockUser.email}</p>
						</div>
					</div>
					<div className={styles.mobileLinks}>
						{primaryNavItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className={styles.mobileNavLink}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<div className={styles.mobileSectionLabel}>その他</div>
						{secondaryNavItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className={styles.mobileNavLink}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			) : null}
		</header>
	);
};

export default Header;
