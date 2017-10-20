---
layout: page
title: "Q31822: Structured Programming in QuickBASIC - Subprograms; SHARED"
permalink: /kb/031/Q31822/
---

## Q31822: Structured Programming in QuickBASIC - Subprograms; SHARED

{% raw %}

	Article: Q31822
	Product(s): See article
	Version(s): 1.00 1.01 1.02 2.00 2.01 3.00 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | B_BasicCom | mspl13_basic
	Last Modified: 30-JUN-1989
	
	Microsoft QuickBASIC for MS-DOS provides structured programming
	features that exceed BASICA's FOR/NEXT, WHILE/WEND, and GOSUB
	statements. True subprograms with scalar and array parameters are easy
	to use in QuickBASIC. All variables in subprograms are local unless
	they are declared as shared-global variables in the current module, as
	shown in the following example:
	
	         bubbles = 10
	         CALL MySort (howbig, Array())     'sort Array()
	         END
	
	         SUB MySort (limit, Sieve()) STATIC    'Sieve is 1-dim
	         SHARED bubbles               'global variable
	           ...  ' MySort subprogram body
	         END SUB
	
	Note that the SHARED statement does not share variables across
	separately-compiled modules, it only shares with the main program
	level ("module level") of the current module. To share variables
	across separately-compiled modules, you must use the COMMON SHARED
	statement.

{% endraw %}
