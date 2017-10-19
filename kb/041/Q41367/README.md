---
layout: page
title: "Q41367: QuickC 2.00 README.DOC: Changing AUTOEXEC.BAT"
permalink: /kb/041/Q41367/
---

## Q41367: QuickC 2.00 README.DOC: Changing AUTOEXEC.BAT

	Article: Q41367
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 28-FEB-1989
	
	The following information is taken from the QuickC 2.00 README.DOC
	file, Part 1, "Notes on 'Up and Running.'" The following notes refer
	to Page 13 of "Up and Running": Changing AUTOEXEC.BAT.
	
	The headline "Changing NEW-VARS.BAT" should read "Changing
	AUTOEXEC.BAT," and the following paragraph should be added:
	
	   If you want to use the 8087 math library instead of the emulator
	   library, use the /FPi87 option when you compile from the command
	   line (using QCL). If you compile and link from the QuickC
	   environment, either add the line below to your AUTOEXEC.BAT file
	   or type it at the command line:
	
	   set cl=/FPi87
