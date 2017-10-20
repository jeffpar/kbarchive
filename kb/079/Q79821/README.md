---
layout: page
title: "Q79821: FIX: MASM 6.0 May Incorrectly Generate A4000 for CMP"
permalink: /kb/079/Q79821/
---

## Q79821: FIX: MASM 6.0 May Incorrectly Generate A4000 for CMP

{% raw %}

	Article: Q79821
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
	
	Microsoft Macro Assembler (MASM) version 6.0 will incorrectly generate the
	following error when the sample code below is assembled:
	
	  A4000: cannot modify READONLY segment
	
	CAUSE
	=====
	
	This problem occurs because the segment is tagged as READONLY, and MASM treats
	the CMP instruction as if it modifies memory. This is incorrect behavior because
	the CMP instruction does not modify any memory.
	
	RESOLUTION
	==========
	
	To work around this problem, either remove the READONLY tag from the segment or
	ignore the warning when it is generated for CMP instructions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample code below reproduces the problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  code    SEGMENT word public readonly 'code'
	          ASSUME cs:code
	          cmp word ptr cs:[di], 0
	  code    ENDS
	
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
