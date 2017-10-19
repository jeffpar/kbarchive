---
layout: page
title: "Q76911: FIX: JMP Jumps to the Proc When Using Duplicate Names"
permalink: /kb/076/Q76911/
---

## Q76911: FIX: JMP Jumps to the Proc When Using Duplicate Names

	Article: Q76911
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Microsoft Macro Assembler (MASM) versions 6.0, 6.0a or 6.0b, the JMP
	instruction will jump to the procedure name rather than a local label if the
	names of the procedure and the local label are identical. After the jump, the
	procedure begins running rather than the code at the label.
	
	RESOLUTION
	==========
	
	To work around the problem, create a local label with a name that is different
	from the procedure name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	The sample code below does not generate a syntax error for the identical
	procedure name and label name because the label is local to the procedure it is
	defined in. If the label is defined with a double colon (::) instead of a single
	colon (:), it becomes a global label and causes the assembler to generate an
	error. The assembler should generate code that jumps to the local label rather
	than the procedure.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .STACK 4096
	
	  .DATA
	
	  .CODE
	     .startup
	     call myproc
	     .exit 0
	
	  myproc PROC
	     jmp SHORT mylabel
	  mylabel:
	     ret  ; Should execute this
	  myproc ENDP
	
	  mylabel PROC
	     ret  ; Shouldn't execute this
	  mylabel ENDP
	
	  END
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : MS-DOS:6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	
