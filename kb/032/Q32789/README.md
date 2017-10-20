---
layout: page
title: "Q32789: Correction for COMMAND&#36; Function Example in Manual"
permalink: /kb/032/Q32789/
---

## Q32789: Correction for COMMAND&#36; Function Example in Manual

{% raw %}

	Article: Q32789
	Product(s): See article
	Version(s): 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr B_BasicCom | mspl13_basic
	Last Modified: 21-DEC-1989
	
	The correction below applies to the example program for the COMMAND$
	function on Page 114 of the following manuals:
	
	1. "Microsoft QuickBASIC 4.0: BASIC Language Reference"
	
	2. "Microsoft BASIC Compiler 6.0: BASIC Language Reference"
	
	On Page 114, the SUB statement on line seven incorrectly reads as
	follows:
	
	   SUB Comline(NumArgs, Args$(1), MaxArgs) STATIC
	
	This line should read as follows:
	
	   SUB Comline(NumArgs, Args$(), MaxArgs) STATIC
	
	In brief, replace Args$(1) in the first statement with Args$().
	
	This information also applies to the example program on Page 61 of the
	"Microsoft BASIC 7.0: Language Reference" manual which comes with
	Microsoft BASIC PDS Version 7.00.
	
	On Page 61, the SUB statement on line five incorrectly reads as
	follows:
	
	   SUB Comline(NumArgs,Args$,MaxArgs) STATIC
	
	This line should read as follows:
	
	   SUB Comline(NumArgs,Args$(),MaxArgs) STATIC

{% endraw %}
