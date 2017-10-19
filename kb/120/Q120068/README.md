---
layout: page
title: "Q120068: PRB: H2INC Does Not Handle #undef"
permalink: /kb/120/Q120068/
---

## Q120068: PRB: H2INC Does Not Handle #undef

	Article: Q120068
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
	
	The H2INC utility does not appear to handle #undef correctly. For example, the
	following code fragment causes "error A2005: symbol redefinition: test2" to
	appear:
	
	     #define test2  2
	     #if test2 == 2
	        #undef test2
	        #define test2 3
	     #endif
	
	CAUSE
	=====
	
	This behavior is by design.
	
	The following .INC file is generated for the fragment listed in the "SYMPTOMS"
	section:
	
	      option expr32
	      option casemap:none
	
	      ; Begin of file xxx.h
	      test2          EQU          2t
	      test2          EQU          3t
	      ; End of file xxx.h
	
	NOTE: In MASM, constants defined with EQU cannot be redefined.
	
	RESOLUTION
	==========
	
	A #define can define "text equates" as well as "numeric equates." In the case of
	numeric constants, use an editor to change the "EQU" to a "=".
	
	Additional query words: 6.10 6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611
	Version           : :6.1,6.11
	
	=============================================================================
	
