---
layout: page
title: "Q30383: FIX: SUBSTR Will Not Work if Target Is the Same as Source"
permalink: /kb/030/Q30383/
---

## Q30383: FIX: SUBSTR Will Not Work if Target Is the Same as Source

{% raw %}

	Article: Q30383
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
	
	The SUBSTR assignment to A in the following program should not be different than
	the SUBSTR assignment to B:
	
	      .MODEL SMALL
	      .CODE
	  A   equ    <abcdef>
	  B   substr A,4
	  A   substr A,4
	      END
	
	In this program, the assignment to B is "abcdef". The assignment to A is "def".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Macro Assembler (MASM)
	version 5.1. This problem was corrected in MASM version 5.1a.
	
	Additional query words: 5.10 buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
