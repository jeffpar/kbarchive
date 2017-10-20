---
layout: page
title: "Q35653: ERDEV &amp; ERDEV&#36; &quot;Advanced Feature&quot; Error in OS/2 Protected Mode"
permalink: /kb/035/Q35653/
---

## Q35653: ERDEV &amp; ERDEV&#36; &quot;Advanced Feature&quot; Error in OS/2 Protected Mode

{% raw %}

	Article: Q35653
	Product(s): See article
	Version(s): 6.00 6.00b 7.00 7.10 | 6.00 6.00b 7.00 7.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_basic
	Last Modified: 8-JAN-1991
	
	The statements ERDEV and ERDEV$ give the run-time error message
	"Advanced Feature Unavailable" when compiled and run in OS/2 protected
	mode because these functions are set by DOS interrupt 24H, which is
	not available in OS/2 protected mode.
	
	ERDEV and ERDEV$ are not supported in OS/2 protected mode. This
	restriction should be added to Page 40 of the "Microsoft BASIC
	Compiler 6.0: User's Guide" for Versions 6.00 and 6.00b and to Page
	520 of the "Microsoft BASIC 7.0: Programmer's Guide" for Microsoft
	BASIC Professional Development System (PDS) Versions 7.00 and 7.10.
	
	Code Example
	------------
	
	I% = ERDEV
	A$ = ERDEV$

{% endraw %}
