---
layout: page
title: "Q37773: Compiled BASIC Example to Call OS/2 Function DosKillProcess"
permalink: /kb/037/Q37773/
---

## Q37773: Compiled BASIC Example to Call OS/2 Function DosKillProcess

	Article: Q37773
	Product(s): See article
	Version(s): 6.00 6.00b 7.00
	Operating System(s): OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 1-FEB-1990
	
	The sample program below makes a call to the MS OS/2 function
	DosKillProcess. This program can be compiled in Microsoft BASIC
	Compiler Versions 6.00 and 6.00b for MS OS/2 and Microsoft BASIC
	Professional Development System (PDS) Version 7.00 for MS OS/2.
	
	The program is as follows:
	
	DEFINT A-Z
	
	'This declaration can be found in BSEDOSPC.BI
	DECLARE FUNCTION DosKillProcess%(_
	                 BYVAL p1 AS INTEGER,_
	                 BYVAL p2 AS INTEGER)
	
	Input "Enter PID to KILL : ";pid%
	Input "Enter ACTION code : ";action%
	
	x% = DosKillProcess%(action%,pid%)
	
	if (x%) then
	    Print "Error: ";x%
	else
	    Print "PID : ";pid%;" - stopped"
	end if
	end
