---
layout: page
title: "Q41676: QuickC 2.00 README.DOC: Linker Warning L4024"
permalink: /kb/041/Q41676/
---

## Q41676: QuickC 2.00 README.DOC: Linker Warning L4024

	Article: Q41676
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 28-FEB-1989
	
	The following information is taken from the QuickC Version 2.00
	README.DOC file, part 4, "Notes for Windows and OS/2 Programmers."
	
	Linker Warning L4024
	
	L4024 name : multiple definitions for export name
	
	This warning occurs if you declare a name exported both in the .DEF
	file and with the _export keyword in a .C file. It can be safely
	ignored. You can eliminate it be removing one or the other of the
	export declarations for the name.
