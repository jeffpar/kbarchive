---
layout: page
title: "Q26707: LOOP Can Use ECX in 16-bit Segment, CX in 32-bit Segment"
permalink: /kb/026/Q26707/
---

## Q26707: LOOP Can Use ECX in 16-bit Segment, CX in 32-bit Segment

{% raw %}

	Article: Q26707
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use a cast override to change the operand size for the LOOP instruction.
	For example, use "LOOP dword ptr alabel", so that in a 16-bit segment, ECX will
	be used instead of CX. If you use a WORD override in a 32-bit segment, CX will
	be used instead of ECX.
	
	Additional query words: 5.00 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM500
	Version           : :5.0,5.1
	
	=============================================================================
	

{% endraw %}
