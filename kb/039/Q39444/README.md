---
layout: page
title: "Q39444: DOCERR: The Stack Grows into Low Memory"
permalink: /kb/039/Q39444/
---

## Q39444: DOCERR: The Stack Grows into Low Memory

{% raw %}

	Article: Q39444
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On Page 300 of the "Microsoft Macro Assembler Programmer's Guide," the first
	paragraph incorrectly states that "it is possible to return the stack to its
	original status by subtracting the correct number of words from the SP
	register." Instead, after pushing values onto the stack, it is possible to
	return the stack to its original status by adding the correct number of words to
	the SP register.
	
	Also, the first example on Page 300 uses the SUB command to restore the stack
	pointer. The ADD command should be used instead.
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
