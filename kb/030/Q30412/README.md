---
layout: page
title: "Q30412: FIX: Omitting Range Keyword After LABEL Directive Causes Error"
permalink: /kb/030/Q30412/
---

## Q30412: FIX: Omitting Range Keyword After LABEL Directive Causes Error

{% raw %}

	Article: Q30412
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
	
	When a LABEL directive is used without a type specifier, it will cause the
	error:
	
	  error A2003: Unknown type specifier
	
	This error will correctly occur if the LABEL directive is the first statement in
	the segment. However, if you also have executable statements prior to the LABEL
	directive in the code segment, error messages, such as:
	
	  error A2009: Symbol not defined: AX
	  error A2006: Phase error between passes
	
	will incorrectly occur on every statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	was corrected in MASM 5.1a.
	
	MORE INFORMATION
	================
	
	The following program demonstrates the problem. The "mov ax, 1" statement will
	incorrectly generate the error message:
	
	  error A2009: Symbol not defined: AX
	
	The statement "pt1 LABEL" will generate an:
	
	  error A2003: Unknown type specifier
	
	as expected.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .CODE
	  main PROC
	      mov ax, 1
	      pt1 LABEL   ; This line is incorrect and should generate an error
	  main ENDP
	  END main
	
	Additional query words: 5.10 5.10a 6.00 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
