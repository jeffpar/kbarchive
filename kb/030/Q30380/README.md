---
layout: page
title: "Q30380: FIX: Text Macros Cannot Serve as Data-Definition Replacements"
permalink: /kb/030/Q30380/
---

## Q30380: FIX: Text Macros Cannot Serve as Data-Definition Replacements

	Article: Q30380
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
	
	A text macro cannot be used to select data-definition directives. The following
	program demonstrates this problem:
	
	      .MODEL SMALL
	      .CODE
	  start: mov ax,@data
	         mov ds,ax
	
	  gets   equ   <DW>
	  boat   gets   3
	      END start
	
	The following assembler error message is generated on the "boat gets 3" line:
	
	  A2105 Expected: instruction, directive, or label
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with MASM versions 5.1 and 5.1a.
	This problem was corrected in version 6.0.
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	
