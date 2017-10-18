---
layout: page
title: "Q33067: Anonymous Labels for Jump Instructions"
permalink: kb/033/Q33067/
---

## Q33067: Anonymous Labels for Jump Instructions

	Article: Q33067
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
	
	The Microsoft Macro Assembler (MASM) 5.1 and later provides a way to generate
	anonymous labels for jump instructions. To define the local label to be jumped
	to, use two at signs (@@) followed by a colon (:). The operand used in the jump
	instruction can be one of the following
	
	  @B (back)
	  @F (forward)
	
	The @B will jump to the previous local label and the @F will jump to the next
	local label.
	
	MORE INFORMATION
	================
	
	The fragment below illustrates this feature:
	
	      cmp ax,cx
	      jge @F
	      .
	      .
	      .
	  @@:
	      .
	      .
	      .
	      jle @B
	
	The jump to @F will jump to @@: and the jump to @B will jump back to the @@.
	
	Additional query words: kbinf 5.10 5.10a 6.00 6.00a 6.00b jmp
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM600a kbMASM510a kbMASM600b
	Version           : :5.1,5.1a,6.0,6.0a,6.0b
	
	=============================================================================
	
