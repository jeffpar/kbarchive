---
layout: page
title: "Q33629: &quot;Illegal Function Call&quot; SHELLing to More Than 124 Characters"
permalink: /kb/033/Q33629/
---

## Q33629: &quot;Illegal Function Call&quot; SHELLing to More Than 124 Characters

	Article: Q33629
	Product(s): See article
	Version(s): 3.00 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | B_BasicCom | mspl13_basic
	Last Modified: 16-DEC-1989
	
	The SHELL statement takes a string expression of 124 characters or
	less. QuickBASIC Versions 4.00 4.00b and 4.50 for MS-DOS, the BASIC
	compiler Version 6.00 and 6.00b for MS-DOS or MS OS/2, or Microsoft
	BASIC PDS Version 7.00 for MS OS/2 and MS-DOS give an "Illegal
	function call" error message for longer strings.
	
	In QuickBASIC Version 3.00, the same limitation applies; however, the
	string expression is truncated without any error message if it is
	longer than 124 characters. If the string is longer than 271
	characters in QuickBASIC Version 3.00, a "string space corrupt" error
	message results.
