import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, XCircle, ArrowLeft, Award, Clock, Timer, AlertCircle } from 'lucide-react';
import { passages, Passage, Question } from './data/passages';

function App() {
  const [activePassage, setActivePassage] = useState<Passage | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(18 * 60); // 18 minutes in seconds
  const [isTimeUp, setIsTimeUp] = useState(false);

  const handleStart = (passage: Passage) => {
    setActivePassage(passage);
    setAnswers({});
    setIsSubmitted(false);
    setIsTimeUp(false);
    setTimeLeft(18 * 60);
  };

  const handleBack = () => {
    setActivePassage(null);
    setAnswers({});
    setIsSubmitted(false);
    setIsTimeUp(false);
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < activePassage!.questions.length && !isTimeUp) {
      if (!window.confirm("Barcha savollarga javob bermadingiz. Yakunlashni xohlaysizmi?")) {
        return;
      }
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!activePassage || isSubmitted) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimeUp(true);
          setIsSubmitted(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [activePassage, isSubmitted]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    if (!activePassage) return 0;
    let score = 0;
    activePassage.questions.forEach((q) => {
      const userAnswer = (answers[q.id] || '').trim().toLowerCase();
      const correctAnswer = q.correctAnswer.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (!activePassage) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <header className="bg-white border-b border-slate-200 py-6 px-8 shadow-sm">
          <div className="max-w-5xl mx-auto flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-slate-800">IELTS Reading Pro</h1>
          </div>
        </header>

        <main className="max-w-5xl mx-auto py-12 px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Reading Part 1 Mashqlari</h2>
            <p className="text-slate-600">O'zingizga mos keladigan matnni tanlang va ishlashni boshlang. Har bir matnda haqiqiy IELTS formatidagi 13 ta savol mavjud. Ishlash uchun 18 daqiqa vaqt beriladi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passages.map((passage, idx) => (
              <div key={passage.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-3">
                    <Clock className="w-4 h-4" />
                    <span>18 daqiqa</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">Test {idx + 1}: {passage.title}</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    {passage.questions.length} ta savol • Har xil savol turlari
                  </p>
                </div>
                <button
                  onClick={() => handleStart(passage)}
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
                >
                  Ishlashni boshlash
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  const score = calculateScore();
  const totalQuestions = activePassage.questions.length;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  return (
    <div className="h-screen flex flex-col bg-slate-50 font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 flex items-center justify-between shrink-0 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
            title="Orqaga qaytish"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-slate-800 hidden sm:block">{activePassage.title}</h1>
        </div>
        
        {!isSubmitted ? (
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-bold ${timeLeft < 60 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-slate-100 text-slate-700'}`}>
              <Timer className="w-5 h-5" />
              {formatTime(timeLeft)}
            </div>
            <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-500">
              <span>{answeredCount} / {totalQuestions}</span>
              <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-colors"
            >
              Yakunlash
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-bold">
            <Award className="w-5 h-5" />
            <span>Natija: {score} / {totalQuestions}</span>
          </div>
        )}
      </header>

      {/* Split Workspace */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Pane: Passage */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto bg-white border-b md:border-b-0 md:border-r border-slate-200 p-6 md:p-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-serif leading-tight">{activePassage.title}</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-serif">
              {activePassage.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Pane: Questions */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto bg-slate-50 p-6 md:p-10">
          <div className="max-w-xl mx-auto">
            
            {isTimeUp && (
              <div className="mb-6 bg-rose-50 border border-rose-200 p-4 rounded-xl flex items-center gap-3 text-rose-700">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-bold">Vaqt tugadi!</h4>
                  <p className="text-sm">Belgilangan 18 daqiqa o'z nihoyasiga yetdi. Javoblaringiz avtomatik tekshirildi.</p>
                </div>
              </div>
            )}

            {isSubmitted && (
              <div className="mb-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <h3 className="text-2xl font-bold mb-2">Test yakunlandi!</h3>
                <p className="text-slate-600 mb-4">Sizning natijangiz:</p>
                <div className="text-5xl font-black text-indigo-600 mb-2">
                  {score} <span className="text-2xl text-slate-400">/ {totalQuestions}</span>
                </div>
                <p className="text-sm text-slate-500">
                  {score === totalQuestions ? 'Ajoyib natija! Barchasi to\'g\'ri.' : 'Yomon emas, xatolarni ko\'rib chiqing.'}
                </p>
              </div>
            )}

            <div className="space-y-6">
              {activePassage.questions.map((q, index) => {
                const userAnswer = answers[q.id] || '';
                const isCorrect = userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                
                return (
                  <React.Fragment key={q.id}>
                    {/* Render Instruction if it exists */}
                    {q.instruction && (
                      <div className="mt-8 mb-4 p-5 bg-indigo-50/50 rounded-xl border border-indigo-100">
                        <h4 className="font-semibold text-indigo-900 whitespace-pre-line leading-relaxed">
                          {q.instruction}
                        </h4>
                      </div>
                    )}

                    <div 
                      className={`bg-white p-6 rounded-2xl border ${
                        isSubmitted 
                          ? isCorrect 
                            ? 'border-emerald-200 bg-emerald-50/30' 
                            : 'border-rose-200 bg-rose-50/30'
                          : 'border-slate-200 shadow-sm'
                      }`}
                    >
                      <div className="flex gap-3 mb-4">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-100 text-slate-600 font-bold rounded-full text-sm">
                          {index + 1}
                        </span>
                        <p className="text-slate-800 font-medium pt-1">{q.text}</p>
                      </div>

                      <div className="pl-11">
                        {/* True/False/Not Given, Yes/No/Not Given, or Multiple Choice */}
                        {(q.type === 'tfng' || q.type === 'ynng' || q.type === 'multiple-choice') && q.options && (
                          <div className="space-y-3">
                            {q.options.map((option) => (
                              <label 
                                key={option} 
                                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                                  userAnswer === option 
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900' 
                                    : 'border-slate-200 hover:bg-slate-50'
                                } ${isSubmitted ? 'pointer-events-none' : ''}`}
                              >
                                <input
                                  type="radio"
                                  name={q.id}
                                  value={option}
                                  checked={userAnswer === option}
                                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                                  disabled={isSubmitted}
                                  className="w-4 h-4 text-indigo-600 focus:ring-indigo-600 border-gray-300"
                                />
                                <span className="font-medium">{option}</span>
                              </label>
                            ))}
                          </div>
                        )}

                        {/* Fill in the blank or Short Answer */}
                        {(q.type === 'fill-in-the-blank' || q.type === 'short-answer') && (
                          <div>
                            <input
                              type="text"
                              value={userAnswer}
                              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                              disabled={isSubmitted}
                              placeholder="Javobni kiriting..."
                              className={`w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all ${
                                isSubmitted ? 'bg-slate-50' : 'bg-white border-slate-300'
                              }`}
                            />
                          </div>
                        )}

                        {/* Feedback after submission */}
                        {isSubmitted && (
                          <div className="mt-4 flex items-start gap-2">
                            {isCorrect ? (
                              <div className="flex items-center gap-2 text-emerald-600 font-medium bg-emerald-100/50 px-3 py-2 rounded-lg w-full">
                                <CheckCircle className="w-5 h-5" />
                                <span>To'g'ri javob!</span>
                              </div>
                            ) : (
                              <div className="flex flex-col gap-1 text-rose-600 font-medium bg-rose-100/50 px-3 py-2 rounded-lg w-full">
                                <div className="flex items-center gap-2">
                                  <XCircle className="w-5 h-5" />
                                  <span>Noto'g'ri.</span>
                                </div>
                                <div className="text-sm text-slate-700 mt-1 pl-7">
                                  To'g'ri javob: <span className="font-bold text-emerald-600">{q.correctAnswer}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={handleSubmit}
                  className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
                >
                  Javoblarni tekshirish
                </button>
              </div>
            )}
            
            {isSubmitted && (
              <div className="mt-8 pt-6 border-t border-slate-200">
                <button
                  onClick={handleBack}
                  className="w-full py-4 px-6 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-lg shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
                >
                  Boshqa matn tanlash
                </button>
              </div>
            )}
            
            {/* Bottom padding for scrolling */}
            <div className="h-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
