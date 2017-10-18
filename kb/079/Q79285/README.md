---
layout: page
title: "Q79285: FIX: MASM Generates a _TEXT Segment in Far Code Models"
permalink: kb/079/Q79285/
---

## Q79285: FIX: MASM Generates a _TEXT Segment in Far Code Models

	Article: Q79285
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the assembly language module of a mixed-language program is placed in an
	overlay, the program hangs at startup. If the assembly module is placed in the
	root, the problem disappears. This problem occurs only when using the .MODEL
	directive in the Microsoft Macro Assembler (MASM) versions 6.0, 6.0a, or 6.0b.
	
	CAUSE
	=====
	
	MASM 6.0 generates a zero length _TEXT segment from source files that specify
	.MODEL medium, .MODEL large, or .MODEL huge. The startup code for Microsoft's
	high level languages is also declared in the _TEXT segment. The linker combines
	segments with the same name. If the assembly module is overlayed, the startup
	code is pulled into the overlay because the _TEXT segments will be combined.
	This means that the startup code is not available when the program starts
	executing, which causes the program to crash.
	
	RESOLUTION
	==========
	
	Work around this problem by removing the .MODEL directive and using full segment
	directives instead in any module that will be placed in an overlay.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
