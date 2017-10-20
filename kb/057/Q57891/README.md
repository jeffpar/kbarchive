---
layout: page
title: "Q57891: How BC /G2 Option Makes Smaller .EXE Code in BASIC 7.00"
permalink: /kb/057/Q57891/
---

## Q57891: How BC /G2 Option Makes Smaller .EXE Code in BASIC 7.00

{% raw %}

	Article: Q57891
	Product(s): See article
	Version(s): 7.00   | 7.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 2-FEB-1990
	
	In Microsoft BASIC Professional Development System (PDS) Version 7.00
	for MS-DOS and MS OS/2, the BC /G2 option generates code that is
	specific to computers containing an 80286 processor chip. Code
	generated with /G2 will run on computers with 80286 and 80386 chips,
	but will not run on computers with 8086 or 8088 chips.
	
	When compiled with the /G2 option, a program may be zero to ten
	percent smaller. The percentage by which the size decreases is usually
	more significant than the percentage by which the speed improves.
	
	Note: The 80286 chip is also known as the 286, for short. The 80386 is
	also known as the 386.
	
	The biggest gain from the use of 286 instructions is the PUSH
	immediate instruction. This is an operation frequently used by the
	compiler. To get an idea of how many bytes you would save, compile an
	existing program with the /A option and look for sequences of the
	following:
	
	   MOV     reg,constant
	   PUSH    reg
	
	These will be replaced with a single PUSH instruction, saving 1 or 2
	bytes per instance.
	
	We provided the BC /G2 option for developers who market their
	compiled-BASIC products to customers with 286 or 386 machines.

{% endraw %}
