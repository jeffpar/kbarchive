---
layout: page
title: "Q30416: FIX: Only First LOCAL Variable Generates CodeView Information"
permalink: /kb/030/Q30416/
---

## Q30416: FIX: Only First LOCAL Variable Generates CodeView Information

	Article: Q30416
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
	
	In the Microsoft Macro Assembler (MASM) version 5.1, only the first LOCAL
	variable on a line generates CodeView information. Attempting to put a watch on
	a LOCAL variable that is not the first LOCAL variable on a line will cause
	Codeview to display the following message box:
	
	  
	
	             --------------------------------
	            |              ERROR             |
	            |         Unknown Symbol         |
	            |  Press Any Key to Continue...  |
	             --------------------------------
	
	RESOLUTION
	==========
	
	To avoid the problem in MASM version 5.1, break up any lines that define more
	than one LOCAL variable into multiple lines.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 5.1. This problem
	was corrected in MASM version 5.1a.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem:
	
	Sample Code
	-----------
	
	  ; Assemble options needed: /Zi
	  ; Link options needed:     /CO
	
	      .MODEL small, C    ; A Language specifier is required when using
	                         ; the LOCAL directive in MASM 5.1, 5.1A and
	                         ; when using QuickAssembler 2.01 and 2.51.
	                         ; MASM 6.0 does not require this.
	
	      .CODE
	
	  Start:
	
	      call  procedure    ; Call the procedure
	      mov   ax, 4C00h    ; Exit
	      int   21h
	
	      procedure proc
	
	      local     first:word
	      local     second:word,third:word
	
	      ; To avoid the problem in MASM 5.1, break the preceding line up
	      ; into multiple lines:
	      ;
	      ; local      second:word
	      ; local      third:word
	
	      ret
	
	      procedure endp
	
	      .STACK
	
	      END Start
	
	Additional query words: 5.10 5.10a buglist5.10 fixlist5.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	
