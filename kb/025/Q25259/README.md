---
layout: page
title: "Q25259: How to Enable Math Coprocessor Instructions"
permalink: /kb/025/Q25259/
---

## Q25259: How to Enable Math Coprocessor Instructions

	Article: Q25259
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To enable 287 or 387 math coprocessor instructions, the type of the processor
	must be specified. You can perform this process by specifying the first entry in
	the program as one of the following types:
	
	.8086    for 8086 without 8087 math coprocessor
	.8087    for 8086 with 8087 math coprocessor
	.186     for 186 processor
	.286     for 286 without math coprocessor without privileged
	            instructions
	.286P    for 286 without math coprocessor with privileged instructions
	.287     for 286 with math coprocessor
	.386     for 386 without math coprocessor without privileged
	            instructions
	.386P    for 386 without math coprocessor with privileged instructions
	.387     for 386 with math coprocessor
	.486     for 486 with math coprocessor (new with MASM 6.0)
	.486P    for 486 with math coprocessor with privileged instructions
	            (new with MASM 6.0)
	
	.NO87    disables assembly of all coprocessor instructions
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
