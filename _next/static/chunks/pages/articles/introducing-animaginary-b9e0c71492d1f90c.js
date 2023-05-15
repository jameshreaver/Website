(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{4335:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/introducing-animaginary",function(){return a(9171)}])},3638:function(n,e,a){"use strict";a.d(e,{B:function(){return d}});var s=a(5893),t=a(9008),i=a.n(t),r=a(1163),c=a(7527),o=a(3997),l=a(6010);function u(n){let{children:e,className:a}=n;return(0,s.jsx)("div",{className:(0,l.Z)(a,"prose dark:prose-invert"),children:e})}function p(n){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",...n,children:(0,s.jsx)("path",{d:"M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function d(n){let{children:e,meta:a,isRssFeed:t=!1,previousPathname:l}=n,d=(0,r.useRouter)();return t?e:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:`${a.title} - Spencer Sharp`}),(0,s.jsx)("meta",{name:"description",content:a.description})]}),(0,s.jsx)(c.W,{className:"mt-16 lg:mt-32",children:(0,s.jsx)("div",{className:"xl:relative",children:(0,s.jsxs)("div",{className:"mx-auto max-w-2xl",children:[l&&(0,s.jsx)("button",{type:"button",onClick:()=>d.back(),"aria-label":"Go back to articles",className:"group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0",children:(0,s.jsx)(p,{className:"h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"})}),(0,s.jsxs)("article",{children:[(0,s.jsxs)("header",{className:"flex flex-col",children:[(0,s.jsx)("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",children:a.title}),(0,s.jsxs)("time",{dateTime:a.date,className:"order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",children:[(0,s.jsx)("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}),(0,s.jsx)("span",{className:"ml-3",children:(0,o.p)(a.date)})]})]}),(0,s.jsx)(u,{className:"mt-8",children:e})]})]})})})]})}},3997:function(n,e,a){"use strict";function s(n){return new Date(`${n}T00:00:00Z`).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}a.d(e,{p:function(){return s}})},9171:function(n,e,a){"use strict";a.r(e),a.d(e,{meta:function(){return r}});var s=a(5893),t=a(1151),i=a(3638);let r={author:"Adam Wathan",date:"2022-09-02",title:"Introducing Animaginary: High performance web animations",description:"When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."},c=n=>(0,s.jsx)(i.B,Object.assign({meta:r},n));function o(n){let e=Object.assign({p:"p",pre:"pre",code:"code",span:"span",h2:"h2",a:"a",ol:"ol",li:"li",em:"em",strong:"strong"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."}),"\n",(0,s.jsx)(e.p,{children:"To make this possible, we needed to squeeze every drop of performance out of the browser possible. And so Animaginary was born."}),"\n",(0,s.jsx)(e.pre,{className:"language-js",children:(0,s.jsxs)(e.code,{className:"language-js",children:[(0,s.jsx)(e.span,{className:"token keyword module",children:"import"})," ",(0,s.jsxs)(e.span,{className:"token imports",children:[(0,s.jsx)(e.span,{className:"token punctuation",children:"{"})," animate ",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"})]})," ",(0,s.jsx)(e.span,{className:"token keyword module",children:"from"})," ",(0,s.jsx)(e.span,{className:"token string",children:"'@planetaria/animaginary'"}),"\n\n",(0,s.jsx)(e.span,{className:"token keyword module",children:"export"})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"function"})," ",(0,s.jsx)(e.span,{className:"token function",children:(0,s.jsx)(e.span,{className:"token maybe-class-name",children:"MyComponent"})}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsxs)(e.span,{className:"token parameter",children:[(0,s.jsx)(e.span,{className:"token punctuation",children:"{"})," open",(0,s.jsx)(e.span,{className:"token punctuation",children:","})," children ",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"})]}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  ",(0,s.jsx)(e.span,{className:"token keyword control-flow",children:"return"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"\n    ",(0,s.jsx)(e.span,{className:"token operator",children:"<"}),"animate",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),(0,s.jsx)(e.span,{className:"token property-access",children:"div"}),"\n      ",(0,s.jsx)(e.span,{className:"token keyword",children:"in"}),(0,s.jsx)(e.span,{className:"token operator",children:"="}),(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"open",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n      animateFrom",(0,s.jsx)(e.span,{className:"token operator",children:"="}),(0,s.jsx)(e.span,{className:"token string",children:'"opacity-0 scale-95"'}),"\n      animateTo",(0,s.jsx)(e.span,{className:"token operator",children:"="}),(0,s.jsx)(e.span,{className:"token string",children:'"opacity-100 scale-100"'}),"\n      duration",(0,s.jsx)(e.span,{className:"token operator",children:"="}),(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),(0,s.jsx)(e.span,{className:"token number",children:"350"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n    ",(0,s.jsx)(e.span,{className:"token operator",children:">"}),"\n      ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"children",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n    ",(0,s.jsx)(e.span,{className:"token operator",children:"<"}),(0,s.jsx)(e.span,{className:"token operator",children:"/"}),"animate",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),(0,s.jsx)(e.span,{className:"token property-access",children:"div"}),(0,s.jsx)(e.span,{className:"token operator",children:">"}),"\n  ",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),"\n",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,s.jsxs)(e.p,{children:["Animaginary is our new web animation library that redefines what you thought was possible on the web. Hand-written in optimized WASM, Animaginary can even animate the ",(0,s.jsx)(e.code,{children:"height"})," property of an element at 60fps."]}),"\n",(0,s.jsx)(e.h2,{children:"Sermone fata"}),"\n",(0,s.jsxs)(e.p,{children:["Lorem markdownum, bracchia in redibam! Terque unda puppi nec, linguae posterior\nin utraque respicere candidus Mimasque formae; quae conantem cervice. Parcite\nvariatus, redolentia adeunt. Tyrioque dies, naufraga sua adit partibus celanda\ntorquere temptata, erit maneat et ramos, ",(0,s.jsx)(e.a,{href:"#",children:"iam"})," ait dominari\npotitus! Tibi litora matremque fumantia condi radicibus opusque."]}),"\n",(0,s.jsxs)(e.p,{children:["Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur\nlevitate quas ubi arcum ripas oculos abest. Adest ",(0,s.jsx)(e.a,{href:"#",children:"commissaque\nvictae"})," in gemitus nectareis ire diva\ndotibus ora, et findi huic invenit; fatis? Fractaque dare superinposita\nnimiumque simulatoremque sanguine, at voce aestibus diu! Quid veterum hausit tu\nnil utinam paternos ima, commentaque."]}),"\n",(0,s.jsx)(e.pre,{className:"language-c",children:(0,s.jsxs)(e.code,{className:"language-c",children:["exbibyte_wins ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," ",(0,s.jsx)(e.span,{className:"token function",children:"gigahertz"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token number",children:"3"}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\ngrayscaleUtilityClient ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," control_uat",(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\npcmciaHibernate ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," ",(0,s.jsx)(e.span,{className:"token function",children:"oop_virus_console"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"text_mountain",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,s.jsx)(e.span,{className:"token keyword",children:"if"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"stateWaisFirewire ",(0,s.jsx)(e.span,{className:"token operator",children:">="})," ",(0,s.jsx)(e.span,{className:"token operator",children:"-"}),(0,s.jsx)(e.span,{className:"token number",children:"2"}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    jfs ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," ",(0,s.jsx)(e.span,{className:"token number",children:"647065"})," ",(0,s.jsx)(e.span,{className:"token operator",children:"/"})," ",(0,s.jsx)(e.span,{className:"token function",children:"ldapVrml"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"tutorialRestore",(0,s.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,s.jsx)(e.span,{className:"token number",children:"85"}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    metal_runtime_parse ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," roomComputingResolution ",(0,s.jsx)(e.span,{className:"token operator",children:"-"})," toolbarUpload ",(0,s.jsx)(e.span,{className:"token operator",children:"+"}),"\n            ipx_nvram_open",(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"})," ",(0,s.jsx)(e.span,{className:"token keyword",children:"else"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    maximizeSidebar ",(0,s.jsx)(e.span,{className:"token operator",children:"*="})," ",(0,s.jsx)(e.span,{className:"token function",children:"suffix_url"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"flatbed ",(0,s.jsx)(e.span,{className:"token operator",children:"+"})," ",(0,s.jsx)(e.span,{className:"token number",children:"2"}),(0,s.jsx)(e.span,{className:"token punctuation",children:","})," requirements_encoding_node ",(0,s.jsx)(e.span,{className:"token operator",children:"+"}),"\n            only_qbe_media",(0,s.jsx)(e.span,{className:"token punctuation",children:","})," minicomputer",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"Aere repetiti cognataque natus. Habebat vela solutis saepe munus nondum adhuc\noscula nomina pignora corpus deserat."}),"\n",(0,s.jsx)(e.h2,{children:"Lethaei Pindumve me quae dinumerat Pavor"}),"\n",(0,s.jsx)(e.p,{children:"Idem se saxa fata pollentibus geminos; quos pedibus. Est urnis Herses omnes nec\ndivite: et ille illa furit sim verbis Cyllenius."}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Captus inpleverunt collo"}),"\n",(0,s.jsx)(e.li,{children:"Nec nam placebant"}),"\n",(0,s.jsx)(e.li,{children:"Siquos vulgus"}),"\n",(0,s.jsx)(e.li,{children:"Dictis carissime fugae"}),"\n",(0,s.jsx)(e.li,{children:"A tacitos nulla viginti"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Ungues fistula annoso, ille addit linoque motatque uberior verso\n",(0,s.jsx)(e.a,{href:"#",children:"rubuerunt"})," confine desuetaque. ",(0,s.jsx)(e.em,{children:"Sanguine"})," anteit\nemerguntque expugnacior est pennas iniqui ecce ",(0,s.jsx)(e.strong,{children:"haeret"})," genus: peiora imagine\nfossas Cephisos formosa! Refugitque amata ",(0,s.jsx)(e.a,{href:"#",children:"refelli"}),"\nsupplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit, arreptum\nregna. Postquam conpescit iuvenis habet corpus, et erratica, perdere, tot mota\nars talis."]}),"\n",(0,s.jsx)(e.pre,{className:"language-c",children:(0,s.jsxs)(e.code,{className:"language-c",children:["digital",(0,s.jsx)(e.span,{className:"token punctuation",children:"."}),"webcam_dual_frequency ",(0,s.jsx)(e.span,{className:"token operator",children:"="})," webmasterMms",(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,s.jsx)(e.span,{className:"token keyword",children:"if"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token number",children:"5"})," ",(0,s.jsx)(e.span,{className:"token operator",children:"+"})," language_standalone_google",(0,s.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,s.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    cc_inbox_layout ",(0,s.jsx)(e.span,{className:"token operator",children:"*="})," file_character",(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    task ",(0,s.jsx)(e.span,{className:"token operator",children:"+="})," p",(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n    lockUnicode ",(0,s.jsx)(e.span,{className:"token operator",children:"+="})," ",(0,s.jsx)(e.span,{className:"token function",children:"enterprise_monochrome"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"tokenFunctionPersonal",(0,s.jsx)(e.span,{className:"token punctuation",children:","})," keyVirtual",(0,s.jsx)(e.span,{className:"token punctuation",children:","}),"\n            adf",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n",(0,s.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n",(0,s.jsx)(e.span,{className:"token function",children:"windows_binary_esports"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token number",children:"87734"}),(0,s.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,s.jsx)(e.span,{className:"token function",children:"array"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),"restoreRomTopology",(0,s.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,s.jsx)(e.span,{className:"token function",children:"adRaw"}),(0,s.jsx)(e.span,{className:"token punctuation",children:"("}),(0,s.jsx)(e.span,{className:"token number",children:"407314"}),(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:","}),"\n        dongleBashThumbnail",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:","})," interpreter",(0,s.jsx)(e.span,{className:"token punctuation",children:")"}),(0,s.jsx)(e.span,{className:"token punctuation",children:";"}),"\n"]})}),"\n",(0,s.jsxs)(e.p,{children:["Sit volat naturam; motu Cancri. Erat pro simul quae valuit quoque timorem quam\nproelia: illo patrio ",(0,s.jsx)(e.em,{children:"esse summus"}),", enim sua serpentibus, Hyleusque. Est coniuge\nrecuso; refert Coroniden ignotos manat, adfectu."]})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(c,Object.assign({},n,{children:(0,s.jsx)(o,n)}))}},9008:function(n,e,a){n.exports=a(3121)},1151:function(n,e,a){"use strict";a.d(e,{ah:function(){return i}});var s=a(7294);let t=s.createContext({});function i(n){let e=s.useContext(t);return s.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=4335)}),_N_E=n.O()}]);