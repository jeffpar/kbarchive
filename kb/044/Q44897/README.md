---
layout: page
title: "Q44897: system() Returns an Exit Code Under OS/2"
permalink: /kb/044/Q44897/
---

## Q44897: system() Returns an Exit Code Under OS/2

	Article: Q44897
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 31-MAY-1989
	
	The system() function under OS/2 returns the exit code of the process
	executed, unlike MS-DOS. Under MS-DOS the system() function always
	returns 0 to indicate successful completion.
	
	Under both operating systems, if the system() function fails then a
	value of -1 is returned.
