"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./Header.module.css";

const navItems = [
	{ label: "ホーム", href: "/" },
	{ label: "機能", href: "/features" },
	{ label: "料金", href: "/pricing" },
	{ label: "お問い合わせ", href: "/contact" },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href="/" className={styles.brand}>
					<span className={styles.brandBadge}>Bonnou</span>
					<span className={styles.tagline}>煩悩を成長に繋げる</span>
				</Link>

				<div className={styles.desktopNav}>
					{navItems.map((item) => (
						<Link key={item.href} href={item.href} className={styles.navLink}>
							{item.label}
						</Link>
					))}
					<Link href="/signup" className={styles.ctaButton}>
						今すぐ始める
					</Link>
				</div>

				<button
					type="button"
					className={styles.menuButton}
					aria-label="メニューを開閉"
					aria-expanded={isMenuOpen}
					onClick={() => setIsMenuOpen((prev) => !prev)}
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
					<div className={styles.mobileLinks}>
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={styles.mobileNavLink}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<Link href="/signup" className={styles.mobileCta} onClick={() => setIsMenuOpen(false)}>
							今すぐ始める
						</Link>
					</div>
				</div>
			) : null}
		</header>
	);
};

export default Header;
