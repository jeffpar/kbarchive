---
layout: page
title: "Q71890: FIX: Using TYPE Operator in Indirect Memory Operand Gives A2056"
permalink: /kb/071/Q71890/
---

## Q71890: FIX: Using TYPE Operator in Indirect Memory Operand Gives A2056

{% raw %}

	Article: Q71890
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
	
	The Microsoft Macro Assembler (MASM) versions 5.10 and 5.10a may generate the
	following error when the TYPE operator is used in an indirect memory operand:
	
	  error A2056: Immediate mode illegal
	
	RESOLUTION
	==========
	
	Instead of using the TYPE operator in this situation, a workaround for this
	problem is to use an equate that is set to the same value. This workaround is
	also illustrated in the following sample code (by deleting the line where the
	error occurs and uncommenting the specified line to take its place):
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 5.1 and 5.1a. This
	problem was corrected in MASM version 6.0.
	
	MORE INFORMATION
	================
	
	The TYPE operator returns a number that represents the type of an expression.
	This is normally the size of the variable in bytes. However, using the TYPE
	operator in an indirect memory operand of an instruction such as ADD causes the
	assembler to generate the A2056 error. The sample code below demonstrates this
	problem.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL SMALL
	
	  .DATA
	  String DB "this is a test"
	  STYPE  EQU TYPE(String)
	
	  .CODE
	         add WORD PTR [bx+10+TYPE(String)], 1
	  ;       add WORD PTR [bx+10+STYPE], 1       ;uncomment for workaround
	         end
	
	Additional query words: 5.10 5.10a buglist5.10 buglist5.10a fixlist6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
