---
layout: page
title: "Q39443: FIX: Parentheses Necessary for Operator Precedence"
permalink: /kb/039/Q39443/
---

## Q39443: FIX: Parentheses Necessary for Operator Precedence

{% raw %}

	Article: Q39443
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
	
	Using Microsoft Macro Assembler (MASM) version 5.1, You may be able to correct
	"Illegal size for operand" errors by careful use of parentheses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	was corrected in MASM version 5.1a.
	
	MORE INFORMATION
	================
	
	The following code demonstrates warnings, errors, and their solution:
	
	  dosseg
	  .model small,c
	  .data
	
	  .code
	  myproc PROC buffer:FAR PTR BYTE
	
	             mov     bx, WORD PTR buffer[0]
	             mov     ds, WORD PTR buffer[2]
	
	  ; MASM gives an operand-size error. This is a precedence problem that
	  ; you can correct with parentheses:
	
	             mov     bx, WORD PTR (buffer[0])
	             mov     ds, WORD PTR (buffer[2])
	
	  myproc ENDP
	
	  end
	
	Additional query words: 5.10 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
