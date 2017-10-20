---
layout: page
title: "Q79286: FIX: Nested NOT Operators Yield Incorrect Value"
permalink: /kb/079/Q79286/
---

## Q79286: FIX: Nested NOT Operators Yield Incorrect Value

{% raw %}

	Article: Q79286
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the NOT operator is used more than once in an expression in the Microsoft
	Macro Assembler (MASM), an incorrect value may be generated. For example:
	
	  mov ax, not(not 0Fh)
	
	incorrectly generates:
	
	  mov ax, FFF1h
	
	RESOLUTION
	==========
	
	To work around this, avoid using consecutive NOT operators. Using two NOT
	operators is equivalent to using none.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.0a, and
	6.0b. This problem was corrected in MASM for MS-DOS version 6.1.
	
	MORE INFORMATION
	================
	
	Since the NOT operator should perform a bitwise or logical NOT operation, two
	consecutive NOTs should produce the original number. The sample code below
	demonstrates the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed:  none
	
	  .MODEL small
	  .STACK 4096
	
	  .CODE
	      .startup
	      mov ax, not(not 0fh)
	      .exit 0
	  END
	
	Additional query words: 6.00 6.00a 6.00b buglist6.00 buglist6.00a buglist6.00b fixlist6.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
