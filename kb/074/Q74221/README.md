---
layout: page
title: "Q74221: FIX: COMM Directive Produces Error If Count Field Not Specified"
permalink: /kb/074/Q74221/
---

## Q74221: FIX: COMM Directive Produces Error If Count Field Not Specified

	Article: Q74221
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Macro Assembler (MASM) version 6.0 will produce a syntax error
	when multiple variables (separated by commas) are listed following a COMM
	directive if any variable, except the last one in the list, does not have a
	count field specified. For example, assembling sample code #1 with MASM 6.0
	produces the following error:
	
	  error A2008: syntax error: dec
	
	When assembling sample code #2, MASM 6.0 produces this error:
	
	  error A2008: syntax error: inc
	
	RESOLUTION
	==========
	
	The following methods may be used to work around these problems:
	
	1. Place the count field with each variable specified. For example:
	
	        COMM NEAR var1:word:1,var2:word:1,var3:word:3
	
	-or-
	
	2. Make multiple COMM statements. For example:
	
	        COMM NEAR var1:word
	        COMM NEAR var2:word
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	The sample code below illustrates this problem. MASM version 5.1 and 5.1a
	assemble the code without any errors. According to the BNF Grammar in Appendix B
	of the "Microsoft Macro Assembler Programmer's Guide," this should also assemble
	correctly with MASM version 6.0.
	
	Sample Code #1
	--------------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .DATA
	    COMM NEAR var1:WORD,   var2:WORD    ; This doesn't work
	  ; COMM NEAR var1:WORD:1, var2:WORD    ; This works
	  END
	
	Sample Code #2
	--------------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	  .DATA
	    COMM NEAR var1:WORD,
	              var2:WORD, var3:WORD      ; This doesn't work
	
	  ; COMM NEAR var1:WORD:1,
	  ;           var2:WORD:1, var3:WORD:1  ; This works
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : MS-DOS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
