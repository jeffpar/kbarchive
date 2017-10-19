---
layout: page
title: "Q61602: Assembler Options Passed to C Compiler If /MA Contains Space"
permalink: /kb/061/Q61602/
---

## Q61602: Assembler Options Passed to C Compiler If /MA Contains Space

	Article: Q61602
	Product(s): See article
	Version(s): 6.00    | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_pwb | mspl13_c
	Last Modified: 29-MAY-1990
	
	Options can be passed from the C compiler to MASM in the Options.C
	Compiler.Other Options field by using the /MA switch. However, if the
	option has a space between the /MA and the actual option, the option
	will be passed to the compiler instead of the assembler. For the
	switch to be passed to the assembler, there cannot be a space in the
	option
	
	For example, "/MA DEBUG" does not work; "/MADEBUG" does work properly.
