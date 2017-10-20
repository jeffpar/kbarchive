---
layout: page
title: "Q66773: Based Variable EXTRN Directive Wrongly Located in ASM Listing"
permalink: /kb/066/Q66773/
---

## Q66773: Based Variable EXTRN Directive Wrongly Located in ASM Listing

{% raw %}

	Article: Q66773
	Product(s): See article
	Version(s): 6.00 6.00a | 6.00 6.00a
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist6.00 buglist6.00a _based | mspl13_c
	Last Modified: 10-NOV-1990
	
	The Microsoft C Optimizing Compiler provides options for generating
	assembly language listings from C source files. In cases where based
	allocation is used, the assembly language listings produced with /Fa
	(.ASM files) and /Fc (.COD files) contain an error. The EXTRN
	directive emitted for based variables is located in the wrong place.
	
	The EXTRN directive for a based variable should be located between the
	SEGMENT and ENDS directives for the segment in which the variable is
	declared to reside. This allows MASM to generate the correct fixups
	for references to this variable, which in turn enables LINK to detect
	whether the variable is actually defined in the specified segment.
	
	To workaround this problem, edit the .ASM or .COD listing so that the
	EXTRN directives for based variables are located between the correct
	SEGMENT and ENDS directives.
	
	Note that this problem also occurs for functions specified in an
	alloc_text pragma.
	
	Microsoft has confirmed this to be a problem in C versions 6.00 and
	6.00a. We are researching this problem and will post new information
	here as it becomes available.

{% endraw %}
