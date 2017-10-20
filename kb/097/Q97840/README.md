---
layout: page
title: "Q97840: FIX: DOSXNT DX1020 Error Using .WHILE and Processor Flag"
permalink: /kb/097/Q97840/
---

## Q97840: FIX: DOSXNT DX1020 Error Using .WHILE and Processor Flag

{% raw %}

	Article: Q97840
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.1a; MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.1a 
	- Microsoft Macro Assembler (MASM), version 6.0, on platform(s):
	   - the operating system: OS/2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Macro Assembler (MASM) version 6.1, and 6.1a may generate a DOSXNT
	DX1020 general protection fault when using the .WHILE directive to test the
	state of a processor flag (SIGN?, ZERO?, CARRY?, PARITY?, or OVERFLOW?). The
	error occurs if the processor flag is tested by itself or is negated and tested.
	For example:
	
	  .WHILE SIGN?
	  .WHILE !SIGN?
	
	MASM version 6.0 running under OS/2 version 1.21 may generate a trap 13 in the
	above situation.
	
	RESOLUTION
	==========
	
	To work around this problem, OR the desired processor flag with zero. For
	example:
	
	  .WHILE SIGN? || 0
	
	This work around will also work with ZERO?, CARRY?, PARITY?, and OVERFLOW?.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.0, 6.1, and
	6.1a. This problem was corrected in MASM version 6.11.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .STACK 4096
	
	  .DATA
	
	  .CODE
	      .startup
	      .WHILE SIGN?       ; generates DOSXNT general protection fault
	          nop
	      .ENDW
	      .WHILE SIGN? || 0  ; avoids the protection fault
	          nop
	      .ENDW
	      .exit 0
	  END
	
	Additional query words: 6.00 6.10 6.10a unhandled exception buglist6.00 buglist6.10 buglist6.10a fixlist6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper
	Version           : :6.1,6.1a; MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
