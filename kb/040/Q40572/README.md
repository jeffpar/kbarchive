---
layout: page
title: "Q40572: Versions of MASM Prior to 6.0 Do Not Support Flat Model"
permalink: kb/040/Q40572/
---

## Q40572: Versions of MASM Prior to 6.0 Do Not Support Flat Model

	Article: Q40572
	Product(s): Microsoft Macro Assembler
	Version(s): 4.0,5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 4.0, 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Macro Assembler (MASM) versions 5.1 and earlier do not support
	programming in the flat model. They support only the small, medium, compact, and
	large memory models. The flat model was introduced in MASM version 6.0 to
	support OS/2 2.0.
	
	The flat model is a memory model based on the Intel 80386 chip which supports
	full 32-bit addressing and segments greater than 64K. For more information on
	the flat model, consult the MASM 6.0 "Programmer's Guide" or Intel's "80386
	Programmer's Reference Manual."
	
	Additional query words: kbinf 4.00 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM400 kbMASM500
	Version           : :4.0,5.0,5.1
	
	=============================================================================
	
