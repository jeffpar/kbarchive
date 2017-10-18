---
layout: page
title: "Q94913: FIX: ML Fails When PAGE Directive Has Invalid Value"
permalink: kb/094/Q94913/
---

## Q94913: FIX: ML Fails When PAGE Directive Has Invalid Value

	Article: Q94913
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to assemble an application fails and the assembler generates the
	following message:
	
	  error A2156: constant value out of range
	
	If you assemble the application and request a listing file, the assembler
	generates a very large listing file or it generates the following message:
	
	  DOSXNT : fatal error DX1020: unhandled exception:
	
	  General protection fault;
	
	  contact Microsoft Support Services
	
	CAUSE
	=====
	
	The application contains a PAGE directive and the length or width values are
	outside the range of valid values.
	
	RESOLUTION
	==========
	
	Modify the PAGE directive so that the length parameter is between 10 and 255
	lines and the width parameter is between 60 and 255 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, 6.0b,
	6.1, and 6.1a. This problem was corrected in MASM for MS-DOS version 6.11.
	
	MORE INFORMATION
	================
	
	The following code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /c /Fl
	
	  PAGE 10, 30
	
	  .MODEL small
	  .STACK 4096
	
	  .CODE
	  start:
	      mov ax, 4C00h
	      int 21h
	  END start
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a buglist6.00a buglist6.00b buglist6.10 buglist6.10a fixlist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.1a
	Solution Type     : kbfix
	
	=============================================================================
	
