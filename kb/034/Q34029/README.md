---
layout: page
title: "Q34029: C Version 5.10 LINK and Windows LINK4"
permalink: /kb/034/Q34029/
---

## Q34029: C Version 5.10 LINK and Windows LINK4

	Article: Q34029
	Product(s): See article
	Version(s): 5.10    | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | SR# G880603-1453 | mspl13_c
	Last Modified: 8-AUG-1988
	
	If you are developing Windows applications, you can use the
	Segemented Executable Linker provided with C Version 5.10.
	   If you choose to use this linker for developing Windows
	applications, you must put the EXETYPE WINDOWS statement in your .DEF
	file. If you use LINK4, you do not have to put the EXETYPE WINDOWS
	statement in your .DEF file because the use of LINK4 causes the .EXE
	file to be identified as a Windows application.
