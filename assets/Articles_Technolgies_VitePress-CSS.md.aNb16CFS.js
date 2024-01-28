import{_ as s,o as i,c as a,V as n,aH as t}from"./chunks/framework.cuqrmew0.js";const y=JSON.parse('{"title":"VitePress博客折腾日记-针对手机进一步优化CSS","description":"","frontmatter":{"title":"VitePress博客折腾日记-针对手机进一步优化CSS","author":"Ju33Huang22","date":"2023-08-26","categories":["技术文"],"tags":["VitePress","CSS"]},"headers":[],"relativePath":"Articles/Technolgies/VitePress-CSS.md","filePath":"Articles/Technolgies/VitePress-CSS.md","lastUpdated":1706383516000}'),l={name:"Articles/Technolgies/VitePress-CSS.md"},e=n('<h1 id="开头" tabindex="-1">开头 <a class="header-anchor" href="#开头" aria-label="Permalink to &quot;开头&quot;">​</a></h1><p>原本 littlear 的css已经足够美观，就在你在电脑前沾沾自喜关掉电脑在手机上看的时候才发现：</p><p><img src="'+t+`" alt=""></p><p>我：6</p><p>这不是我的问题，我在 littlear 自己的博客看也是这样</p><h1 id="针对手机的css片段" tabindex="-1">针对手机的CSS片段 <a class="header-anchor" href="#针对手机的css片段" aria-label="Permalink to &quot;针对手机的CSS片段&quot;">​</a></h1><p>我已经搞出来了，你可以直接成为一个CV工程师然后 Copy 过去，随便把这段 css 放在任意一个位置就行（当然我建议你放到好看点的位置不然本来就乱的 css 更乱了）</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* For Mobile */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .docs.info-wrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 在小屏幕上隐藏 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .tagline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !important</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>以上CSS解释一下就是</p><ul><li>调小了首页大标题的文字大小</li><li>调小了首页小标题的文字大小</li><li>在手机状态下隐藏了信息右侧栏</li></ul>`,10),p=[e];function h(k,r,d,E,c,o){return i(),a("div",null,p)}const C=s(l,[["render",h]]);export{y as __pageData,C as default};