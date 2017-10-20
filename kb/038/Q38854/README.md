---
layout: page
title: "Q38854: Use of RMFIXUP.OBJ"
permalink: /kb/038/Q38854/
---

## Q38854: Use of RMFIXUP.OBJ

{% raw %}

	Article: Q38854
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): enduser | | mspl13_c
	Last Modified: 17-JAN-1989
	
	When using the /FPi option, the compiler will not generate true
	in-line 8087/80287 instructions. Instead, it will generate software
	interrupts to library code, which corrects the interrupts to use
	either the emulator or the coprocessor, depending on whether or not a
	coprocessor is present. The fix-ups can be removed by simply linking
	with the RMFIXUP.OBJ provided with QuickC.
	
	Note: Once this file has been linked in, the program can no longer be
	run on a machine without a coprocessor.

{% endraw %}
