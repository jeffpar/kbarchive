---
layout: page
title: "Q59585: FIX: LOCAL Directive with a Structure"
permalink: /kb/059/Q59585/
---

## Q59585: FIX: LOCAL Directive with a Structure

{% raw %}

	Article: Q59585
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
	
	On Page Update-42 of the "Microsoft Macro Assembler 5.1 Updates and Microsoft
	Editor" manual, it states that you can use the LOCAL directive with a structure
	type. When this is done, you may receive the following errors:
	
	  A2003 Unknown Type Specifier
	  A2010 Syntax Error
	
	CAUSE
	=====
	
	This feature was not implemented in MASM versions 5.1 or 5.1a.
	
	RESOLUTION
	==========
	
	To avoid the A2003 Unknown type specifier error, include the PTR keyword in the
	LOCAL directive. For example:
	
	     LOCAL stuff:parms
	
	becomes
	
	     LOCAL stuff:ptr parms
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	has been corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The following code can bed used to demonstrate this problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small, c
	  .STACK 4096
	
	  parms STRUC
	        p1 DW ?
	        p2 DW ?
	  parms ENDS
	
	  .CODE
	
	        CALL test_func
	
	  test_func PROC
	  LOCAL stuff:parms             ; A2003 Unknown type specifier
	        MOV ax, 0ffffh
	        MOV stuff. p1,ax        ; A2010 Syntax error
	        MOV stuff. p2,ax        ; A2010 Syntax error
	        RET
	  test_func ENDP
	
	  END
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
