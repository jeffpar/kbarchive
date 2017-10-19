---
layout: page
title: "Q11902: PRB: Assume Directive Not Displayed"
permalink: /kb/011/Q11902/
---

## Q11902: PRB: Assume Directive Not Displayed

	Article: Q11902
	Product(s): Microsoft Macro Assembler
	Version(s): 1.25,1.27,3.0x,4.0,5.0,5.1,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 1.25, 1.27, 3.0x, 4.0, 5.0, 5.1, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ASSUME directive in the macro definition below is not displayed in the list
	file. The documentation states that all the directives can be developed.
	
	The following is an example:
	
	     BEGIN   MACRO   x
	     x       SEGMENT PUBLIC
	     ASSUME  CS:x,DS:x
	             ENDM
	
	     BEGIN   NewSeg
	             IRET
	     NewSeg  ENDS
	             END
	
	CAUSE
	=====
	
	By default, directives are not listed inside of macros. The only lines listed
	from macro expansions are ones that generate code or data.
	
	RESOLUTION
	==========
	
	You should use the .LISTMACROALL directive (.lall in all versions prior to 6.0)
	if you want to see these lines.
	
	Additional query words: 1.25 1.27 3.0x 4.00 5.00 5.10 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM125 kbMASM127 kbMASM30xSearch kbMASM400 kbMASM500
	Version           : :1.25,1.27,3.0x,4.0,5.0,5.1,6.0
	
	=============================================================================
	
