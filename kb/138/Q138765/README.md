---
layout: page
title: "Q138765: BUG: Ml.exe Hangs If ASSUME DataReg:ERROR Directive Used"
permalink: /kb/138/Q138765/
---

## Q138765: BUG: Ml.exe Hangs If ASSUME DataReg:ERROR Directive Used

{% raw %}

	Article: Q138765
	Product(s): Microsoft Macro Assembler
	Version(s): 6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the MASM ASSUME DataReg:ERROR directive, where DataReg is one of the
	general purpose data registers (ax, bx, cx, or dx) and then using indirect
	addressing on the same register, causes Ml.exe to hang (stop responding).
	
	The problem can be demonstrated by Assembling the code sample given in this
	article. The ASSUME DatReg:ERROR directive would normally cause the assembler to
	emit an error when the data register is used. By changing the first line of code
	in the sample code to a comment, you can see the error message output by the
	assembler; that line does indirect addressing with bx (mov ax,[bx]).
	
	RESOLUTION
	==========
	
	The only resolution at this time is to not use the ASSUME reg:ERROR directive in
	a program that does indirect addressing using one of the general purpose data
	registers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  ;Compile options needed: NONE
	
	  .MODEL SMALL
	
	     ASSUME bx:ERROR
	
	  .CODE
	     mov ax,[bx]
	     mov ax,bx    ;Change the proceeding line to a comment and this line will
	                  ;generate expected error
	  END
	
	Additional query words: 6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM611
	Version           : :6.11
	
	=============================================================================
	

{% endraw %}
