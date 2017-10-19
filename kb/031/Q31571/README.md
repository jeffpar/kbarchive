---
layout: page
title: "Q31571: INKEY&#36; Cannot Input Bytes for CTRL-BREAK Keystroke"
permalink: /kb/031/Q31571/
---

## Q31571: INKEY&#36; Cannot Input Bytes for CTRL-BREAK Keystroke

	Article: Q31571
	Product(s): See article
	Version(s): 2.00 2.01 3.00 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr B_BasicCom | mspl13_basic
	Last Modified: 21-DEC-1989
	
	The manuals below incorrectly state that a stand-alone program
	compiled without the /d (debug) option can read a CTRL-BREAK keystroke
	with the INKEY$ function. The INKEY$ function does not return bytes
	for CTRL-BREAK under any circumstances. The incorrect sentence in the
	manual should be deleted.
	
	This correction applies to the INKEY$ function documentation in the
	following reference manuals:
	
	1. Page 298 of the "Microsoft QuickBASIC Compiler" Versions 2.x and
	   3.00 manual
	
	2. Page 218 of the "Microsoft QuickBASIC 4.00: BASIC Language
	   Reference"
	
	3. Page 218 of "Microsoft BASIC Compiler Version 6.00 for MS OS/2 and
	   MS-DOS: BASIC Language Reference"
