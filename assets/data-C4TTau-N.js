import{u as s,a,g as o}from"./index-DWVh9aEy.js";async function c(e){const n=s();await n.serverAvailable;const t=new URL(a(n.endpoint,"api/torrent/query"),location.href);return t.searchParams.set("page",String(e.page)),e.pageSize&&t.searchParams.set("pageSize",String(e.pageSize)),e.keyword&&t.searchParams.set("keyword",e.keyword),fetch(t,{headers:o()}).then(r=>(n.assertResponseLogin(r),r.json()))}async function p(e){const n=s();await n.serverAvailable;const t=new URL(a(n.endpoint,`api/torrent/${e.infoHash}/accessHistory`),location.href);return t.searchParams.set("page",String(e.page)),e.pageSize&&t.searchParams.set("pageSize",String(e.pageSize)),fetch(t,{headers:o()}).then(r=>(n.assertResponseLogin(r),r.json()))}async function g(e){const n=s();await n.serverAvailable;const t=new URL(a(n.endpoint,`api/torrent/${e.infoHash}/banHistory`),location.href);return t.searchParams.set("page",String(e.page)),e.pageSize&&t.searchParams.set("pageSize",String(e.pageSize)),fetch(t,{headers:o()}).then(r=>(n.assertResponseLogin(r),r.json()))}async function h(e){const n=s();await n.serverAvailable;const t=new URL(a(n.endpoint,`api/peer/${encodeURIComponent(e)}`),location.href);return fetch(t,{headers:o()}).then(r=>(n.assertResponseLogin(r),r.json()))}async function S(e){const n=s();await n.serverAvailable;const t=new URL(a(n.endpoint,`api/peer/${encodeURIComponent(e.ip)}/accessHistory`),location.href);return t.searchParams.set("page",String(e.page)),e.pageSize&&t.searchParams.set("pageSize",String(e.pageSize)),fetch(t,{headers:o()}).then(r=>(n.assertResponseLogin(r),r.json()))}async function f(e){const n=s();await n.serverAvailable;const t=new URL(a(n.endpoint,`api/peer/${encodeURIComponent(e.ip)}/banHistory`),location.href);return t.searchParams.set("page",String(e.page)),e.pageSize&&t.searchParams.set("pageSize",String(e.pageSize)),fetch(t,{headers:o()}).then(r=>(n.assertResponseLogin(r),r.json()))}export{p as G,g as a,c as b,S as c,f as d,h as e};
