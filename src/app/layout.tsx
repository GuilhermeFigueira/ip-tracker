import "./globals.scss";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Frontend Mentor | Ip Address Tracker",
	description: "A frontend mentor project where you can track your ip",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={rubik.className}>{children}</body>
		</html>
	);
}
