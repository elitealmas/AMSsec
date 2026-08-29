(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Boot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Boot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Desktop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Desktop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Recruiter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Recruiter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading");
    const [initial, setInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>setState(localStorage.getItem("amssec-booted") === "true" ? "desktop" : "boot")
    }["Home.useEffect"], []);
    const done = (mode = "desktop")=>{
        localStorage.setItem("amssec-booted", "true");
        if (mode === "recruiter") setState("recruiter");
        else if (mode === "recovery") setState("recovery");
        else {
            setInitial(mode === "labs" ? "labs" : undefined);
            setState("desktop");
        }
    };
    if (state === "loading") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "loading",
        children: "Mounting AmsSec environment…"
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 529
    }, this);
    if (state === "boot") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Boot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Boot"], {
        onComplete: done
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 616
    }, this);
    if (state === "recruiter") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Recruiter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Recruiter"], {
        back: ()=>setState("desktop")
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 672
    }, this);
    if (state === "recovery") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "recovery",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                children: [
                    "Running career recovery...",
                    `\n\n`,
                    "Checking certifications ........ [ OK ]",
                    `\n`,
                    "Checking cybersecurity labs .... [ OK ]",
                    `\n`,
                    "Checking leadership ............ [ OK ]",
                    `\n`,
                    "Checking GitHub activity ....... [ OK ]",
                    `\n\n`,
                    "Searching job market...",
                    `\n\n`,
                    "Suggested action:",
                    `\n`,
                    "contact --operator almas"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 6,
                columnNumber: 772
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setState("desktop"),
                children: "Return to desktop"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 6,
                columnNumber: 1077
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 745
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Desktop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Desktop"], {
        initialApp: initial,
        goRecruiter: ()=>setState("recruiter"),
        restart: ()=>{
            localStorage.removeItem("amssec-booted");
            setState("boot");
        }
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 6,
        columnNumber: 1160
    }, this);
}
_s(Home, "9HtI53dHV5W/YG6PjXhyRZ+OMf0=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Boot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Boot",
    ()=>Boot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const logs = [
    "Initializing AmsSec kernel...",
    "Loading cybersecurity modules...",
    "Mounting operator filesystem...",
    "Loading professional profile...",
    "Initializing security lab...",
    "Mounting project repository...",
    "Loading GreCyberSec operations...",
    "Starting graphical environment..."
];
function Boot({ onComplete }) {
    _s();
    const [grub, setGrub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const options = [
        [
            "AmsSec OS",
            "desktop"
        ],
        [
            "Recruiter Mode",
            "recruiter"
        ],
        [
            "Recovery Mode",
            "recovery"
        ]
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Boot.useEffect": ()=>{
            const k = {
                "Boot.useEffect.k": (e)=>{
                    if (grub) {
                        if (e.key === "ArrowDown") setSel({
                            "Boot.useEffect.k": (s)=>(s + 1) % options.length
                        }["Boot.useEffect.k"]);
                        if (e.key === "ArrowUp") setSel({
                            "Boot.useEffect.k": (s)=>(s + options.length - 1) % options.length
                        }["Boot.useEffect.k"]);
                        if (e.key === "Enter") setGrub(false);
                    } else if (e.key === "Enter" && ready) onComplete(options[sel][1]);
                }
            }["Boot.useEffect.k"];
            window.addEventListener("keydown", k);
            return ({
                "Boot.useEffect": ()=>window.removeEventListener("keydown", k)
            })["Boot.useEffect"];
        }
    }["Boot.useEffect"], [
        grub,
        ready,
        onComplete,
        sel,
        options.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Boot.useEffect": ()=>{
            if (grub) return;
            if (shown < logs.length) {
                const t = setTimeout({
                    "Boot.useEffect.t": ()=>setShown({
                            "Boot.useEffect.t": (s)=>s + 1
                        }["Boot.useEffect.t"])
                }["Boot.useEffect.t"], 240 + Math.random() * 220);
                return ({
                    "Boot.useEffect": ()=>clearTimeout(t)
                })["Boot.useEffect"];
            }
            const t = setTimeout({
                "Boot.useEffect.t": ()=>setReady(true)
            }["Boot.useEffect.t"], 450);
            return ({
                "Boot.useEffect": ()=>clearTimeout(t)
            })["Boot.useEffect"];
        }
    }["Boot.useEffect"], [
        grub,
        shown
    ]);
    if (grub) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "boot",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grub",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "GNU GRUB   AmsSec OS"
                }, void 0, false, {
                    fileName: "[project]/src/components/Boot.tsx",
                    lineNumber: 9,
                    columnNumber: 62
                }, this),
                options.map(([name], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSel(i);
                            setGrub(false);
                        },
                        className: i === sel ? "selected" : "",
                        children: [
                            i === sel ? "* " : "  ",
                            name
                        ]
                    }, name, true, {
                        fileName: "[project]/src/components/Boot.tsx",
                        lineNumber: 9,
                        columnNumber: 119
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                    children: "Use ↑ ↓ and ENTER, or select an environment."
                }, void 0, false, {
                    fileName: "[project]/src/components/Boot.tsx",
                    lineNumber: 9,
                    columnNumber: 249
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "skip",
                    onClick: ()=>onComplete("desktop"),
                    children: "Skip Boot"
                }, void 0, false, {
                    fileName: "[project]/src/components/Boot.tsx",
                    lineNumber: 9,
                    columnNumber: 308
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Boot.tsx",
            lineNumber: 9,
            columnNumber: 40
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Boot.tsx",
        lineNumber: 9,
        columnNumber: 17
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "boot",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bootlog",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bootbrand",
                        "aria-label": "AmsSec OS",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 74 74",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M37 4 64 18v22L37 69 10 40V18L37 4Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Boot.tsx",
                                        lineNumber: 10,
                                        columnNumber: 151
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m22 39 10-17 5 10 6-10 10 17-8 12H30l-8-12Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Boot.tsx",
                                        lineNumber: 10,
                                        columnNumber: 198
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Boot.tsx",
                                lineNumber: 10,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: [
                                            "AmsSec ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Secure Boot v1.0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Boot.tsx",
                                                lineNumber: 10,
                                                columnNumber: 275
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Boot.tsx",
                                        lineNumber: 10,
                                        columnNumber: 264
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "ORIGINAL AMSSEC OS BOOT EMBLEM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Boot.tsx",
                                        lineNumber: 10,
                                        columnNumber: 309
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Boot.tsx",
                                lineNumber: 10,
                                columnNumber: 259
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Boot.tsx",
                        lineNumber: 10,
                        columnNumber: 57
                    }, this),
                    logs.slice(0, shown).map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "[ OK ]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Boot.tsx",
                                    lineNumber: 10,
                                    columnNumber: 405
                                }, this),
                                " ",
                                l
                            ]
                        }, l, true, {
                            fileName: "[project]/src/components/Boot.tsx",
                            lineNumber: 10,
                            columnNumber: 394
                        }, this)),
                    ready && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "bootready",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "AmsSec OS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Boot.tsx",
                                lineNumber: 10,
                                columnNumber: 514
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Operator: Mohammed Almas Akkalath",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/Boot.tsx",
                                        lineNumber: 10,
                                        columnNumber: 568
                                    }, this),
                                    "Environment: Cybersecurity & Digital Forensics"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Boot.tsx",
                                lineNumber: 10,
                                columnNumber: 532
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onComplete(options[sel][1]),
                                children: "Press ENTER to continue"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Boot.tsx",
                                lineNumber: 10,
                                columnNumber: 627
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Boot.tsx",
                        lineNumber: 10,
                        columnNumber: 436
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Boot.tsx",
                lineNumber: 10,
                columnNumber: 32
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "skip",
                onClick: ()=>onComplete("desktop"),
                children: "Skip Boot"
            }, void 0, false, {
                fileName: "[project]/src/components/Boot.tsx",
                lineNumber: 10,
                columnNumber: 729
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Boot.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(Boot, "SMAUrSNOBXat+k1OMdtAh4NnK/s=");
_c = Boot;
var _c;
__turbopack_context__.k.register(_c, "Boot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Desktop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Desktop",
    ()=>Desktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/lucide-react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Terminal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractionLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InteractionLayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/filesystem.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const apps = [
    {
        id: "about",
        name: "About Me",
        category: "Portfolio",
        icon: "UserRound"
    },
    {
        id: "experience",
        name: "Experience",
        category: "Portfolio",
        icon: "ScrollText"
    },
    {
        id: "projects",
        name: "Projects",
        category: "Portfolio",
        icon: "FolderKanban"
    },
    {
        id: "grecybersec",
        name: "GreCyberSec",
        category: "Portfolio",
        icon: "Radio"
    },
    {
        id: "certifications",
        name: "Certifications",
        category: "Security",
        icon: "BadgeCheck"
    },
    {
        id: "education",
        name: "Education",
        category: "Portfolio",
        icon: "GraduationCap"
    },
    {
        id: "skills",
        name: "Skills",
        category: "Development",
        icon: "ShieldCheck"
    },
    {
        id: "files",
        name: "File Manager",
        category: "System",
        icon: "FolderOpen"
    },
    {
        id: "terminal",
        name: "Terminal",
        category: "System",
        icon: "TerminalSquare"
    },
    {
        id: "monitor",
        name: "System Monitor",
        category: "System",
        icon: "Activity"
    },
    {
        id: "mitre",
        name: "ATT&CK Matrix",
        category: "Security",
        icon: "Grid3X3"
    },
    {
        id: "network",
        name: "Network Map",
        category: "Security",
        icon: "Network"
    },
    {
        id: "contact",
        name: "Contact",
        category: "Portfolio",
        icon: "Send"
    },
    {
        id: "cv",
        name: "CV Viewer",
        category: "Portfolio",
        icon: "FileText"
    },
    {
        id: "settings",
        name: "Settings",
        category: "System",
        icon: "Settings"
    }
];
const icon = (name, size = 20)=>{
    const C = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[name];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(C, {
        size: size
    }, void 0, false, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 11,
        columnNumber: 106
    }, ("TURBOPACK compile-time value", void 0));
};
function Desktop({ goRecruiter, restart, initialApp }) {
    _s();
    const [wins, setWins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialApp ? [
        {
            id: initialApp,
            z: 2
        }
    ] : []), [launch, setLaunch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [clock, setClock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date()), [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Desktop.useEffect": ()=>{
            const t = setInterval({
                "Desktop.useEffect.t": ()=>setClock(new Date())
            }["Desktop.useEffect.t"], 1000);
            const k = {
                "Desktop.useEffect.k": (e)=>{
                    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "t") {
                        e.preventDefault();
                        open("terminal");
                    }
                    if (e.ctrlKey && e.key.toLowerCase() === "k") {
                        e.preventDefault();
                        setLaunch(true);
                    }
                    if (e.key === "Escape") {
                        setLaunch(false);
                        setMenu(null);
                    }
                }
            }["Desktop.useEffect.k"];
            window.addEventListener("keydown", k);
            setTimeout({
                "Desktop.useEffect": ()=>setToast("")
            }["Desktop.useEffect"], 4500);
            return ({
                "Desktop.useEffect": ()=>{
                    clearInterval(t);
                    window.removeEventListener("keydown", k);
                }
            })["Desktop.useEffect"];
        }
    }["Desktop.useEffect"], []);
    const open = (id)=>{
        setLaunch(false);
        setMenu(null);
        setWins((w)=>w.some((x)=>x.id === id) ? w.map((x)=>x.id === id ? {
                    ...x,
                    min: false,
                    z: Math.max(...w.map((v)=>v.z), 1) + 1
                } : x) : [
                ...w,
                {
                    id,
                    z: Math.max(...w.map((v)=>v.z), 1) + 1
                }
            ]);
    };
    const close = (id)=>setWins((w)=>w.filter((x)=>x.id !== id));
    const update = (id, k)=>setWins((w)=>w.map((x)=>x.id === id ? {
                    ...x,
                    [k]: !x[k]
                } : x));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "desktop",
        onContextMenu: (e)=>{
            if (e.target.closest(".window")) return;
            e.preventDefault();
            setMenu({
                x: e.clientX,
                y: e.clientY
            });
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InteractionLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractionLayer"], {}, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 16,
                columnNumber: 165
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "brand",
                        onClick: ()=>setLaunch((v)=>!v),
                        "aria-label": "Open AmsSec applications",
                        children: [
                            "◈ ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "AmsSec"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 16,
                                columnNumber: 308
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 16,
                        columnNumber: 211
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "quick",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>open("files"),
                                children: [
                                    icon("FolderOpen", 16),
                                    " Files"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 16,
                                columnNumber: 359
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>open("terminal"),
                                children: [
                                    icon("TerminalSquare", 16),
                                    " Terminal"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 16,
                                columnNumber: 433
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>open("projects"),
                                children: [
                                    icon("FolderKanban", 16),
                                    " Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 16,
                                columnNumber: 517
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 16,
                        columnNumber: 336
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Wifi, {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 16,
                                columnNumber: 629
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ShieldCheck, {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 16,
                                columnNumber: 648
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Volume2, {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 16,
                                columnNumber: 674
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: clock.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 16,
                                columnNumber: 696
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: goRecruiter,
                                children: "Recruiter Mode"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 16,
                                columnNumber: 773
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 16,
                        columnNumber: 605
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 16,
                columnNumber: 184
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "desktop-icons",
                children: apps.filter((a)=>[
                        "about",
                        "projects",
                        "experience",
                        "grecybersec",
                        "certifications",
                        "skills",
                        "terminal",
                        "contact"
                    ].includes(a.id)).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "deskicon",
                        onDoubleClick: ()=>open(a.id),
                        onClick: ()=>open(a.id),
                        children: [
                            icon(a.icon, 31),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: a.id === "about" ? "about_me.txt" : a.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 17,
                                columnNumber: 284
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 17,
                        columnNumber: 171
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 17,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: wins.filter((w)=>!w.min).map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Window, {
                        win: w,
                        app: apps.find((a)=>a.id === w.id) || {
                            id: w.id,
                            name: w.id,
                            category: "",
                            icon: "FileText"
                        },
                        focus: ()=>setWins((s)=>s.map((x)=>x.id === w.id ? {
                                        ...x,
                                        z: Math.max(...s.map((v)=>v.z)) + 1
                                    } : x)),
                        close: close,
                        update: update,
                        children: content(w.id, open, goRecruiter)
                    }, `${w.id}-${w.max ? "max" : "window"}`, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 18,
                        columnNumber: 50
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 18,
                columnNumber: 2
            }, this),
            wins.some((w)=>w.min) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tasklist",
                children: wins.filter((w)=>w.min).map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>update(w.id, "min"),
                        children: apps.find((a)=>a.id === w.id)?.name || w.id
                    }, w.id, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 19,
                        columnNumber: 80
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 19,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: launch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Launcher, {
                    open: open
                }, void 0, false, {
                    fileName: "[project]/src/components/Desktop.tsx",
                    lineNumber: 20,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 20,
                columnNumber: 2
            }, this),
            menu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "context",
                style: {
                    left: menu.x,
                    top: menu.y
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>open("terminal"),
                        children: "Open Terminal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 20,
                        columnNumber: 135
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMenu(null),
                        children: "Refresh Desktop"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 20,
                        columnNumber: 196
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>open("monitor"),
                        children: "System Monitor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 20,
                        columnNumber: 256
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goRecruiter,
                        children: "Recruiter Mode"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 20,
                        columnNumber: 317
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>open("about"),
                        children: "About AmsSec"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 20,
                        columnNumber: 370
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 20,
                columnNumber: 77
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.ShieldCheck, {}, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 20,
                        columnNumber: 465
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "AmsSec Security"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 20,
                                columnNumber: 488
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 20,
                                columnNumber: 510
                            }, this),
                            toast
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 20,
                        columnNumber: 482
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 20,
                columnNumber: 442
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "restart",
                onClick: restart,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.RotateCcw, {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 20,
                        columnNumber: 582
                    }, this),
                    " Restart AmsSec OS"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 20,
                columnNumber: 536
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_s(Desktop, "lEH+/B9vKOaB1z9x7XfvkhbBUMM=");
_c = Desktop;
function Launcher({ open }) {
    _s1();
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const match = apps.filter((a)=>a.name.toLowerCase().includes(q.toLowerCase()) || a.category.toLowerCase().includes(q.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 12
        },
        className: "launcher",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "launcher-title",
                children: [
                    "AmsSec ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "APPLICATIONS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 21,
                        columnNumber: 363
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 21,
                columnNumber: 324
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                autoFocus: true,
                placeholder: "Search applications… (Ctrl K)",
                value: q,
                onChange: (e)=>setQ(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 21,
                columnNumber: 396
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "appgrid",
                children: match.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>open(a.id),
                        children: [
                            icon(a.icon, 20),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    a.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: a.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Desktop.tsx",
                                        lineNumber: 21,
                                        columnNumber: 617
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 21,
                                columnNumber: 603
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 21,
                        columnNumber: 542
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 21,
                columnNumber: 503
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 21,
        columnNumber: 214
    }, this);
}
_s1(Launcher, "xnqptO6ZXf1kwihFH/1CysWbiz0=");
_c1 = Launcher;
function Window({ win, app, children, close, update, focus }) {
    _s2();
    const dragControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        drag: !win.max,
        dragControls: dragControls,
        dragListener: false,
        dragMomentum: false,
        dragElastic: .04,
        dragConstraints: {
            left: -190,
            right: 360,
            top: -5,
            bottom: 260
        },
        initial: {
            opacity: 0,
            scale: .92,
            y: 24
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: .92,
            y: 24,
            transition: {
                duration: .16
            }
        },
        transition: {
            type: "spring",
            stiffness: 360,
            damping: 29
        },
        className: `window ${win.max ? "max" : ""} win-${app.id}`,
        style: {
            zIndex: win.z
        },
        onMouseDown: focus,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "windowbar",
                onPointerDown: (event)=>{
                    if (!win.max) dragControls.start(event);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            icon(app.icon, 16),
                            " ",
                            app.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 22,
                        columnNumber: 775
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onPointerDown: (event)=>event.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Minimize",
                                onClick: ()=>update(win.id, "min"),
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 22,
                                columnNumber: 870
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Maximize",
                                onClick: ()=>update(win.id, "max"),
                                children: "□"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 22,
                                columnNumber: 945
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": "Close",
                                className: "close",
                                onClick: ()=>close(win.id),
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 22,
                                columnNumber: 1020
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 22,
                        columnNumber: 818
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 22,
                columnNumber: 682
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "windowcontent",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 22,
                columnNumber: 1118
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 22,
        columnNumber: 221
    }, this);
}
_s2(Window, "7EAh+g50QNP9Fq5c54QuV6eywWY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"]
    ];
});
_c2 = Window;
function content(id, open, recruiter) {
    if (id === "terminal") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"], {
        openApp: open
    }, void 0, false, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 113
    }, this);
    if (id === "about") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "about",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "OPERATOR PROFILE / HOME DIRECTORY"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 190
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: [
                    "Mohammed Almas",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 268
                    }, this),
                    "Akkalath"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 250
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].summary
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 286
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chips",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "ISC² CC"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 333
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Digital Forensics"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 353
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Security Labs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 383
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "GreCyberSec President"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 409
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 310
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "primary",
                onClick: recruiter,
                children: "Open Recruiter Mode →"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 449
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 163
    }, this);
    if (id === "projects") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Projects, {
        open: open
    }, void 0, false, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 564
    }, this);
    if (id.startsWith("project:")) {
        const p = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.id === id.slice(8));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Project, {
            p: p
        }, void 0, false, {
            fileName: "[project]/src/components/Desktop.tsx",
            lineNumber: 23,
            columnNumber: 670
        }, this);
    }
    ;
    if (id === "experience") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "operations",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "OPERATION LOG / VERIFIED EXPERIENCE"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 748
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "timeline",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                    fileName: "[project]/src/components/Desktop.tsx",
                                    lineNumber: 23,
                                    columnNumber: 877
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: e.dates
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Desktop.tsx",
                                    lineNumber: 23,
                                    columnNumber: 884
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 872
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: e.role
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 912
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: e.org
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 929
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: e.items.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: x
                                }, x, false, {
                                    fileName: "[project]/src/components/Desktop.tsx",
                                    lineNumber: 23,
                                    columnNumber: 963
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 943
                        }, this)
                    ]
                }, e.role, true, {
                    fileName: "[project]/src/components/Desktop.tsx",
                    lineNumber: 23,
                    columnNumber: 829
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 716
    }, this);
    if (id === "files") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Files, {
        open: open
    }, void 0, false, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 1036
    }, this);
    if (id === "skills") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "EVIDENCE-BASED CAPABILITIES"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1090
            }, this),
            Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillGroups"]).map(([group, skills])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "skillgroup",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: group
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 1235
                        }, this),
                        skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>open("projects"),
                                children: s
                            }, s, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 1266
                            }, this))
                    ]
                }, group, true, {
                    fileName: "[project]/src/components/Desktop.tsx",
                    lineNumber: 23,
                    columnNumber: 1195
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 1081
    }, this);
    if (id === "certifications") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "INSTALLED SECURITY PACKAGES"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1387
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "certs",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certifications"].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: i === 0 ? "featured" : "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "PACKAGE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 1540
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: i === 0 ? "ISC² CC" : c
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 1562
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Desktop.tsx",
                                        lineNumber: 23,
                                        columnNumber: 1593
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/Desktop.tsx",
                                        lineNumber: 23,
                                        columnNumber: 1606
                                    }, this),
                                    i === 0 ? "CERTIFIED" : "Completed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 1590
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: c
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 1646
                            }, this)
                        ]
                    }, c, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 1491
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1441
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 1378
    }, this);
    if (id === "education") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "config",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "ACADEMIC MODULE RECORD"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1740
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].university
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1789
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "London, UK"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1818
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1835
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].degree
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1840
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].dates
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1865
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                children: 'relevant_coursework = ["Cybersecurity Fundamentals", "Networking & Network Security", "Digital Forensics & Incident Response", "Ethical Hacking", "Vulnerability Analysis"]'
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 1887
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 1712
    }, this);
    if (id === "labs") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "CYBER LABS / PRACTICE ENVIRONMENTS"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 2111
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filters",
                children: "Difficulty: Any   Platform: Any   Status: Any"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 2172
            }, this),
            [
                "TryHackMe",
                "Hack The Box",
                "VulnHub",
                "Personal Lab",
                "Networking Labs",
                "Forensics Labs"
            ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "lab",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: x
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 2388
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Project documentation / machine write-ups coming soon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 2398
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "Planned"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 2464
                        }, this)
                    ]
                }, x, true, {
                    fileName: "[project]/src/components/Desktop.tsx",
                    lineNumber: 23,
                    columnNumber: 2355
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 2102
    }, this);
    if (id === "grecybersec") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "command",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "GRECYBERSEC COMMAND CENTER"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 2561
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "President / University of Greenwich"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 2614
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "metrics",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: [
                            "100+",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "STUDENTS ENGAGED"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 2690
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 2683
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: [
                            "10+",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "EVENTS & WORKSHOPS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 2731
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 2725
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: [
                            "5+",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: "TECHNICAL SESSIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 2773
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 2768
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 2658
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Mission Log"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 2816
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Building a practical, welcoming cybersecurity community through workshops, CTF activities, industry-focused talks and career development."
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 2836
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "gre-link",
                href: "https://www.grecybersec.co.uk/",
                target: "_blank",
                rel: "noreferrer",
                children: "Visit the GreCyberSec website ↗"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 2980
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pending",
                children: [
                    "EVENTS · WORKSHOPS · CTFS · INDUSTRY SPEAKERS",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 3180
                    }, this),
                    "Details will be added as records are published."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 3110
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 2532
    }, this);
    if (id === "research") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "RESEARCH WORKSPACE"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 3284
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "research",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "RESEARCH CONCEPT"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 3355
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "LLM-Assisted Security Verification of Infrastructure-as-Code"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 3386
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Cloud Security · AI Security · Infrastructure-as-Code · Security Verification"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 3455
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Research direction — no research outcomes claimed."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 3539
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 3329
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chips",
                children: [
                    "Cybersecurity",
                    "Artificial Intelligence and Security",
                    "Cloud Security",
                    "Network Security",
                    "Digital Forensics",
                    "Formal Verification"
                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: x
                    }, x, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 3774
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 3608
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 3275
    }, this);
    if (id === "mitre") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "MITRE ATT&CK-INSPIRED EVIDENCE MAP"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 3849
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mitre",
                children: [
                    "Reconnaissance",
                    "Initial Access",
                    "Execution",
                    "Persistence",
                    "Privilege Escalation",
                    "Credential Access",
                    "Discovery",
                    "Lateral Movement",
                    "Collection",
                    "Command and Control"
                ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: x
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 4133
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: i === 4 || i === 6 ? "Active Directory Security Lab" : "Evidence mapped as project documentation develops"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 23,
                                columnNumber: 4143
                            }, this)
                        ]
                    }, x, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 4116
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 3910
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 3840
    }, this);
    if (id === "network") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "OPERATOR NETWORK MAP"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 4317
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "networkmap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Mohammed Almas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 4392
                    }, this),
                    [
                        "Cybersecurity",
                        "Digital Forensics",
                        "Networking",
                        "Programming",
                        "Leadership",
                        "Research"
                    ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "↳ ",
                                x
                            ]
                        }, x, true, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 4510
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 4364
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 4308
    }, this);
    if (id === "monitor") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "monitor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "AMSSEC SYSTEM MONITOR"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 4609
            }, this),
            [
                [
                    "Portfolio Modules",
                    "12"
                ],
                [
                    "Project Case Files",
                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length)
                ],
                [
                    "Cybersecurity Domains",
                    "8"
                ],
                [
                    "Certifications",
                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certifications"].length)
                ],
                [
                    "Leadership Role",
                    "Active"
                ],
                [
                    "Research Status",
                    "Exploring"
                ]
            ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: x[0]
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 4897
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: x[1]
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 4916
                        }, this)
                    ]
                }, x[0], true, {
                    fileName: "[project]/src/components/Desktop.tsx",
                    lineNumber: 23,
                    columnNumber: 4881
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "note",
                children: "Metrics describe this portfolio environment, not real system telemetry."
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 4937
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 4580
    }, this);
    if (id === "contact") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "contact",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "SECURE COMMUNICATIONS CHANNEL"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 5097
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Let's connect."
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 5153
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 5181
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "primary",
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                        children: "Send Email"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 5241
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                        target: "_blank",
                        children: "Open LinkedIn"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 5311
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].github,
                        target: "_blank",
                        children: "Open GitHub"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 23,
                        columnNumber: 5371
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 5236
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 5068
    }, this);
    if (id === "cv") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "cv",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.FileWarning, {
                size: 44
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 5488
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "CV file not yet installed."
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 5514
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Set the CV file path in the central portfolio data when ready."
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 5549
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: true,
                children: "Download CV"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 5618
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 5464
    }, this);
    if (id === "settings") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "SYSTEM PREFERENCES"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 23,
                columnNumber: 5701
            }, this),
            [
                "Boot animation",
                "Sound effects",
                "Motion",
                "Terminal font size",
                "Wallpaper selection",
                "Desktop icon size"
            ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "setting",
                    children: [
                        x,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: i < 2 ? "checkbox" : "text",
                            defaultChecked: i === 0,
                            defaultValue: i > 1 ? i === 2 ? "Normal" : "Default" : undefined
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 23,
                            columnNumber: 5903
                        }, this)
                    ]
                }, x, true, {
                    fileName: "[project]/src/components/Desktop.tsx",
                    lineNumber: 23,
                    columnNumber: 5865
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 23,
        columnNumber: 5692
    }, this);
    return null;
}
function Projects({ open }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "CASE FILES / PROJECT REPOSITORY"
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 24,
                columnNumber: 67
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "casegrid",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: [
                                    "CASE AMS-",
                                    String(i + 1).padStart(3, "0")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 24,
                                columnNumber: 192
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: p.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 24,
                                columnNumber: 245
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: p.summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 24,
                                columnNumber: 263
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Desktop.tsx",
                                        lineNumber: 24,
                                        columnNumber: 286
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: p.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Desktop.tsx",
                                        lineNumber: 24,
                                        columnNumber: 299
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "ENVIRONMENT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Desktop.tsx",
                                        lineNumber: 24,
                                        columnNumber: 322
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: p.environment.join(" · ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Desktop.tsx",
                                        lineNumber: 24,
                                        columnNumber: 340
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "TOOLS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Desktop.tsx",
                                        lineNumber: 24,
                                        columnNumber: 380
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: p.tools.join(" · ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Desktop.tsx",
                                        lineNumber: 24,
                                        columnNumber: 392
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 24,
                                columnNumber: 281
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>open(`project:${p.id}`),
                                children: "OPEN CASE FILE →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 24,
                                columnNumber: 432
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 24,
                        columnNumber: 172
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 24,
                columnNumber: 125
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 24,
        columnNumber: 58
    }, this);
}
_c3 = Projects;
function Project({ p }) {
    if (!p) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "project",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: [
                    "CASE FILE / ",
                    p.id.toUpperCase()
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 27,
                columnNumber: 38
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: p.title
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 27,
                columnNumber: 97
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: p.summary
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 27,
                columnNumber: 115
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Environment"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 28,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: p.environment.join(" · ")
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 28,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 28,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Tools Used"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 29,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: p.tools.join(" · ")
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 29,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 29,
                columnNumber: 3
            }, this),
            p.methodology?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "project-highlights",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Practical Work"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 30,
                        columnNumber: 68
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: p.methodology.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, item, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 30,
                                columnNumber: 120
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 30,
                        columnNumber: 91
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 30,
                columnNumber: 28
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Technical Architecture"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 30,
                        columnNumber: 175
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Details to be added as documentation is completed."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 30,
                        columnNumber: 206
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 30,
                columnNumber: 166
            }, this),
            p.mitre?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "MITRE ATT&CK Mapping"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 31,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: p.mitre.join(" · ")
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 31,
                        columnNumber: 60
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 31,
                columnNumber: 22
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_c4 = Project;
function Files({ open }) {
    _s3();
    const [parts, setParts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePath"])(parts) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filesystem"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setParts((p)=>p.slice(0, -1)),
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 33,
                        columnNumber: 178
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setParts([]),
                        children: "⌂"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 33,
                        columnNumber: 237
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "/home/almas",
                            parts.length ? "/" + parts.join("/") : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 33,
                        columnNumber: 282
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 33,
                columnNumber: 153
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filegrid",
                children: node.children?.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onDoubleClick: ()=>f.type === "folder" ? setParts((p)=>[
                                    ...p,
                                    f.name
                                ]) : f.app && open(f.app),
                        onClick: ()=>f.type === "folder" ? setParts((p)=>[
                                    ...p,
                                    f.name
                                ]) : f.app && open(f.app),
                        children: [
                            f.type === "folder" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Folder, {}, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 33,
                                columnNumber: 600
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.FileText, {}, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 33,
                                columnNumber: 612
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: f.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 33,
                                columnNumber: 626
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: f.type
                            }, void 0, false, {
                                fileName: "[project]/src/components/Desktop.tsx",
                                lineNumber: 33,
                                columnNumber: 641
                            }, this)
                        ]
                    }, f.name, true, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 33,
                        columnNumber: 398
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 33,
                columnNumber: 349
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 33,
        columnNumber: 144
    }, this);
}
_s3(Files, "o81HLvtlqme9cCPKT/DdzVMIJdM=");
_c5 = Files;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Desktop");
__turbopack_context__.k.register(_c1, "Launcher");
__turbopack_context__.k.register(_c2, "Window");
__turbopack_context__.k.register(_c3, "Projects");
__turbopack_context__.k.register(_c4, "Project");
__turbopack_context__.k.register(_c5, "Files");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InteractionLayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InteractionLayer",
    ()=>InteractionLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function InteractionLayer() {
    _s();
    const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractionLayer.useEffect": ()=>{
            let audio;
            const move = {
                "InteractionLayer.useEffect.move": (event)=>{
                    ring.current?.style.setProperty("transform", `translate3d(${event.clientX - 14}px, ${event.clientY - 14}px, 0)`);
                    ring.current?.classList.toggle("is-hovering", Boolean(event.target?.closest("button, a, input, label")));
                }
            }["InteractionLayer.useEffect.move"];
            const click = {
                "InteractionLayer.useEffect.click": (event)=>{
                    if (!event.target?.closest("button, a, input, label")) return;
                    audio ??= new AudioContext();
                    const oscillator = audio.createOscillator();
                    const gain = audio.createGain();
                    oscillator.type = "sine";
                    oscillator.frequency.setValueAtTime(440, audio.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(280, audio.currentTime + 0.045);
                    gain.gain.setValueAtTime(0.025, audio.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.05);
                    oscillator.connect(gain).connect(audio.destination);
                    oscillator.start();
                    oscillator.stop(audio.currentTime + 0.055);
                }
            }["InteractionLayer.useEffect.click"];
            window.addEventListener("pointermove", move, {
                passive: true
            });
            window.addEventListener("pointerdown", click, {
                passive: true
            });
            return ({
                "InteractionLayer.useEffect": ()=>{
                    window.removeEventListener("pointermove", move);
                    window.removeEventListener("pointerdown", click);
                    void audio?.close();
                }
            })["InteractionLayer.useEffect"];
        }
    }["InteractionLayer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ring,
        className: "cursor-ring",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/InteractionLayer.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_s(InteractionLayer, "mzypYOsyyUKOJVpz1XYVck+H21o=");
_c = InteractionLayer;
var _c;
__turbopack_context__.k.register(_c, "InteractionLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Recruiter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Recruiter",
    ()=>Recruiter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
"use client";
;
;
;
function Recruiter({ back }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "recruiter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "rbrand",
                        href: "#top",
                        children: [
                            "AmsSec",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: " / PROFILE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 132
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 92
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#experience",
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 164
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#projects",
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 200
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 232
                            }, this),
                            back ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: back,
                                children: "Return to AmsSec OS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 268
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                children: "Open AmsSec OS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 320
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 159
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recruiter.tsx",
                lineNumber: 4,
                columnNumber: 87
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "top",
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "CYBERSECURITY & DIGITAL FORENSICS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 398
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Mohammed Almas",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 460
                            }, this),
                            "Akkalath"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 442
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lede",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].summary
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 478
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 580
                                    }, this),
                                    " Get in touch"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 544
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                target: "_blank",
                                children: [
                                    "LinkedIn ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 666
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 614
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].github,
                                target: "_blank",
                                children: [
                                    "GitHub ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 743
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 695
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 519
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recruiter.tsx",
                lineNumber: 4,
                columnNumber: 363
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rsection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "label",
                        children: "PROFILE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 818
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "twocol",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Focused on building practical security understanding."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 874
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "University of Greenwich"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Recruiter.tsx",
                                                lineNumber: 4,
                                                columnNumber: 944
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/Recruiter.tsx",
                                                lineNumber: 4,
                                                columnNumber: 974
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].degree,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/Recruiter.tsx",
                                                lineNumber: 4,
                                                columnNumber: 995
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].dates
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 941
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Certification"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Recruiter.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1022
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/Recruiter.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1042
                                            }, this),
                                            "ISC² Certified in Cybersecurity (CC)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1019
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Leadership"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Recruiter.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1090
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/Recruiter.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1107
                                            }, this),
                                            "President, GreCyberSec Society"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1087
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 936
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 850
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recruiter.tsx",
                lineNumber: 4,
                columnNumber: 788
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "experience",
                className: "rsection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "label",
                        children: "EXPERIENCE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 1214
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "rexperience",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: e.dates
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Recruiter.tsx",
                                            lineNumber: 4,
                                            columnNumber: 1319
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/Recruiter.tsx",
                                            lineNumber: 4,
                                            columnNumber: 1335
                                        }, this),
                                        e.org
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Recruiter.tsx",
                                    lineNumber: 4,
                                    columnNumber: 1314
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: e.role
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Recruiter.tsx",
                                            lineNumber: 4,
                                            columnNumber: 1358
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: e.items.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: x
                                                }, x, false, {
                                                    fileName: "[project]/src/components/Recruiter.tsx",
                                                    lineNumber: 4,
                                                    columnNumber: 1395
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Recruiter.tsx",
                                            lineNumber: 4,
                                            columnNumber: 1375
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Recruiter.tsx",
                                    lineNumber: 4,
                                    columnNumber: 1353
                                }, this)
                            ]
                        }, e.role, true, {
                            fileName: "[project]/src/components/Recruiter.tsx",
                            lineNumber: 4,
                            columnNumber: 1268
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recruiter.tsx",
                lineNumber: 4,
                columnNumber: 1168
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "projects",
                className: "rsection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "label",
                        children: "SELECTED CASE FILES"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 1494
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rprojects",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: p.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1602
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1627
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: p.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1645
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: p.skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/src/components/Recruiter.tsx",
                                                lineNumber: 4,
                                                columnNumber: 1685
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1663
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 1582
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 1538
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recruiter.tsx",
                lineNumber: 4,
                columnNumber: 1450
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rsection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "label",
                        children: "SKILLS & METHODS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 1775
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rskills",
                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillGroups"]).map(([g, s])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: g
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1904
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: s.join(" · ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 1916
                                    }, this)
                                ]
                            }, g, true, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 1887
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 1820
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recruiter.tsx",
                lineNumber: 4,
                columnNumber: 1745
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rsection",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "label",
                        children: "CERTIFICATIONS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 1996
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "certrow",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certifications"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: c
                            }, c, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 2083
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 2035
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recruiter.tsx",
                lineNumber: 4,
                columnNumber: 1966
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "contactcta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "OPEN TO CONVERSATIONS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 2170
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Let's build safer systems."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 2198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {}, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 2290
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 2238
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                target: "_blank",
                                children: "LinkedIn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 2314
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].github,
                                target: "_blank",
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 2369
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: true,
                                title: "CV not yet installed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Recruiter.tsx",
                                        lineNumber: 4,
                                        columnNumber: 2466
                                    }, this),
                                    " Download CV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Recruiter.tsx",
                                lineNumber: 4,
                                columnNumber: 2420
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Recruiter.tsx",
                        lineNumber: 4,
                        columnNumber: 2309
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recruiter.tsx",
                lineNumber: 4,
                columnNumber: 2125
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Mohammed Almas Akkalath · London, UK"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recruiter.tsx",
                lineNumber: 4,
                columnNumber: 2524
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Recruiter.tsx",
        lineNumber: 4,
        columnNumber: 59
    }, this);
}
_c = Recruiter;
var _c;
__turbopack_context__.k.register(_c, "Recruiter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Terminal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Terminal",
    ()=>Terminal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/filesystem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function pathStr(p) {
    return "/home/almas" + (p.length ? "/" + p.join("/") : "");
}
function list(n) {
    return n?.children?.map((x)=>x.name + (x.type === "folder" ? "/" : "")).join("  ") || "";
}
function Terminal({ openApp }) {
    _s();
    const [cwd, setCwd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            output: "Welcome to AmsSec OS. Type 'help' to inspect available commands."
        }
    ]), [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [hi, setHi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            bottom.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["Terminal.useEffect"], [
        lines
    ]);
    const run = (raw)=>{
        const cmd = raw.trim();
        let out = "";
        const [head, ...args] = cmd.split(/\s+/);
        const arg = args.join(" ");
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePath"])(cwd);
        if (!cmd) return;
        setHistory((h)=>[
                ...h,
                cmd
            ]);
        setHi(-1);
        if (head === "help") out = "help ls cd pwd cat tree clear whoami uname history echo date find grep open neofetch skills projects experience education certifications contact society research github linkedin cv";
        else if (head === "ls") out = list(node);
        else if (head === "pwd") out = pathStr(cwd);
        else if (head === "whoami") out = "almas — cybersecurity & digital forensics operator";
        else if (head === "uname") out = "AmsSec OS 1.0.0 browser-x86_64";
        else if (head === "date") out = new Date().toString();
        else if (head === "echo") out = arg;
        else if (head === "clear") {
            setLines([]);
            setValue("");
            return;
        } else if (head === "history") out = history.map((h, i)=>`${i + 1}  ${h}`).join("\n");
        else if (head === "cd") {
            if (!arg || arg === "~") setCwd([]);
            else if (arg === "..") setCwd((p)=>p.slice(0, -1));
            else {
                const dest = arg.startsWith("/") ? arg.replace("/home/almas", "").split("/").filter(Boolean) : [
                    ...cwd,
                    arg
                ];
                const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePath"])(dest);
                if (f?.type === "folder") setCwd(dest);
                else out = `cd: ${arg}: No such directory`;
            }
        } else if (head === "cat") {
            const dest = arg.startsWith("/") ? arg.replace("/home/almas/", "").split("/") : [
                ...cwd,
                arg
            ];
            const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePath"])(dest);
            out = f?.content ?? `cat: ${arg}: No such file`;
        } else if (head === "tree") out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flatten"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filesystem"]).map(({ path, file })=>`${"  ".repeat(path.split("/").length - 3)}${file.type === "folder" ? "▸ " : "· "}${file.name}`).join("\n");
        else if (head === "find") out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flatten"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filesystem"]).filter((x)=>x.file.name.toLowerCase().includes(arg.toLowerCase())).map((x)=>x.path).join("\n") || "No matches.";
        else if (head === "grep") out = "grep searches the AmsSec virtual filesystem. Try: find project";
        else if (head === "open") {
            const found = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flatten"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$filesystem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filesystem"]).find((x)=>x.file.name === arg || x.file.name.replace(/\..*/, "") === arg);
            if (found?.file.app) {
                openApp(found.file.app);
                out = `Opening ${found.file.name}...`;
            } else out = `open: ${arg}: not found`;
        } else if (head === "neofetch") out = `     █████╗ ███╗   ███╗ ███████╗\n    ██╔══██╗████╗ ████║ ██╔════╝     almas@amssec\n    ███████║██╔████╔██║ ███████╗     ─────────────────────\n    ██╔══██║██║╚██╔╝██║ ╚════██║     OS: AmsSec OS\n    ██║  ██║██║ ╚═╝ ██║ ███████║     Host: University of Greenwich\n    ╚═╝  ╚═╝╚═╝     ╚═╝ ╚══════╝     Role: Cybersecurity Student\n                                      Certification: ISC² CC\n                                      Shell: amssec-shell`;
        else if (head === "skills") {
            openApp("skills");
            out = "Opening evidence-based skills inventory...";
        } else if (head === "projects") {
            openApp("projects");
            out = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length} case files mounted.`;
        } else if (head === "experience") {
            openApp("experience");
            out = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].length} operation records available.`;
        } else if (head === "education") {
            openApp("education");
            out = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].university}\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].degree}`;
        } else if (head === "certifications") {
            openApp("certifications");
            out = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certifications"].join("\n");
        } else if (head === "contact") {
            openApp("contact");
            out = `Secure contact channel: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`;
        } else if (head === "society") {
            openApp("grecybersec");
            out = "GreCyberSec command center opening...";
        } else if (head === "research") {
            openApp("research");
            out = "Research workspace opening...";
        } else if (head === "github") {
            window.open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].github, "_blank");
            out = "Opening GitHub...";
        } else if (head === "linkedin") {
            window.open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin, "_blank");
            out = "Opening LinkedIn...";
        } else if (head === "cv") {
            openApp("cv");
            out = "Checking documents...";
        } else if (cmd === "sudo hire almas") {
            out = "Evaluating candidate...\n\nCybersecurity ............ PASS\nTechnical projects ....... PASS\nLeadership ............... PASS\nCuriosity ................ PASS\n\nOpening secure contact channel...";
            openApp("contact");
        } else if (cmd === "sudo su") out = "Permission denied.\n\nAmsSec enforces least privilege.";
        else if (cmd === "rm -rf /") out = "Operation blocked by AmsSec Endpoint Protection.\nThreat prevented. Incident logged as AMS-0001.";
        else if (cmd === "nmap almas") out = "Starting AmsSec Nmap simulation...\n\nPORT      STATE    SERVICE\n22/tcp    open     cybersecurity\n80/tcp    open     portfolio\n443/tcp   open     cloud-security\n1337/tcp  open     ctf-labs\n8080/tcp  open     digital-forensics\n\n5 services discovered.";
        else if (cmd === "ping recruiter") out = "PING recruiter.amssec [READY]: career connection established.";
        else if (cmd === "fortune") out = "Security through curiosity. Build. Break. Understand. Improve.";
        else if (cmd === "cat /etc/motd") out = "Welcome to AmsSec OS.\n\nSecurity through curiosity.\nBuild. Break. Understand. Improve.";
        else out = `amssec-shell: ${head}: command not found`;
        setLines((l)=>[
                ...l,
                {
                    input: `almas@amssec:${cwd.length ? "~/" + cwd.join("/") : "~"}$ ${cmd}`,
                    output: out
                }
            ]);
        setValue("");
    };
    const submit = (e)=>{
        e.preventDefault();
        run(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "terminal",
        onClick: ()=>input.current?.focus(),
        children: [
            lines.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        l.input && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prompt",
                            children: l.input
                        }, void 0, false, {
                            fileName: "[project]/src/components/Terminal.tsx",
                            lineNumber: 21,
                            columnNumber: 173
                        }, this),
                        l.output && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            children: l.output
                        }, void 0, false, {
                            fileName: "[project]/src/components/Terminal.tsx",
                            lineNumber: 21,
                            columnNumber: 224
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/Terminal.tsx",
                    lineNumber: 21,
                    columnNumber: 150
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: submit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "almas@amssec:",
                            cwd.length ? "~/" + cwd.join("/") : "~",
                            "$"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Terminal.tsx",
                        lineNumber: 21,
                        columnNumber: 278
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: input,
                        "aria-label": "Terminal command",
                        autoFocus: true,
                        value: value,
                        onChange: (e)=>setValue(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === "ArrowUp") {
                                e.preventDefault();
                                const n = Math.max(0, hi - 1 < 0 ? history.length - 1 : hi - 1);
                                setHi(n);
                                setValue(history[n] || "");
                            }
                            if (e.key === "ArrowDown") {
                                e.preventDefault();
                                const n = Math.min(history.length, hi + 1);
                                setHi(n);
                                setValue(history[n] || "");
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Terminal.tsx",
                        lineNumber: 21,
                        columnNumber: 340
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Terminal.tsx",
                lineNumber: 21,
                columnNumber: 254
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bottom
            }, void 0, false, {
                fileName: "[project]/src/components/Terminal.tsx",
                lineNumber: 21,
                columnNumber: 717
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Terminal.tsx",
        lineNumber: 21,
        columnNumber: 69
    }, this);
}
_s(Terminal, "D8YvvEN6L5QDqQkFka25sem8+f8=");
_c = Terminal;
var _c;
__turbopack_context__.k.register(_c, "Terminal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/filesystem.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filesystem",
    ()=>filesystem,
    "flatten",
    ()=>flatten,
    "resolvePath",
    ()=>resolvePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-client] (ecmascript)");
;
const filesystem = {
    name: "almas",
    type: "folder",
    children: [
        {
            name: "about_me.txt",
            type: "file",
            app: "about",
            content: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].summary
        },
        {
            name: "education.md",
            type: "file",
            app: "education",
            content: `# ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].university}\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].degree}\n${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].dates}`
        },
        {
            name: "skills.json",
            type: "file",
            app: "skills",
            content: "Evidence-based cybersecurity skills. Open Skills for the full inventory."
        },
        {
            name: "experience",
            type: "folder",
            app: "experience",
            children: []
        },
        {
            name: "projects",
            type: "folder",
            app: "projects",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
                    name: p.id,
                    type: "folder",
                    app: `project:${p.id}`,
                    children: [
                        {
                            name: "README.md",
                            type: "file",
                            app: `project:${p.id}`,
                            content: p.summary
                        }
                    ]
                }))
        },
        {
            name: "research",
            type: "folder",
            app: "research",
            children: [
                {
                    name: "llm-iac-verification.md",
                    type: "file",
                    app: "research",
                    content: "LLM-Assisted Security Verification of Infrastructure-as-Code\nStatus: Research Concept"
                }
            ]
        },
        {
            name: "grecybersec",
            type: "folder",
            app: "grecybersec",
            children: []
        },
        {
            name: "certifications",
            type: "folder",
            app: "certifications",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certifications"].map((name)=>({
                    name: name.replaceAll(" ", "-").toLowerCase() + ".pem",
                    type: "file",
                    app: "certifications",
                    content: name
                }))
        },
        {
            name: "documents",
            type: "folder",
            children: [
                {
                    name: "Mohammed-Almas-CV.pdf",
                    type: "file",
                    app: "cv",
                    content: "CV file not yet installed."
                }
            ]
        },
        {
            name: "contact.vcf",
            type: "file",
            app: "contact",
            content: `EMAIL:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}\nURL:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin}`
        }
    ]
};
function resolvePath(parts) {
    let cur = filesystem;
    for (const part of parts){
        const next = cur.children?.find((x)=>x.name === part);
        if (!next) return undefined;
        cur = next;
    }
    return cur;
}
function flatten(node, base = "/home/almas") {
    const path = node === filesystem ? base : `${base}/${node.name}`;
    return [
        {
            path,
            file: node
        },
        ...node.children?.flatMap((c)=>flatten(c, path)) ?? []
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certifications",
    ()=>certifications,
    "experience",
    ()=>experience,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "skillGroups",
    ()=>skillGroups
]);
const profile = {
    name: "Mohammed Almas Akkalath",
    shortName: "Almas",
    location: "London, UK",
    email: "akkalath.malmas123@gmail.com",
    linkedin: "https://linkedin.com/in/akkalathmohammedalmas/",
    github: "https://github.com/elitealmas",
    degree: "BSc Cybersecurity and Digital Forensics (Hons)",
    university: "University of Greenwich",
    dates: "September 2024 – July 2027",
    summary: "Cybersecurity and Digital Forensics student at the University of Greenwich with hands-on experience across penetration testing, network security, Active Directory, digital forensics, incident response and security automation. President of GreCyberSec, leading technical workshops, cybersecurity events and practical CTF activities. ISC² Certified in Cybersecurity, with practical experience using Python, Linux, Windows Server, Splunk, Wireshark, Nmap and forensic tooling."
};
const projects = [
    {
        id: "active-directory-lab",
        title: "Active Directory Security Lab",
        status: "Completed",
        summary: "A personal lab environment for studying Active Directory administration, network security and privilege concepts.",
        environment: [
            "Windows Server",
            "Linux"
        ],
        tools: [
            "Nmap",
            "Python",
            "Windows Server"
        ],
        skills: [
            "Active Directory Security",
            "Network Security"
        ],
        mitre: [
            "Discovery",
            "Privilege Escalation"
        ]
    },
    {
        id: "enterprise-network",
        title: "Enterprise Network Lab",
        status: "Completed",
        summary: "Designed, configured and troubleshot a multi-site enterprise network in Cisco Packet Tracer, supported by hands-on traffic analysis and a personal security lab.",
        environment: [
            "Cisco Packet Tracer",
            "Kali Linux",
            "Windows Server"
        ],
        tools: [
            "Cisco Packet Tracer",
            "Wireshark",
            "Nmap",
            "Python",
            "Bash"
        ],
        skills: [
            "TCP/IP",
            "VLANs",
            "OSPF",
            "DHCP",
            "NAT",
            "ACLs",
            "EtherChannel",
            "STP",
            "Network Security"
        ],
        methodology: [
            "Built and configured a multi-site enterprise network in Cisco Packet Tracer, implementing VLANs, inter-VLAN routing, trunking, OSPF, DHCP, NAT, ACLs, EtherChannel, STP and network redundancy.",
            "Configured and troubleshot Cisco routers and switches, diagnosing VLAN/trunk mismatches, routing failures, IP addressing, DHCP, ACL, connectivity and Layer 2/Layer 3 configuration issues.",
            "Used Wireshark and Nmap for network traffic analysis, packet inspection, service discovery, connectivity testing and troubleshooting.",
            "Built a personal Kali Linux and Windows Server lab to practise networking, Active Directory, security testing and system administration.",
            "Completed practical networking and cybersecurity labs across TryHackMe, Hack The Box and VulnHub, developing hands-on troubleshooting and problem-solving skills.",
            "Used Python and Bash to automate repetitive network scanning, reconnaissance and analysis tasks."
        ]
    },
    {
        id: "digital-forensics",
        title: "Digital Forensics Investigation",
        status: "In Progress",
        summary: "Forensic investigation practice using evidence acquisition and analysis tooling. Project documentation pending.",
        environment: [
            "Windows",
            "Linux"
        ],
        tools: [
            "FTK Imager",
            "Autopsy",
            "Volatility"
        ],
        skills: [
            "Digital Forensics",
            "Incident Response"
        ]
    },
    {
        id: "splunk-log-analysis",
        title: "Splunk Log Analysis",
        status: "Planned",
        summary: "Security log analysis workspace. Project documentation pending.",
        environment: [
            "Splunk"
        ],
        tools: [
            "Splunk"
        ],
        skills: [
            "Incident Response",
            "Threat Modeling"
        ]
    },
    {
        id: "security-automation",
        title: "Python / Bash Security Automation",
        status: "In Progress",
        summary: "Automation experiments for repeatable security and systems tasks. Project documentation pending.",
        environment: [
            "Linux"
        ],
        tools: [
            "Python",
            "Bash"
        ],
        skills: [
            "Python",
            "Bash",
            "Risk Assessment"
        ]
    },
    {
        id: "vulnerability-assessment",
        title: "Vulnerability Assessment Lab",
        status: "Planned",
        summary: "A controlled environment for vulnerability assessment methodology.",
        environment: [
            "Linux"
        ],
        tools: [
            "Nmap"
        ],
        skills: [
            "Vulnerability Assessment",
            "Penetration Testing"
        ]
    },
    {
        id: "grecybersec-platform",
        title: "GreCyberSec Website",
        status: "In Progress",
        summary: "Digital platform work supporting the GreCyberSec community.",
        environment: [
            "Web"
        ],
        tools: [
            "TypeScript"
        ],
        skills: [
            "Leadership"
        ]
    },
    {
        id: "practice-labs",
        title: "HTB / TryHackMe / VulnHub Labs",
        status: "In Progress",
        summary: "Ongoing hands-on labs. Individual machine names and write-ups coming soon.",
        environment: [
            "Lab Platforms"
        ],
        tools: [
            "Linux",
            "Nmap"
        ],
        skills: [
            "Penetration Testing",
            "Networking"
        ]
    }
];
const experience = [
    {
        role: "President — GreCyberSec",
        org: "University of Greenwich",
        dates: "January 2025 – Present",
        items: [
            "Led 10+ cybersecurity events and workshops.",
            "Coordinated hands-on technical activities covering threat analysis, networking, cybersecurity and attack simulations.",
            "Coordinated 5+ technical sessions and challenges.",
            "Helped grow and manage a community engaging 100+ students."
        ]
    },
    {
        role: "Data Entry Specialist",
        org: "Waves Craft · Abu Dhabi, UAE",
        dates: "September 2023 – July 2024",
        items: [
            "Entered and updated 1,000+ business records weekly.",
            "Maintained data confidentiality and integrity.",
            "Verified and cleaned approximately 5,000 records.",
            "Maintained approximately 99.7% data accuracy."
        ]
    }
];
const skillGroups = {
    Cybersecurity: [
        "Risk Assessment",
        "Threat Modeling",
        "Incident Response",
        "Digital Forensics",
        "Network Security",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Active Directory Security"
    ],
    Frameworks: [
        "MITRE ATT&CK",
        "NIST RMF",
        "OWASP Top 10",
        "ISO 27001"
    ],
    Tools: [
        "Wireshark",
        "Nmap",
        "Splunk",
        "Autopsy",
        "EnCase",
        "FTK Imager",
        "Volatility",
        "Cisco Packet Tracer"
    ],
    "Programming / Scripting": [
        "Python",
        "Bash",
        "SQL"
    ],
    Networking: [
        "TCP/IP",
        "OSI Model",
        "Subnetting",
        "VLANs",
        "ACLs",
        "DMZ",
        "OSPF"
    ]
};
const certifications = [
    "ISC² Certified in Cybersecurity (CC)",
    "Tata Cybersecurity Analyst Job Simulation",
    "Google Cybersecurity Professional Certificate — Foundations of Cybersecurity",
    "Emergency First Aid at Work"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1_da-cz._.js.map