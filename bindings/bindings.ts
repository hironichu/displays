// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.5.1/plug.ts";

function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v);
}
function readPointer(v: bigint): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v);
  const lengthBe = new Uint8Array(4);
  const view = new DataView(lengthBe.buffer);
  ptr.copyInto(lengthBe, 0);
  const buf = new Uint8Array(view.getUint32(0));
  ptr.copyInto(buf, 4);
  return buf;
}
const opts = {
  name: "displays",
  url: (new URL("../lib", import.meta.url)).toString(),
  policy: CachePolicy.NONE,
};
const _lib = await prepare(opts, {
  displays: { parameters: [], result: "pointer", nonblocking: false },
});
export type InfoDisplay = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  scale: number;
  rotation: number;
};
export type Displays = {
  list: Array<InfoDisplay>;
};
export function displays() {
  const rawResult = _lib.symbols.displays();
  const result = readPointer(rawResult);
  return JSON.parse(decode(result)) as Displays;
}
