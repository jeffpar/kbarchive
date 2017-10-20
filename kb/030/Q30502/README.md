---
layout: page
title: "Q30502: FIX: A2107 with .RADIX 16 and Real Number Initialization"
permalink: /kb/030/Q30502/
---

## Q30502: FIX: A2107 with .RADIX 16 and Real Number Initialization

{% raw %}

	Article: Q30502
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
	
	When the .RADIX 16 directive is used, a real number initialization statement
	will cause MASM version 5.10 to generate the following error message:
	
	  file.asm(4): error A2107: Non-digit in number
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with MASM version 5.10. This
	problem was corrected in MASM version 5.10a.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .RADIX 16
	  .data
	  sym dd 1.0
	  end
	
	Additional query words: 5.10 5.10a buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
