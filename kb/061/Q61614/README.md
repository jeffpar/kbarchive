---
layout: page
title: "Q61614: Cannot Set Breakpoint Warning Due to Wrong Linker"
permalink: /kb/061/Q61614/
---

## Q61614: Cannot Set Breakpoint Warning Due to Wrong Linker

	Article: Q61614
	Product(s): See article
	Version(s): 2.00 2.01
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 25-MAY-1990
	
	QuickC will give warnings of "no symbolic information" and "cannot
	set breakpoint filenam.c:linenum" when the wrong linker is used. For
	instance, using LINK.EXE version 5.05 from Basic 7.00 or version 5.10
	from C 6.00 will cause these warnings.
	
	QuickC will prompt you to respond to "rebuild with symbolic
	information?" If yes is selected, the program recompiles, links, and
	again warns: "no symbolic information." Care should be taken to verify
	that the correct linker is executed. LINK.EXE version 4.06 is the
	correct version for QuickC 2.00 and LINK.EXE version 4.07 is the
	correct version for Quick Assembler 2.01.
