---
layout: page
title: "Q31882: DATA Statements Not Allowed in SUB or FUNCTION Procedures"
permalink: /kb/031/Q31882/
---

## Q31882: DATA Statements Not Allowed in SUB or FUNCTION Procedures

{% raw %}

	Article: Q31882
	Product(s): See article
	Version(s): 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr B_BasicCom | mspl13_basic
	Last Modified: 21-DEC-1989
	
	The DATA statement should be included in the list of statements
	prohibited in procedure-level code on Page 50 of the following
	manuals
	
	1. "Microsoft QuickBASIC 4.0: Programming in BASIC: Selected Topics"
	
	2. "Microsoft BASIC Compiler 6.0: Programming in BASIC: Selected
	    Topics"
	
	3.  Page 41 of the "Microsoft BASIC 7.0: Programmer's Guide"
	    manual.
	
	The DATA statement documentation on Page 135 in the BASIC language
	reference manual correctly states that "DATA statements can only be
	entered in the module-level code."
	
	A module is defined as an individual source file, but "module level"
	is a special term with a different meaning. The glossary on Page 350
	of the "Microsoft QuickBASIC 4.0: Learning and Using QuickBASIC"
	manual defines "module-level code" as follows:
	
	   (Module-level code is defined as) program statements within any
	   module that are outside a SUB or FUNCTION definition. Error- or
	   event-handling code and declarative statements such as COMMON,
	   DECLARE, and TYPE can appear only at the module level.

{% endraw %}
