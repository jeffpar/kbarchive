---
layout: page
title: "Q34577: MASM 5.10 MACRO.DOC: Output"
permalink: /kb/034/Q34577/
---

## Q34577: MASM 5.10 MACRO.DOC: Output

{% raw %}

	Article: Q34577
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	The following information was taken from the MASM Version 5.10
	MACRO.DOC file.
	
	OUTPUT
	
	@DispCh (02h)
	
	Displays one or more characters to screen
	
	Syntax:         @DispCh char [,char]...
	
	Arguments:      char        = 8-bit ASCII code
	Return:         Code in AL
	Registers used: AX and DL
	
	@PrtCh (05h)
	
	Prints one or more characters to LPT1
	
	Syntax:         @PrtCh char [,char]...
	
	Arguments:      char        = 8-bit ASCII code
	Return:         Code in AL
	Registers used: AX and DL
	
	@DispStr (09h)
	
	Displays a $-terminated string
	
	Syntax:         @DispStr &address [,segment]
	
	Arguments:      address     = Address of string terminated by
	"$" (24h)
	                segment     = Segment of address string (DS if not
	given)
	Return:         None
	Registers used: AX and DS

{% endraw %}
