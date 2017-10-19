---
layout: page
title: "Q64535: FIX: Incorrect Code Generated for IRET With PROC USES"
permalink: /kb/064/Q64535/
---

## Q64535: FIX: Incorrect Code Generated for IRET With PROC USES

	Article: Q64535
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A procedure that uses the USES keyword cannot return by using IRET. The USES
	statement pushes the specified registers on the stack upon entry and pops them
	before exiting a procedure. If the USES keyword is used with a procedure that
	ends with an IRET instruction, the pushes will be generated for the procedure,
	but the pops will not.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem has been corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the problem. The di, si, and bp registers will
	be pushed onto the stack, but not popped.
	
	Source Code:
	------------
	
	  ; Compile options needed: none
	
	           .model large, c
	
	           .code
	
	     first PROC far uses di si bp
	           MOV si,3
	           MOV di,4
	           IRET
	     first ENDP
	
	           END first
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : MS-DOS:5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
