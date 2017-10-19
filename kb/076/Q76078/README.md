---
layout: page
title: "Q76078: FIX: Error A2114 When Using OPTION PROLOGUE"
permalink: /kb/076/Q76078/
---

## Q76078: FIX: Error A2114 When Using OPTION PROLOGUE

	Article: Q76078
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 may incorrectly generate the
	following error when using a user-defined prologue
	
	  error A2114: INVOKE argument type mismatch : argument: x
	
	(where x is an argument number). The sample code below produces the following
	errors when assembling:
	
	  error A2114: INVOKE argument type mismatch : argument : 2
	  error A2114: INVOKE argument type mismatch : argument : 1
	
	This error occurs only if an INVOKE directive immediately follows a PROC
	statement.
	
	RESOLUTION
	==========
	
	If an executable statement or a label is placed between the PROC statement and
	the INVOKE statement, the error does not occur. In the sample code below,
	uncommenting the line preceding the invoke will cause the assembler to generate
	a local label and the code will assemble properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL large, C
	
	  cPrologue MACRO szProcName, flags,
	                  cbParams, cbLocals,
	                  rgRegs, rgUserParams
	      LOCAL count
	      count equ 0
	      exitm <cbParams>
	  ENDM
	
	  OPTION PROLOGUE: cPrologue
	
	  Yak PROTO FAR, :WORD, :WORD, :WORD, :WORD
	
	  .CODE
	  Llama PROC NEAR
	  ; Uncomment following line to remove error
	  ; dummy:
	      INVOKE Yak, AX, BX, CX, DX
	  Llama ENDP
	  END Llama
	
	Additional query words: A2137 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
