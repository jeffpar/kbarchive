---
layout: page
title: "Q30357: &quot;Type Mismatch&quot; Appears When Typing % to Respond to INPUT"
permalink: /kb/030/Q30357/
---

## Q30357: &quot;Type Mismatch&quot; Appears When Typing % to Respond to INPUT

	Article: Q30357
	Product(s): See article
	Version(s): 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist4.00 buglist4.00b buglist4.50 B_BasicCom | mspl13_basic
	Last Modified: 31-JAN-1990
	
	The error message "Type Mismatch" appears when you type a "%" (percent
	sign) in response to an INPUT statement receiving input into a numeric
	variable.
	
	Microsoft has confirmed this to be a problem in QuickBASIC Versions
	4.00, 4.00b, and 4.50, and in Microsoft BASIC Compiler Versions 6.00
	and 6.00b for MS-DOS and OS/2 (buglist6.00, buglist6.00b). This
	problem was corrected in Microsoft BASIC Professional Development
	System (PDS) Version 7.00 for MS-DOS and MS OS/2 (fixlist7.00).
	
	The program works correctly using QuickBASIC Version 3.00.
	
	The following is a code example:
	
	INPUT "Enter an integer: ",I%   ' type just % in response to the input.
	PRINT I%
