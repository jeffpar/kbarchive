---
layout: page
title: "Q79843: FIX: SYS1811 or A2087 and A2006 Incorrectly Generated"
permalink: /kb/079/Q79843/
---

## Q79843: FIX: SYS1811 or A2087 and A2006 Incorrectly Generated

{% raw %}

	Article: Q79843
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Macro Assembler (MASM) version 6.0, two errors may be
	generated if you declare a segment name after .CODE and include that name in a
	GROUP directive. Under MS-DOS, the errors are:
	
	  A2087: instruction form requires 80386/486
	  A2006: undefined symbol : TEMP
	
	Under OS/2, you will get the error:
	
	  SYS1811:
	
	  The process has stopped. The software diagnostic code (trap number) is 013.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the MASM 6.0. This problem was
	corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates the problem. Assembling this with no options
	displays the errors above.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL LARGE
	  DGROUP GROUP TEMP
	  .CODE TEMP
	  temp1:
	     mov ax,4C00H
	     int 21H
	  END temp1
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
