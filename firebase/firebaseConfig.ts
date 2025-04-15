import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInAnonymously } from 'firebase/auth';

// Firebase 환경 변수 설정
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 연결
export const db = getFirestore(app);
export const auth = getAuth(app);

// 브라우저에서만 익명 로그인 시도
if (typeof window !== 'undefined') {
	signInAnonymously(auth)
		// .then((userCredential) => {
		// 	console.log('익명 로그인 성공! UID:', userCredential.user.uid);
		// })
		.catch((error) => {
			console.error('익명 로그인 실패:', error);
		});

	getAnalytics(app);
}
