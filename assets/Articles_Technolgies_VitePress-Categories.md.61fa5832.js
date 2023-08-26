import{_ as s,o as a,c as n,V as l}from"./chunks/framework.25239179.js";const i=JSON.parse('{"title":"VitePress博客折腾日记-标签云（aka 分类云）","description":"","frontmatter":{"title":"VitePress博客折腾日记-标签云（aka 分类云）","author":"Ju33Huang22","date":"2023-08-26","categories":["技术文"],"tags":["VitePress"]},"headers":[],"relativePath":"Articles/Technolgies/VitePress-Categories.md","filePath":"Articles/Technolgies/VitePress-Categories.md","lastUpdated":1693043122000}'),p={name:"Articles/Technolgies/VitePress-Categories.md"},o=l(`<h1 id="什么是标签云-aka-分类云" tabindex="-1">什么是标签云（aka 分类云）？ <a class="header-anchor" href="#什么是标签云-aka-分类云" aria-label="Permalink to &quot;什么是标签云（aka 分类云）？&quot;">​</a></h1><p>就是你见到人家的博客的文章标签合集五颜六色的按钮，有些还会依照这个标签被多少个文章使用的数量而加大文字大小（不过这次的演示并不是加大文字大小，而是改变按钮的颜色）</p><p>上次搞首页搞到一半，发现漏了标签云的跳转页的功能，那么我们继续完善它</p><h1 id="新建占位markdown文件" tabindex="-1">新建占位Markdown文件 <a class="header-anchor" href="#新建占位markdown文件" aria-label="Permalink to &quot;新建占位Markdown文件&quot;">​</a></h1><p>新建一个 Markdown 文档并命名为 <code>categories.md</code> 并放到根目录</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">page</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import wyCat from &#39;./components/wyCat.vue&#39; //这里的路径取决于你要把这个文件放到哪里</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt; </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;wyCat /&gt;</span></span></code></pre></div><h1 id="新建-wycat-vue" tabindex="-1">新建 <code>wyCat.vue</code> <a class="header-anchor" href="#新建-wycat-vue" aria-label="Permalink to &quot;新建 \`wyCat.vue\`&quot;">​</a></h1><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useDocs </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;./useDocs.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import DocList from &#39;./docList.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const CLORS = [&#39;#FFB3B3&#39;, &#39;#FFDBA4&#39;, &#39;#FFE9AE&#39;, &#39;#C1EFFF&#39;, &#39;#3498DB&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> categories</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> tags </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useDocs()</span></span>
<span class="line"><span style="color:#A6ACCD;">let curFilter = ref(&#39;&#39;), curData = ref([]), curType = ref(&#39;&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">if (typeof window !== &#39;undefined&#39;) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  let parma </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URLSearchParams</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">search)</span></span>
<span class="line"><span style="color:#A6ACCD;">  let type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">if</span><span style="color:#A6ACCD;"> (type </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    curFilter.value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    curData.value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">tags]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CLORS</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">)] </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    curFilter.value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cat</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    curData.value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">(categories)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> num</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">categories</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CLORS</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">)] </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  curType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> type</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">function handleCatClick(k) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  curFilter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> k</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wy-cat docs-wrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cat-wrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in curData</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :key=&quot;item.label&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        :class=&quot;[curType !== </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> ? </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cat-item</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tag-item</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, </span><span style="color:#C792EA;">curFilter</span><span style="color:#89DDFF;"> === item.label ? </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">is-cur</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">]&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        @click=&quot;handleCatClick(item.label)&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;span </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curType !== &#39;tag&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> item.num </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> :class=&quot;[curType !== </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tag</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> ? </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">docs-categor-num</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">docs-tag-num</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          :style=&quot;{ backgroundColor: item.color }&quot;&gt;{{</span></span>
<span class="line"><span style="color:#89DDFF;">              item.label</span></span>
<span class="line"><span style="color:#89DDFF;">          }}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;DocList :filter=&quot;curFilter&quot; :type=&quot;curType&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.wy-cat </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">top: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  flex</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">direction: column;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">.wy-cat .docs-list </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 20px </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">.cat-item:hover,</span></span>
<span class="line"><span style="color:#A6ACCD;">.tag-item:hover,</span></span>
<span class="line"><span style="color:#A6ACCD;">.is-cur </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  background: #42b883;</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #fff;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">.cat-wrap </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">  flex</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">wrap: wrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">  font</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">size: 14px;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">.cat-wrap&gt;div </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  margin</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">right: 20px;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">.cat-item,</span></span>
<span class="line"><span style="color:#A6ACCD;">.tag-item </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">  justify</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">content: space</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">between;</span></span>
<span class="line"><span style="color:#A6ACCD;">  align</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">  cursor: pointer;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">radius: 4px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  min</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">width: 110px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  margin</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">bottom: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  box</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">shadow: </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> 1px 8px </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  transition: all 0</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">5s;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">.cat-item .docs-categor-num </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 2px 6px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  width: unset;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">.tag-item </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  min</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">width: unset;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">.tag-item .docs-tag-num </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  padding: 2px 6px;</span></span>
<span class="line"><span style="color:#A6ACCD;">  border</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">radius: 4px;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这样就好了</p>`,9),e=[o];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};
