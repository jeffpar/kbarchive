---
layout: page
title: "Q120067: FIX: .IF with Multiple Tests Adds a JMP Instruction"
permalink: /kb/120/Q120067/
---

## Q120067: FIX: .IF with Multiple Tests Adds a JMP Instruction

{% raw %}

	Article: Q120067
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If two or more values known at assembly time evaluate as TRUE, .IF (below) will
	add a JMP instruction. In this first example, only the NOP is assembled:
	
	     .IF 1
	        nop
	     .ENDIF
	
	In this second example, a JMP instruction is added:
	
	     .IF 1 || 3
	        nop
	     .ENDIF
	
	If you use a register, as in this third example, the result is a conditional JMP
	to the location following the .IF:
	
	     .IF ax || 3
	        nop
	     .ENDIF
	
	The code runs as expected, despite the extra instructions.
	
	RESOLUTION
	==========
	
	To eliminate the extra generated code, replace the "||" with an "OR".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in MASM version 6.1. This problem was
	corrected in MASM version 6.11.
	
	Additional query words: 6.10 buglist6.10 fixlist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610
	Version           : :6.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
