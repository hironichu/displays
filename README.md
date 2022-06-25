# Displays

## Simple FFI library to show display information with Deno.

This is WIP and just for a project im doing, feel free to use it.

> (this has only been tested/built on Windows/linux but should work everywhere,
> can't be bothered to built it for every platform.)

Usage :

```typescript
import displays from "https://raw.githubusercontent.com/hironichu/displays/main/mod.ts";

console.log(displays);
// Returns :
// {
//   list: [
//     { id: "2528732444", x: 0, y: 0, width: 1920, height: 1080, scale: 1, rotation: 0 },
//	   ...
//   ]
// }
```
