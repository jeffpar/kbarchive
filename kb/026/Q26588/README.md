---
layout: page
title: "Q26588: FPSEG() and FP_OFF() Require DOS.H to Avoid C2106 Error"
permalink: /kb/026/Q26588/
---

## Q26588: FPSEG() and FP_OFF() Require DOS.H to Avoid C2106 Error

{% raw %}

	Article: Q26588
	Product(s): See article
	Version(s): 5.00 5.10 6.00 6.00a | 5.00 5.10 6.00 6.00a
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 15-JAN-1991
	
	Problem:
	
	When I use the FP_SEG() and FP_OFF() macros on the left side of an
	assignment statement to set (rather than get) segment and offset
	values, the compiler generates the error, "C2106: left operand must be
	an lvalue."
	
	Response:
	
	You must include the DOS.H header file in your program; otherwise, the
	compiler believes FP_SEG() and FP_OFF() are function calls rather than
	macro definitions. Because a function is not an lvalue, it generates
	the C2106 error. For more information on the FP_SEG() and FP_OFF()
	macros, consult the run-time library reference or online help that
	shipped with your version of the compiler.

{% endraw %}
