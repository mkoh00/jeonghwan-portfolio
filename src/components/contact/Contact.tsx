/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from 'react';
import { SECTION_TITLE } from '@/constants/constants';
import Layout from '../common/Layout';
import { SlideUpScroll } from '../animation/SlideUp';
import { collection, query, orderBy, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';

const PAGE_SIZE = 5;
const MAX_LENGTH = 200; // 최대 입력 글자 수 제한

const Contact = () => {
	const [allMessages, setAllMessages] = useState<{ id: string; message: string; createdAt: Date }[]>([]);
	const [newMessage, setNewMessage] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(allMessages.length / PAGE_SIZE);

	// Firestore에서 모든 메시지 불러오기
	const fetchAllMessages = async () => {
		const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));
		const querySnapshot = await getDocs(q);
		const messages = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			message: doc.data().message,
			createdAt: doc.data().createdAt?.toDate() || new Date(),
		}));
		setAllMessages(messages);
	};

	useEffect(() => {
		fetchAllMessages();
	}, []);

	// Firestore에 새 메시지 추가
	const handleAddMessage = async () => {
		if (!newMessage.trim()) return;

		const newEntry = {
			message: newMessage,
			createdAt: Timestamp.now(),
		};

		try {
			await addDoc(collection(db, 'guestbook'), newEntry);
			setNewMessage('');
			await fetchAllMessages();
			setCurrentPage(1); // 메시지 추가 후 첫 페이지로 리셋
		} catch (error) {
			console.error('Error adding message:', error);
		}
	};

	// 현재 페이지에 표시할 메시지 계산
	const startIdx = (currentPage - 1) * PAGE_SIZE;
	const displayMessages = allMessages.slice(startIdx, startIdx + PAGE_SIZE);

	return (
		<Layout title={SECTION_TITLE.contact}>
			<div className="w-full h-auto flex flex-col my-10">
				<SlideUpScroll delay={0.1}>
					<h1 className="text-pureWhite font-bold mb-5 lg:text-4xl md:text-3xl text-xl">
						제 소개를 봐주셔서 정말 감사합니다!
					</h1>
				</SlideUpScroll>

				<SlideUpScroll delay={0.15}>
					<h2 className="lg:text-2xl md:text-2xl text-lg text-white font-medium">
						함께 하고 싶은 동료 개발자가 되기 위해, <br />
						신뢰를 줄 수 있는 개발자가 되기 위해 끊임 없이 도전하겠습니다
					</h2>
				</SlideUpScroll>

				<SlideUpScroll delay={0.2}>
					<div className="w-full h-11 rounded-lg bg-pureWhite px-3 mt-10 font-extrabold flex items-center text-primary text-xl">
						방명록
					</div>
				</SlideUpScroll>

				<SlideUpScroll delay={0.25}>
					<h3 className="text-white font-light my-5 md:text-base text-sm">
						방명록을 통해 질문사항 또는 피드백을 남겨주세요! <br />
						오늘도 행복한 하루 되세요
						<img
							src="https://imgur.com/K9O1659.gif"
							width="30"
							className="inline-block align-middle ml-1"
							alt="smile"
						/>
					</h3>
				</SlideUpScroll>

				{/* 입력 필드 */}
				<SlideUpScroll delay={0.3}>
					<div className="w-full h-auto rounded-lg bg-white p-4">
						<textarea
							className="w-full h-24 p-2 border rounded resize-none" // 높이 고정 & 크기 변경 불가
							placeholder="메시지를 입력하세요."
							value={newMessage}
							maxLength={MAX_LENGTH}
							onChange={(e) => setNewMessage(e.target.value)}
						/>
						<div className="text-right text-gray-500 text-sm mt-1">
							{newMessage.length} / {MAX_LENGTH}
						</div>
						<button className="w-full mt-2 bg-primary text-white p-2 rounded-lg" onClick={handleAddMessage}>
							남기기
						</button>
					</div>
				</SlideUpScroll>

				{/* 방명록 리스트 */}
				<SlideUpScroll delay={0.35}>
					<div className="w-full h-auto rounded-lg bg-white p-4 mt-5">
						{displayMessages.length === 0 ? (
							<p className="text-gray-500 text-center">아직 남겨진 메시지가 없습니다.</p>
						) : (
							<ul className="space-y-3">
								{displayMessages.map((entry) => (
									<li key={entry.id} className="p-3 bg-gray-100 rounded-lg shadow">
										<p className="font-bold">{entry.message}</p>
										<span className="text-xs text-gray-500">
											{new Date(entry.createdAt).toLocaleString()}
										</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</SlideUpScroll>

				{/* 페이지네이션 컨트롤 */}
				<div className="mt-6 flex flex-col items-center">
					<div className="flex justify-center items-center mb-3 space-x-4">
						<button
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage <= 1}
							className={`px-4 py-2 rounded-lg ${
								currentPage > 1
									? 'bg-indigo-600 hover:bg-indigo-700 text-white'
									: 'bg-gray-700 text-gray-300'
							}`}
						>
							이전
						</button>
						<div className="text-white text-lg">
							{currentPage} / {totalPages}
						</div>
						<button
							onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
							disabled={currentPage >= totalPages}
							className={`px-4 py-2 rounded-lg ${
								currentPage < totalPages
									? 'bg-indigo-600 hover:bg-indigo-700 text-white'
									: 'bg-gray-700 text-gray-300'
							}`}
						>
							다음
						</button>
					</div>

					{/* 개별 페이지 번호 버튼 */}
					<div className="flex justify-center items-center space-x-2">
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
							<button
								key={pageNum}
								onClick={() => setCurrentPage(pageNum)}
								className={`px-3 py-1 rounded ${
									currentPage === pageNum ? 'bg-indigo-700 text-white' : 'bg-gray-700 text-gray-300'
								}`}
							>
								{pageNum}
							</button>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
