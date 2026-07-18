import type { Metadata } from "next";
import WLBScanner from "../../components/WLBScanner";
import { boycottEntries, levelCopy, type BoycottLevel } from "../../../data/boycott";

export const metadata:Metadata={title:"ماسح المقاطعة WLB — وورلدلاين",description:"امسح الباركود وتعرّف إلى المنتج وافحصه في دليل مقاطعة موثق."};
const groups:BoycottLevel[]=["priority","organic","pressure","community"];

export default function ArabicWLBPage(){return <main className="wlb-page ar-page" dir="rtl" lang="ar">
  <nav className="nav shell wlb-nav"><a className="brand" href="/ar">WORLD<span>LINE</span><i/></a><div className="nav-links"><a href="#scanner">الماسح</a><a href="#directory">الدليل</a><a href="#method">المنهج</a><a href="/ar/research/palestine">فلسطين</a></div><a className="edition" href="/wlb">English ↗</a></nav>
  <header className="wlb-hero shell"><div><p className="eyebrow"><span/> المقاطعة العالمية · WLB</p><h1>امسح.<br/><em>اعرف.</em><br/>اختر.</h1></div><aside><b>فعل استهلاكي سلمي</b><p>دليل يستند إلى الأدلة لمن يريد أن ينسجم إنفاقه مع حقوق الشعب الفلسطيني.</p><a href="#scanner">افتح الماسح ↓</a></aside></header>
  <section className="wlb-scan-section" id="scanner"><div className="shell wlb-scan-grid"><div><p className="eyebrow light"><span/> معلومات الباركود</p><h2>ماذا تحمل<br/>في يدك؟</h2><p>تبحث WLB في ثلاث قواعد منتجات مفتوحة، وتقارن العلامة بدليل شفاف، وتشرح كل نتيجة.</p><div className="scanner-rule"><b>مهم</b><p>بادئة الباركود ليست دليلاً على بلد التصنيع. توضح GS1 أنها تحدد الجهة التي خصصت الرقم.</p></div></div><WLBScanner lang="ar"/></div></section>
  <section className="wlb-directory shell" id="directory"><div className="wlb-section-head"><div><p className="eyebrow"><span/> دليل الأدلة</p><h2>ليست قائمة واحدة.<br/><em>أربع درجات واضحة.</em></h2></div><p>تفصل WLB بين الأهداف الرسمية ذات الأولوية وحملات الضغط والدعوات المجتمعية الأوسع. هذا الفرق مهم.</p></div>
    {groups.map(level=><div className="directory-group" key={level}><div><span>{String(groups.indexOf(level)+1).padStart(2,"0")}</span><h3>{levelCopy[level].ar}</h3><p>{level==="community"?"حملات مجتمعية مع ملاحظة دليل صريحة.":"يتبع التصنيف دليل حركة BDS المرتبط بكل بند."}</p></div><div>{boycottEntries.filter(e=>e.level===level).map(entry=><article key={entry.id}><b>{entry.name}</b>{entry.parent&&<small>{entry.parent}</small>}<p>{entry.reason.ar}</p><a href={entry.sources[0].url} target="_blank" rel="noreferrer">الدليل ↗</a></article>)}</div></div>)}
  </section>
  <section className="wlb-method" id="method"><div className="shell"><div><p className="eyebrow light"><span/> كيف تقرأ النتيجة</p><h2>الدليل قبل<br/>العلامة الحمراء.</h2></div><ol><li><b>01</b><span>بيانات المنتج</span><p>تقدم قواعد Open Food Facts وOpen Beauty Facts وOpen Products Facts أسماء وصوراً وعلامات يجمعها المجتمع.</p></li><li><b>02</b><span>مطابقة العلامة</span><p>تقارن WLB العلامات المبلغ عنها بالأسماء والعلاقات التجارية الموثقة في الدليل.</p></li><li><b>03</b><span>الحكم البشري</span><p>قد تكون البيانات المفتوحة ناقصة. «لا تطابق» لا تعني آمناً؛ تحقق من الأدلة المرتبطة.</p></li></ol></div></section>
  <footer className="footer shell"><a className="brand" href="/ar">WORLD<span>LINE</span><i/></a><p>تدعم WLB الاختيار الاستهلاكي السلمي الواعي، ولا تدعم المضايقة.</p><p>© 2026 وورلدلاين</p></footer>
  </main>}
