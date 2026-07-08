// Cloudflare Pages 边缘中间件：首访按 浏览器语言 + IP 归属地 自动跳转语言版本。
// 手动切换写入的 `lang` Cookie 永远优先（无闪烁，服务端完成）。
const ZH_COUNTRIES = ["CN", "HK", "TW", "MO"];

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // 跳过静态资源（带扩展名）与非 GET
  if (request.method !== "GET" || /\.[a-zA-Z0-9]+$/.test(path)) {
    return next();
  }

  const isZh = path === "/zh" || path.startsWith("/zh/");
  const toZh = () => Response.redirect(url.origin + "/zh" + (path === "/" ? "" : path), 302);
  const toEn = () => Response.redirect(url.origin + (path.replace(/^\/zh/, "") || "/"), 302);

  // 1) 手动选择优先
  const cookie = request.headers.get("Cookie") || "";
  const saved = (cookie.match(/(?:^|;\s*)lang=(en|zh)/) || [])[1];
  if (saved === "zh") return isZh ? next() : toZh();
  if (saved === "en") return isZh ? toEn() : next();

  // 2) 自动识别：浏览器语言为主，IP 归属地兜底
  const accept = (request.headers.get("Accept-Language") || "").toLowerCase();
  const country = (request.headers.get("CF-IPCountry") || "").toUpperCase();
  const prefersZh = accept.startsWith("zh") || ZH_COUNTRIES.includes(country);

  if (prefersZh && !isZh) return toZh();
  return next();
}
