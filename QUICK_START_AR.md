# دليل البدء السريع - ثيم Velora
## Quick Start Guide - Velora Theme

### مرحباً! 👋
أنت الآن تملك ثيم فيلورا الفاخر! هذا الملف يساعدك للبدء بسرعة.

---

## 📂 1. هيكل المشروع

```
velora-theme/
├── views/              → ملفات الصفحات والمكونات
├── assets/             → صور وأنماط وسكريبتات
├── locales/            → ملفات الترجمة (عربي وإنجليزي)
├── package.json        → إعدادات المشروع
└── tailwind.config.js  → إعدادات Tailwind CSS
```

---

## 🚀 2. البدء السريع

### أ. تثبيت المتطلبات
```bash
npm install
```

### ب. تشغيل في وضع التطوير
```bash
npm run dev
```
سيراقب التغييرات تلقائياً ويحدّث CSS

### ج. بناء للإنتاج
```bash
npm run build
```
ينشئ نسخة محسّنة للإنتاج

---

## 🎨 3. الملفات الرئيسية التي تحتاج تعديل

### الصفحة الرئيسية
📄 `views/pages/index.twig`
- عدّل النصوص والصور
- غيّر CTA buttons
- أضف أقسام جديدة

### صفحة المنتج
📄 `views/pages/product.twig`
- معرض الصور
- تفاصيل المنتج
- الأزرار والإجراءات

### الرأس والتذييل
📄 `views/components/header.twig` - الشريط العلوي والقائمة
📄 `views/components/footer.twig` - معلومات التذييل والروابط

### بطاقة المنتج
📄 `views/components/product-card.twig`
- يُعرض في الشبكات
- قابل لإعادة الاستخدام

---

## 🌈 4. تغيير الألوان

### في `tailwind.config.js`:

```javascript
colors: {
  'gold': {
    'light': '#E8D4A8',    // ← غيّر هنا
    'DEFAULT': '#C9A84C',  // ← أو هنا
    'dark': '#A07D2D'      // ← أو هنا
  }
}
```

### استخدام الألوان في HTML:
```html
<!-- خلفية ذهبية -->
<div class="bg-gold">المحتوى</div>

<!-- نص ذهبي -->
<p class="text-gold">النص</p>

<!-- حد ذهبي -->
<div class="border-2 border-gold">المحتوى</div>
```

---

## 📝 5. التعديلات الشائعة

### تغيير شعار الموقع
في `views/components/header.twig` ابحث عن:
```twig
<div class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">
  VELORA  {# ← غيّر هنا #}
</div>
```

### تعديل نص البطل (Hero Section)
في `views/pages/index.twig` ابحث عن:
```twig
<h1 class="text-5xl lg:text-6xl font-bold leading-tight">
  <span>ارتقِ بمهاراتك مع أفضل المنتجات الرقمية</span> {# ← غيّر النص #}
</h1>
```

### إضافة رابط جديد في القائمة
في `views/components/header.twig`:
```twig
<a href="/your-page" class="text-gray-300 hover:text-gold transition-colors font-medium">
  <i class="fas fa-icon ms-1"></i>اسم الرابط
</a>
```

---

## 🔗 6. روابط المقاطع (Anchor Links)

```html
<!-- رابط يذهب للقسم -->
<a href="#products">استكشف المنتجات</a>

<!-- القسم المستهدف -->
<section id="products">
  محتوى المنتجات
</section>
```

---

## 🎬 7. الحركات والتأثيرات

استخدم الفئات الجاهزة:

```html
<!-- ظهور من الأسفل -->
<div class="animate-fadeInUp">محتوى</div>

<!-- ظهور من الأعلى -->
<div class="animate-fadeInDown">محتوى</div>

<!-- تذبذب عائم -->
<div class="animate-float">محتوى</div>

<!-- نبض -->
<div class="animate-pulse">محتوى</div>
```

---

## 📱 8. التجاوب (Responsive Design)

```html
<!-- مخفي على الأجهزة الصغيرة -->
<div class="hidden lg:block">
  يظهر على سطح المكتب فقط
</div>

<!-- مخفي على الأجهزة الكبيرة -->
<div class="lg:hidden">
  يظهر على الموبايل فقط
</div>

<!-- تغيير الحجم حسب الشاشة -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  العنوان
</h1>
```

---

## 🌍 9. الترجمات

### إضافة كلمة جديدة

في `locales/ar.json`:
```json
{
  "my_section": {
    "title": "عنواني",
    "description": "وصفي"
  }
}
```

### استخدام الترجمة في Twig:
```twig
{{ trans('my_section.title') }}
```

---

## ⚙️ 10. أيقونات Font Awesome

```html
<!-- أيقونة بسيطة -->
<i class="fas fa-star"></i>

<!-- أيقونة مع نص -->
<i class="fas fa-shopping-bag ms-2"></i>شراء

<!-- أيقونة دوّارة (loading) -->
<i class="fas fa-spinner fa-spin"></i>

<!-- أبحث عن أيقونات أخرى: -->
<!-- https://fontawesome.com/icons -->
```

---

## 🔍 11. أيقونات الشبكات الاجتماعية

```html
<i class="fab fa-twitter"></i>   {# تويتر #}
<i class="fab fa-instagram"></i> {# إنستجرام #}
<i class="fab fa-snapchat"></i>  {# سناب شات #}
<i class="fab fa-tiktok"></i>    {# تيك توك #}
<i class="fab fa-facebook"></i>  {# فيسبوك #}
```

---

## 💡 12. نصائح مهمة للمبتدئين

### ✅ تعليقات مفيدة في الكود

**Twig:**
```twig
{# هذا تعليق في Twig #}
<!-- هذا تعليق في HTML -->
```

**JavaScript:**
```javascript
// تعليق سطر واحد
/* تعليق متعدد
   الأسطر */
```

**CSS:**
```css
/* تعليق في CSS */
```

### ✅ احفظ ملفاتك دائماً
- استخدم Ctrl+S (أو Cmd+S على Mac)
- تحقق من أن الخادم يعمل

### ✅ استخدم Developer Tools
- اضغط F12 للفتح
- عدّل CSS مباشرة للاختبار
- تحقق من الأخطاء في Console

---

## 🐛 13. حل المشاكل الشائعة

### المشكلة: تغييري لا تظهر
```bash
# جرب إعادة تشغيل الخادم
npm run dev
```

### المشكلة: الصور لا تظهر
```twig
{# استخدم {{ theme.url }} للصور #}
<img src="{{ theme.url }}/assets/images/photo.jpg" alt="صورة">
```

### المشكلة: النصوص ملتصقة ببعضها
```html
{# أضف margin أو padding #}
<div class="mb-4">محتوى</div>
<div class="p-6">محتوى</div>
```

---

## 📚 14. مصادر التعلم

### Tailwind CSS
```html
<!-- تعلم الفئات الشائعة -->
bg-*      → خلفية
text-*    → نص
p-*       → padding
m-*       → margin
rounded-* → زوايا مستديرة
```

[اعرف المزيد](https://tailwindcss.com/docs)

### Twig Templates
- للحلقات: `{% for item in items %}`
- للشروط: `{% if condition %}`
- المتغيرات: `{{ variable }}`

[اعرف المزيد](https://twig.symfony.com/doc/3.x/)

---

## 📋 15. قائمة التحقق قبل الإطلاق

- [ ] تعديل اسم الشركة/العلامة التجارية
- [ ] تحديث بيانات الاتصال
- [ ] تغيير الألوان حسب الهوية البصرية
- [ ] إضافة شعارك
- [ ] تحديث الترجمات
- [ ] اختبار على الموبايل والديسكتوب
- [ ] التحقق من الروابط
- [ ] اختبار أزرار الدفع

---

## 🎓 16. النقاط التي يجب تذكرها

| النقطة | التفصيل |
|-------|---------|
| RTL | الثيم مصمم من اليمين لليسار |
| الألوان | استخدم gold للون الأساسي |
| الخطوط | Tajawal للعربية |
| الأجهزة | اختبر على أحجام مختلفة |
| الترجمة | استخدم locales للنصوص |

---

## 🚨 17. تحذيرات أمان

⚠️ **لا تضع**:
- كلمات مرور في الكود
- مفاتيح API في ملفات الواجهة
- بيانات شخصية حساسة

✅ **استخدم**:
- متغيرات البيئة
- API endpoints آمنة
- HTTPS للاتصال

---

## ✨ 18. ماذا بعد؟

### للمبتدئين:
1. تعدّل النصوص والألوان
2. أضف صورك الخاصة
3. اختبر على أجهزة مختلفة

### للمتقدمين:
1. أنشئ صفحات جديدة
2. أضف JavaScript مخصص
3. قم بتحسينات الأداء

---

## 📞 الدعم والمساعدة

**اسأل نفسك:**
1. هل الملف موجود؟
2. هل الرابط صحيح؟
3. هل الخادم يعمل؟
4. هل حفظت التغييرات؟

**مراجع مفيدة:**
- [Salla Docs](https://docs.salla.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Font Awesome](https://fontawesome.com/icons)

---

## 🎉 الخطوات التالية

1. **افتح المشروع** - استخدم محرر نصوص (VS Code موصى به)
2. **اقرأ التعليقات** - كل ملف يحتوي على تعليقات مفيدة
3. **ابدأ التعديل** - غيّر ما يناسبك
4. **اختبر التغييرات** - تحقق من النتائج
5. **اسأل** - إذا لم تفهم شيء ما

---

## 🏆 آخر نصيحة

**لا تخف من التجربة!**

الكود لن ينكسر بسهولة. جرّب أشياء جديدة، اختبرها، وتعلم من الأخطاء.

**كل مطور متخصص كان مبتدئاً يوماً ما!** 💪

---

**استمتع بـ Velora! 🎨✨**

الآن أنت مستعد للبدء. إذا احتجت للمساعدة، راجع README.md الرئيسي.

---

**آخر تحديث:** 28 مارس 2026
**الإصدار:** 1.0.0
