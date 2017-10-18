---
layout: page
title: "Q64438: PRB: CV2206 WARNING: Corrupt Debug OMF Detected in Object..."
permalink: kb/064/Q64438/
---

## Q64438: PRB: CV2206 WARNING: Corrupt Debug OMF Detected in Object...

	Article: Q64438
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When loading a Microsoft Macro Assembler (MASM) 5.1 program into CodeView
	version 3.0, the following warning is received:
	
	  CV2206 WARNING: Corrupt debug OMF detected in object, discarding source line
	  information
	
	CAUSE
	=====
	
	The warning is caused because the program was written with full segment
	declarations and the CODE segment was not declared class 'code'.
	
	RESOLUTION
	==========
	
	The problem does not appear when using the simplified segment definitions or
	when the full segment definitions include class 'code'.
	
	MORE INFORMATION
	================
	
	The following code causes this problem:
	
	Sample Code:
	------------
	
	  ; Assemble options needed: /Zi
	
	  stack   SEGMENT stack para 'stack'
	          DB      100 dup (?)
	  stack   ENDS
	
	  text    SEGMENT
	          ASSUME   cs:text
	
	  main    PROC
	          RET
	  main    ENDP
	
	  text    ENDS
	          END main
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : MS-DOS:5.1
	
	=============================================================================
	
