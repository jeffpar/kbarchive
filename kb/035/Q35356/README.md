---
layout: page
title: "Q35356: SCREEN 0 &quot;Illegal Function Call,&quot; MCGA Only Supports 4 Pages"
permalink: /kb/035/Q35356/
---

## Q35356: SCREEN 0 &quot;Illegal Function Call,&quot; MCGA Only Supports 4 Pages

{% raw %}

	Article: Q35356
	Product(s): See article
	Version(s): 4.00 4.00b
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist4.00 buglist4.00b fixlist4.50 B_BasicCom | mspl13_basic
	Last Modified: 11-DEC-1989
	
	The "Microsoft QuickBASIC 4.0: BASIC Language Reference" manual states
	on Page 380 under Table R.12 that the IBM MCGA graphics card supports
	eight pages in screen mode 0 (text mode). However, an "Illegal
	Function Call" will result when trying to access video pages 4 through
	7.
	
	Microsoft has confirmed this to be a problem in QuickBASIC Versions
	4.00 and 4.00b and in Microsoft BASIC Compiler Versions 6.00 and 6.00b
	for MS-DOS and OS/2 (buglist6.00, buglist6.00b). This problem was
	corrected in QuickBASIC Version 4.50 and in Microsoft BASIC Compiler
	Version 7.00 (fixlist7.00).
	
	Note that versions of Microsoft QuickBASIC earlier than Version 4.00
	do not support the MCGA.
	
	The following is a code example:
	
	for i=0 to 7
	Screen 0,,i
	next i

{% endraw %}
