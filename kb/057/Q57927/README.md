---
layout: page
title: "Q57927: BASIC Does Not Support 8514 VGA Text Modes in OS/2"
permalink: /kb/057/Q57927/
---

## Q57927: BASIC Does Not Support 8514 VGA Text Modes in OS/2

	Article: Q57927
	Product(s): See article
	Version(s): 6.00 6.00b 7.00
	Operating System(s): OS/2
	Keyword(s): ENDUSER | SR# S891229-63 | mspl13_basic
	Last Modified: 31-JAN-1990
	
	Microsoft BASIC does not support the VGA-specific screen modes, such
	as 50-line mode, in MS OS/2 protected mode set up for 8514 video
	cards. If the 8514 card is set up as a VGA card only, then BASIC can
	recognize the VGA TEXT modes. BASIC offers no support for the 8514
	extended modes.
	
	This information applies to Microsoft BASIC Compiler Versions 6.00 and
	6.00b for MS OS/2, and to Microsoft BASIC Professional Development
	System (PDS) Version 7.00 for MS OS/2.
	
	When trying to utilize VGA-specific line modes, BASIC returns an
	"Illegal Function Call" error when using an 8514 card in MS OS/2.
	
	The following program demonstrates the problem:
	
	   PRINT "This line will print"
	   WIDTH 80,50         ' this line gives "Illegal Function Call"
	   SYSTEM
	
	Compile and link as follows:
	
	   BC /LP /O TEST.BAS;
	   LINK TEST;
