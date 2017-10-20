---
layout: page
title: "Q37901: &quot;Duplicate Definition&quot; LINKing C Graphics Library to BASIC, /O"
permalink: /kb/037/Q37901/
---

## Q37901: &quot;Duplicate Definition&quot; LINKing C Graphics Library to BASIC, /O

{% raw %}

	Article: Q37901
	Product(s): See article
	Version(s): 6.00 6.00b 7.00 | 6.00 6.00b 7.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | S_C S_QuickC B_QuickBas SR# G881109-6007 | mspl13_basic
	Last Modified: 27-JUL-1990
	
	The C graphics library, GRAPHICS.LIB, is incompatible with programs
	compiled with BC /O in QuickBASIC versions 4.00, 4.00b, and 4.50,
	Microsoft BASIC Compiler versions 6.00 or 6.00b, or Microsoft BASIC
	Professional Development System (PDS) version 7.00. The FONT and CHART
	graphics in QuickC version 2.00 are also incompatible with programs
	compiled with BC /O in these versions of QuickBASIC and BASIC
	compiler. Many of the C graphics routines conflict with the BASIC
	graphic routines in the BASIC stand-alone library. If you need to do
	graphics when you link BASIC stand-alone programs with C, the graphics
	should be done in BASIC. An alternative is to compile without the BC
	/O option in BASIC.
	
	Linking BASIC programs compiled BC /O with Microsoft C graphics
	routines gives many "Duplicate Definition" errors, even if you LINK
	with the /NOE option. Compile without /O to eliminate the errors.

{% endraw %}
