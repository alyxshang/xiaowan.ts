/*
Xiaowan.ts by Alyx Shang.
Licensed under the FSL v1.
*/

import * as xiaowan from './mod.ts';
import { assertEquals } from "@std/assert";

Deno.test(
	"Testing the \"reverseString\" function.",
	() => {
		assertEquals(xiaowan.reverseString("hello"), "olleh");
	}
);

Deno.test(
	"Testing the \"isBase\" function. (true case)",
	() => {
		assertEquals(xiaowan.isBase("101", ["1", "0"]),true);
	}
);

Deno.test(
	"Testing the \"isBase\" function. (false case)",
	() => {
		assertEquals(xiaowan.isBase("10A", ["1", "0"]),false);
	}
);

Deno.test(
	"Testing the \"baseToDec\" function.",
	() => {
		assertEquals(xiaowan.baseToDec("101", 2, ["1", "0"]),5);
	}
);

Deno.test(
	"Testing the \"decToBase\" function.",
	() => {
		assertEquals(xiaowan.decToBase(5, 2, ["0", "1"]),"101");
	}
);
