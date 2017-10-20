---
layout: page
title: "Q30377: FIX: Error Message A2051 Incorrectly Generated"
permalink: /kb/030/Q30377/
---

## Q30377: FIX: Error Message A2051 Incorrectly Generated

{% raw %}

	Article: Q30377
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The code given below generates the following error message:
	
	  A2051: Operand not in current CS ASSUME segment
	
	The error is caused by the JE NEAR PTR statement. However, the first jump
	statement assembles without error. Both statements should or should not assemble
	as they generate full 16-bit fixup records.
	
	RESOLUTION
	==========
	
	You can work around this problem by not using the PTR operator in the JE
	instruction.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Macro Assembler (MASM)
	version 5.1 and 5.1a. This problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the problem:
	
	Sample Code
	-----------
	
	     .386
	     PGROUP  group   CODE,NCODE
	     CODE    segment use16 byte public 'prog'
	             assume  cs:PGROUP
	             jmp     SYM
	             je      near ptr SYM
	     CODE    ends
	     NCODE   segment use16 byte public 'prog'
	             assume  cs:PGROUP
	     SYM:
	     NCODE   ends
	             end
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
