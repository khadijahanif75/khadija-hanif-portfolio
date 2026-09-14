import fs from "fs";
import path from "path";

/**
 * Server-only helper. Checks whether a file referenced by its public URL
 * path (e.g. "/images/profile.jpg") actually exists in the public/
 * directory at build/render time, so components can render a graceful
 * fallback instead of a broken image or a dead download link.
 *
 * Do not import this from a "use client" component — fs is not available
 * in the browser bundle. Call it from a server component (page.tsx,
 * or any component without "use client") and pass the boolean result
 * down as a prop.
 */
export function publicFileExists(publicPath: string): boolean {
  try {
    const cleaned = publicPath.replace(/^\/+/, "");
    const fullPath = path.join(process.cwd(), "public", cleaned);
    return fs.existsSync(fullPath) && fs.statSync(fullPath).isFile();
  } catch {
    return false;
  }
}
