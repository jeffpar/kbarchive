---
layout: page
title: "Q25581: Can't Use Border Parameter of COLOR Statement on EGA, VGA Card"
permalink: /kb/025/Q25581/
---

## Q25581: Can't Use Border Parameter of COLOR Statement on EGA, VGA Card

{% raw %}

	Article: Q25581
	Product(s): See article
	Version(s): 2.00 2.01 3.00 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr B_BasicCom | mspl13_basic
	Last Modified: 8-MAR-1989
	
	The border argument, which is the third parameter of the COLOR
	statement (in SCREEN 0 only), is NOT supported on EGA, VGA, or MCGA
	cards.
	
	If you have an EGA card installed on your system, using the border
	parameter of the COLOR statement causes unpredictable results in
	QuickBASIC Versions 2.00, 2.01, 3.00, 4.00, 4.00b, and 4.50.
	
	The border argument is supported in SCREEN 0 on CGA cards.
	
	The following correction should be made on Page 222 of the "Microsoft
	QuickBASIC Compiler" documentation for Versions 2.00, 2.01, and 3.00:
	
	   The EGA card does not support the COLOR statement border parameter.
	
	The documentation for the COLOR statement in QuickBASIC Versions 4.00,
	4.00b, and 4.50 correctly states that the following cards do NOT
	support the border argument of the COLOR statement:
	
	   EGA (IBM Enhanced Graphics adapter)
	   VGA (IBM Video Graphics Array adapter)
	   MCGA (IBM Multicolor Graphics Array adapter)
	
	(The same applies to BASIC compiler Versions 6.00 and 6.00b for
	MS-DOS.) The border parameter of the COLOR statement is allowed only
	in SCREEN 0 on the CGA card, as shown:
	
	   COLOR foreground,background,border
	
	The border color is used to draw the screen border.

{% endraw %}
