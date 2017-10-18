---
layout: page
title: "Q72700: FIX: MASM 6.0 May Parse a Comment as a Conditional Directive"
permalink: kb/072/Q72700/
---

## Q72700: FIX: MASM 6.0 May Parse a Comment as a Conditional Directive

	Article: Q72700
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
	
	The Microsoft Macro Assembler (MASM) version 6.0 will incorrectly parse a
	comment as if it were a conditional-assembly directive if the following
	conditions are met:
	
	1. There is a conditional-assembly directive (or word that is the same as a
	  conditional directive) inside a comment block that does not directly follow
	  the delimiter character and is the first thing on the line.
	
	2. The comment block itself is contained in a conditional-assembly block, which
	  will NOT be evaluated by the assembler.
	
	CAUSE
	=====
	
	When both of these conditions are true, the conditional-assembly directive is
	given precedence over the comment block. The conditional directive is treated as
	a keyword although it was not meant to be treated as such.
	
	RESOLUTION
	==========
	
	To work around the problem, make sure that the first word on the line inside the
	comment block is not the same as a conditional directive. For example, in the
	sample code, one solution is to change the line "If should be ignored in a
	comment" to "An if should be ignored in a comment."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM version 6.0. This problem
	was corrected in MASM version 6.0a.
	
	MORE INFORMATION
	================
	
	If the conditional-assembly directive is either IF, IFE, IFB, IFNB, IFDEF,
	IFNDEF, IFIDN, or IFDIF and there is no associated ENDIF at the beginning of
	another line, then the following errors will be generated:
	
	  error A2088 : END directive required at end of file
	  fatal error : A1010 : unmatched block nesting : if-else
	
	If the conditional-assembly directive is ELSE, then the following error is
	generated:
	
	  error A2008 : syntax error : <the text following the ELSE>
	
	If the conditional-assembly directive is ELSEIF, then the following errors are
	generated:
	
	  error A2008 : syntax error
	  error A2081 : missing operand after unary operator
	
	If the conditional-assembly directive is ENDIF, then the following errors are
	generated
	
	  error A2008 : syntax error
	  error A2044 : invalid character in file
	
	where the invalid character referred to is the closing delimiter.
	
	The sample code below illustrates this problem. It meets the above conditions, so
	it is parsed incorrectly and the following errors are generated:
	
	  error A2088 : END directive required at end of file
	  fatal error : A1010 : unmatched block nesting : if-else
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	  .MODEL small
	
	  .STACK 4096
	  .CODE
	      .startup
	
	  IFDEF   xyz                ; xyz is not defined
	
	  COMMENT ^
	          If should be ignored in this comment.
	     ^
	  ENDIF
	
	      .exit 0
	  END
	
	Additional query words: 6.00 buglist6.00 fixlist6.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600
	Version           : :6.0
	Solution Type     : kbfix
	
	=============================================================================
	
