import LiveAINews from "../../components/LiveAINews";
export const metadata={title:"أحدث أخبار الذكاء الاصطناعي — وورلدلاين",description:"تغذية عالمية تتحدث تلقائياً بأحدث أخبار الذكاء الاصطناعي."};
export default function AIPageAr(){return <main className="ai-page ar-page" dir="rtl" lang="ar">
 <nav className="nav shell ai-nav"><a className="brand" href="/ar">WORLD<span>LINE</span><i/></a><div className="nav-links"><a href="/ar">الرئيسية</a><a className="active" href="/ar/ai">أخبار AI</a><a href="/ar/palestine">فلسطين</a><a href="/ar/gaza">غزة</a></div><a className="edition" href="/ai">English <span>↖</span></a></nav>
 <header className="ai-hero shell"><div><p className="eyebrow"><span/> مكتب أخبار تلقائي</p><h1>الذكاء<br/><em>الاصطناعي الآن.</em></h1></div><div><b>تغذية مفتوحة / 15 دقيقة</b><p>أحدث التقارير عن النماذج والشركات والأبحاث والسياسات والأشخاص المتأثرين بالذكاء الاصطناعي، تُجمع تلقائياً من قاعدة أخبار GDELT المفتوحة.</p><a href="#live">افتح الأخبار المباشرة ↓</a></div></header>
 <section className="ai-feed shell" id="live"><div className="section-heading"><div><p className="eyebrow"><span/> أحدث الإشارات</p><h2>أخبار AI بتحديث مستمر.</h2></div><p>تفتح الروابط لدى الناشر الأصلي، وتعود العناوين والصور إلى مصادرها.</p></div><LiveAINews lang="ar"/></section>
 <section className="ai-about"><div className="shell"><b>كيف تعمل؟</b><p>يستعلم وورلدلاين من فهرس GDELT المفتوح، ويحذف العناوين المكررة ويخزن النتائج 15 دقيقة. لا يحتاج إلى مفتاح API أو اشتراك مدفوع.</p><a href="https://www.gdeltproject.org/" target="_blank" rel="noreferrer">عن GDELT ↗</a></div></section>
 <footer className="footer shell"><a className="brand" href="/ar">WORLD<span>LINE</span><i/></a><p>أخبار مباشرة من مصادرها.</p><p>© 2026 وورلدلاين</p></footer>
 </main>}
