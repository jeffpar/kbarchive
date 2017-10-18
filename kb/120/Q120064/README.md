---
layout: page
title: "Q120064: BUG: Error A2005 Generated Due to Conflict with Global Label"
permalink: kb/120/Q120064/
---

## Q120064: BUG: Error A2005 Generated Due to Conflict with Global Label

	Article: Q120064
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	According to page 354 of the "MASM 6.1 Programmer's Guide," labels within a
	procedure that are defined with a single colon are local, provided there is a
	language specifier on the .Model statement. However, if the symbol used for a
	local label appears as a global label in an earlier part of the source file, the
	following error is generated during assembly:
	
	  A2005: symbol redefinition
	
	RESOLUTION
	==========
	
	If possible, rearrange the code so that the global label does not appear before
	the local label.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in MASM versions 6.1 and 6.11. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem. If "two proc"
	were placed after "one proc", there would be no assembly errors and the "jmp
	two" would cause a jump to the local label "two".
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	     .model small, C
	     .code
	
	     two proc
	        ret
	     two endp
	
	     one proc
	
	        jmp two
	        nop
	
	     two:            ; error A2005: symbol redefinition : two
	
	     one endp
	     end
	
	Additional query words: 6.10 6.11 buglist6.10 buglist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611
	Version           : :6.1,6.11
	
	=============================================================================
	
