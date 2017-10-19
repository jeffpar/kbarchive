---
layout: page
title: "Q50223: Printing Double Quotation Marks from within an M Editor Macro"
permalink: /kb/050/Q50223/
---

## Q50223: Printing Double Quotation Marks from within an M Editor Macro

	Article: Q50223
	Product(s): See article
	Version(s): 1.00 1.02 | 1.00 1.02
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 30-NOV-1989
	
	To get double quotation marks ("") printed from within a macro in the
	M Editor, use the backslash key (\) followed by the double quotation
	marks (""). The following example (placed in the correct section of
	the TOOLS.INI file) demonstrates how this is done:
	
	   text:=arg "say \"hello\"" paste
	   text:alt+z
	
	In this case, pressing ALT+Z inserts the following string into your
	text, with the double quotation marks around the word hello.
	
	   say "hello"
