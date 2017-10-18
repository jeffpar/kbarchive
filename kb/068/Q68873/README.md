---
layout: page
title: "Q68873: FIX: Warning A4057 When Using Local Variables"
permalink: kb/068/Q68873/
---

## Q68873: FIX: Warning A4057 When Using Local Variables

	Article: Q68873
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the code below assembled with Microsoft Macro Assembler (MASM) version 5.1,
	it produces the following error:
	
	  Warning A4057: illegal size for operand
	
	This warning is falsely generated and does not occur with MASM version 5.1a.
	
	The variable arg1, shown in the code below, is a local variable that is defined
	as a double word. The warning occurs when arg1 is used as a WORD PTR. This is
	acceptable and should not be flagged.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	was corrected in version 5.1a.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small,c
	
	  .CODE
	
	  Begin PROC arg1:DWORD
	      mov ax, WORD PTR arg1
	      ret
	  Begin ENDP
	
	  END
	
	Additional query words: 5.10 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	
