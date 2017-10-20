---
layout: page
title: "Q43704: C 5.10 Won't Compile QuickC 2.00 GRDEMO.C and TURTLE.C"
permalink: /kb/043/Q43704/
---

## Q43704: C 5.10 Won't Compile QuickC 2.00 GRDEMO.C and TURTLE.C

{% raw %}

	Article: Q43704
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 31-MAY-1989
	
	The QuickC Version 2.00 sample programs GRDEMO.C and TURTLE.C produce
	internal compiler errors when compiled under the Microsoft C
	Optimizing Compiler Version 5.10. Several particularly complex
	expressions cause the problem, some of which are due to macro
	expansions from the QuickC 2.00 GRAPH.H include file. Using
	temporary variables in these expressions eliminates the errors. The
	following error message is displayed:
	
	   grdemo.c(291) : fatal error C1001: Internal Compiler Error
	             (compiler file '@(#)grammar.c:1.29', line 108)
	             Contact Microsoft Technical Support
	
	The GRDEMO.C and TURTLE.C programs were developed for QuickC 2.00 and
	as such are not guaranteed to compile with the C 5.10 optimizing
	compiler. C 5.10 compiles its own demonstration programs without
	difficulty.

{% endraw %}
