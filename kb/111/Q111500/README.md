---
layout: page
title: "Q111500: BUG: Trailing Commas May Cause Incorrect Error Messages"
permalink: /kb/111/Q111500/
---

## Q111500: BUG: Trailing Commas May Cause Incorrect Error Messages

{% raw %}

	Article: Q111500
	Product(s): Microsoft Macro Assembler
	Version(s): 6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If extra trailing commas are placed at the end of a data declaration statement,
	the Microsoft Macro Assembler (MASM) may generate incorrect error messages,
	which can include:
	
	  error A2207: missing right parenthesis in expression
	  error A2081: missing operand after unary operator
	  error A2206: missing operator in expression
	  error A2050: real or BCD number not allowed
	
	The message given may depend upon the surrounding code. In some cases the
	incorrect message is only given when a listing file is generated (the /Fl switch
	is used). In other cases the error messages may flag the wrong line.
	
	RESOLUTION
	==========
	
	If an error message seems incorrect, check the indicated line and the
	surrounding lines for extra or improperly placed commas.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MASM versions 6.1x. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The expected error message for extra commas at the end of a data declaration
	statement is:
	
	  error A2009: syntax error in expression
	
	Note that the incorrect errors only occur when more than one trailing comma is
	used.
	
	If there is a single trailing comma and the following line is blank or a comment
	then no error is reported. The trailing comma indicates that the data on the
	following line should be concatenated to the previous data. A blank or comment
	line is ignored by MASM and so nothing is done. However, if a single comma
	occurs and the next line is not blank or a comment and does not contain correct
	data for the type being allocated, the correct error will be generated. For
	example
	
	     db "Hello",
	     nop
	
	correctly generates:
	
	  error A2008: syntax error : nop
	
	The following sample illustrates several possible incorrect error messages when
	assembled with MASM 6.1x. The error messages and their locations are not shown
	in the sample code as comments because adding the comments will change the
	behavior of MASM.
	
	Sample Code
	-----------
	
	  ;Assembly options needed: /c /Fl
	
	  .model small
	
	  .data
	     db "1",,
	
	     db "1",
	        "2",,
	
	     db "1",,
	        "2",
	
	     db "1",
	        "2",,
	        "!"
	
	  end
	
	Additional query words: 6.10 6.10a buglist6.10 buglist6.11 buglist6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM610 kbMASM611 kbMASM610a
	Version           : :6.1,6.11,6.1a
	
	=============================================================================
	

{% endraw %}
