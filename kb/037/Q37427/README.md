---
layout: page
title: "Q37427: Sample Program That Makes OS/2 Function Call DosSelectDisk"
permalink: /kb/037/Q37427/
---

## Q37427: Sample Program That Makes OS/2 Function Call DosSelectDisk

	Article: Q37427
	Product(s): See article
	Version(s): 6.00 6.00b 7.00
	Operating System(s): OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 1-FEB-1990
	
	Below is a sample program that makes a call to the MS OS/2 function
	DosSelectDisk. This program can be compiled in Microsoft BASIC
	Compiler Versions 6.00 and 6.00b for MS OS/2 and Microsoft BASIC
	Professional Development System (PDS) Version 7.00 for MS OS/2.
	
	The sample program is as follows:
	
	' This definition is from the include file BSEDOSFL.BI
	DECLARE FUNCTION DosSelectDisk%(BYVAL P1 AS INTEGER)
	
	DIM number AS INTEGER
	INPUT "Enter disk number (A - &H0001, B - &H0002, etc.): ";number
	x=DosSelectDisk%(number)
	IF (x) THEN
	    Print "DosSelectDisk returned an error ";x
	ELSE
	    shell "dir"
	    print "Hit any key to continue..."
	    while inkey$="" : wend
	END IF
	END
